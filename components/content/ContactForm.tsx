"use client"

import React, { useState } from 'react'
import { validateName, validateEmail, validateMessage } from '@/utils/validations';
import { send } from '@emailjs/browser';

const ContactForm = () => {

    const [loading, setLoading] = useState(false);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState<string[]>([]);

    const errorContent = {
        name: 'Please enter your name.',
        email: 'Please enter a valid email.',
        message: 'Please type out a message.'
    };

    const [submitMessage, setSubmitMessage] = useState<string>('');

    const displayError = (errorSearch: string) => {
        return errorMessage.some((error) => error.includes(errorSearch));
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.currentTarget.name]: e.currentTarget.value });
    };


    const handleBlur = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

        const inputValidation =
            (
                validation: (email: string) => boolean | ((message: string) => boolean) | ((name: string) => boolean),
                errorSearch: string,
                errorText: string
            ) => {

                const validCheck = validation(e.currentTarget.value)
                const errorExists = errorMessage.some((error) => error.includes(errorSearch));

                if (validCheck && errorExists) setErrorMessage(errorMessage.filter(error => !error.includes(errorSearch)));
                if (!validCheck && !errorExists) setErrorMessage([...errorMessage, errorText]);

            };

        if (e.currentTarget.name === 'name') {
            inputValidation(validateName, 'name', errorContent.name);
        }

        if (e.currentTarget.name === 'email') {
            inputValidation(validateEmail, 'email', errorContent.email);
        };

        if (e.currentTarget.name === 'message') {
            inputValidation(validateMessage, 'message', errorContent.message);
        };

    };

    const handleSubmit = async (e: React.FormEvent<EventTarget | HTMLFormElement>, name: string, email: string, message: string) => {

        e.preventDefault();

        const nameValidCheck = validateName(name);
        const emailValidCheck = validateEmail(email);
        const messageValidCheck = validateMessage(message);

        let errors: string[] = []

        if (!nameValidCheck) errors.push(errorContent.name);

        if (!emailValidCheck) errors.push(errorContent.email);

        if (!messageValidCheck) errors.push(errorContent.message);

        if (errors.length >= 1) setErrorMessage(errors);


        if (errors.length === 0) {

            setLoading(true);

            send(
                `${process.env.NEXT_PUBLIC_ID}`,
                `${process.env.NEXT_PUBLIC_TEMPLATE}`,
                formState,
                `${process.env.NEXT_PUBLIC_CLIENT_KEY}`
            )
                .then((response) => {
                    console.log('Email has been sent!', response.status, response.text);
                    setSubmitMessage("Your email has been sent!");
                })
                .catch((err) => {
                    console.log('Email failed to send', err);
                    setSubmitMessage("Your email failed to send, please try again");
                });

            setLoading(false);

        };
    };


    return (
        <div className='w-full px-4 pb-2 mx-auto'>


            <form className={submitMessage === 'Your email has been sent!' ? 'relative invisible' : 'relative visible'}
                onSubmit={(e) => handleSubmit(e, formState.name, formState.email, formState.message)}
                autoComplete='off'>

                <div className='relative w-full'>
                    <label className='pl-1 text-lg font-heading text-retroblack-50'
                        htmlFor='form-name'
                    >
                        Name {displayError('name') &&
                            <span className='absolute left-0 pt-1 pl-1 text-sm mobilefold:text-base -bottom-4 mobilefold:-bottom-5 text-retroradcool-150 animate-heartbeat font-descriptionBold'>
                                {errorContent.name}
                            </span>}
                    </label>
                    <input
                        className={`w-full px-2 py-1 mb-1 leading-none ${displayError('name') ? 'bg-retroradwarm-200' : 'bg-transparent'} border-2 rounded outline-none appearance-none border-retroblack-50 text-retroblack placeholder-retroblack placeholder-opacity-70 font-description focus:bg-white`}
                        id='form-name'
                        name='name'
                        type='text'
                        placeholder='Your Name'
                        defaultValue={formState.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>

                <div className='relative w-full my-3'>
                    <label className='pl-1 text-lg font-heading text-retroblack-50'
                        htmlFor='form-email'
                    >
                        Email {displayError('email') &&
                            <span className='absolute left-0 pt-1 pl-1 text-sm mobilefold:text-base -bottom-4 mobilefold:-bottom-5 text-retroradcool-150 animate-heartbeat font-descriptionBold'>
                                {errorContent.email}
                            </span>}
                    </label>
                    <input
                        className={`w-full px-2 py-1 mb-1 leading-none ${displayError('email') ? 'bg-retroradwarm-200' : 'bg-transparent'} border-2 rounded outline-none appearance-none border-retroblack-50 text-retroblack placeholder-retroblack placeholder-opacity-70 font-description focus:bg-white`}
                        id='form-email'
                        name='email'
                        type='email'
                        placeholder='example@email.com'
                        defaultValue={formState.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>

                <div className='relative w-full my-3'>
                    <label className='pl-1 text-lg font-heading text-retroblack-50'
                        htmlFor='form-message'
                    >
                        Message {displayError('message') &&
                            <span className='absolute left-0 pt-1 pl-1 text-sm mobilefold:text-base -bottom-2 mobilefold:-bottom-3 text-retroradcool-150 animate-heartbeat font-descriptionBold'>
                                {errorContent.message}
                            </span>}
                    </label>
                    <textarea className={`w-full px-2 py-1 mb-1 leading-none ${displayError('message') ? 'bg-retroradwarm-200' : 'bg-transparent'} border-2 rounded outline-none appearance-none border-retroblack-50 text-retroblack placeholder-retroblack placeholder-opacity-70 font-description focus:bg-white`}
                        id='form-message'
                        name='message'
                        rows={3}
                        maxLength={2000}
                        placeholder='Your message here.'
                        defaultValue={formState.message}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>

                <button className={`flex items-center justify-center w-full py-1 mt-4 transition-colors duration-75 rounded-full bg-buttonblue-50 hover:bg-buttonblue-100 active:bg-buttonblue-150 ${submitMessage === 'Your email has been sent!' ? 'drop-shadow-none invisible' : 'drop-shadow-[0px_3px_0px_rgb(226,168,101)] visible'}`}
                    type="submit"
                    disabled={loading}
                >
                    <span className='text-2xl text-center text-white font-heading'>
                        Send
                    </span>
                </button>


                {submitMessage === 'Your email has been sent!' &&
                    <>
                        <div className='absolute left-0 visible w-full mx-auto text-center top-1/2'>
                            <h1 className='text-xl font-heading text-retroblack-50'>
                                {submitMessage}
                            </h1>
                        </div>

                        <div className='absolute visible w-full h-10 mx-auto my-2 text-center bg-retroradwarm-50 -bottom-5' />
                    </>
                }

                {submitMessage === 'Your email failed to send, please try again' &&
                    <>
                        <div className='visible w-full mx-auto my-2 text-center'>
                            <h1 className='text-xl font-heading text-retroblack-50'>
                                {submitMessage}
                            </h1>
                        </div>

                        <div className='absolute visible w-full h-10 mx-auto my-2 text-center bg-retroradwarm-50 -bottom-5' />
                    </>
                }

            </form>

        </div>
    )
}

export default ContactForm