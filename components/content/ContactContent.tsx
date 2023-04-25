import React from 'react'
import RadTitle from '../RadTitle'
import RadButton from '../RadButton'
import ContactForm from './ContactForm'

const ContactContent = () => {
    return (
        <div className='w-full pb-2 mx-auto'>

            <RadTitle
                title='Socials'
                spacing={true}
            />

            <RadButton
                text='LinkedIn'
                url='https://www.linkedin.com/in/benbasic/'
                margin={false}
            />

            <div className='w-10/12 mx-auto mt-2 mb-1 border-t-2 border-retroradwarm-150' />

            <RadButton
                text='GitHub'
                url='https://github.com/BenBasic'
                margin={false}
            />


            <RadTitle
                title='Email Me'
                spacing={true}
            />

            <ContactForm />

        </div>
    )
}

export default ContactContent