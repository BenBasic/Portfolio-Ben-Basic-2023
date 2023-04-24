import React from 'react'
import Image from 'next/image'

type TContent = {
    content: JSX.Element,
    title: string,
    img: string,
    connectTop: boolean,
    connectBottom: boolean,
}

const MainContainer: React.FC<TContent> = ({ content, title, img, connectTop, connectBottom }) => {
    return (
        <div className='w-full max-w-lg p-2 mx-auto 2xl:max-w-xl mobilemd:px-4' id={`${title}`}>
            <div className="w-full mx-auto mt-4 mobilemd:p-4 mobilesm:p-3 p-2 bg-[#de3931] rounded-xl relative">
                <div className="w-full h-full mobilemd:p-4 mobilesm:p-3 p-2 mx-auto bg-[#e5732d] rounded-xl relative">
                    <div className="w-full h-full mobilemd:p-4 mobilesm:p-3 p-2 mx-auto bg-[#f0b024] rounded-xl relative">
                        <div className="w-full h-full mx-auto bg-[#f6dcad] rounded-xl">

                            <div className='relative aspect-[80/83] p-4'>
                                <Image className='p-4'
                                    src={`/${img}.webp`}
                                    alt='Cartoon portrait of Ben Basic'
                                    fill
                                    priority
                                    sizes="(max-width: 300px) 236px,
                                    (max-width: 400px) 310px,
                                    (max-width: 1535px) 384px,
                                    448px"
                                    key={`${img}`}

                                />

                            </div>


                            <div className='relative w-full py-0 text-center mobilesm:py-2'>
                                <div className='relative w-full mx-auto bg-retroradwarm-100'>
                                    <h1 className='py-2 mx-auto mt-0 mb-4 text-4xl text-center mobilesm:mt-4 mobiletiny:text-5xl text-retroblack font-heading'>
                                        {title}
                                    </h1>

                                    <div className='absolute top-0 w-4 h-full bg-retroradwarm-100 -left-2' />
                                    <div className='absolute top-0 w-4 h-full bg-retroradwarm-100 -right-2' />
                                </div>

                            </div>

                            {content}


                        </div>
                    </div>
                </div>

                {connectTop &&
                    <div className='absolute top-0 w-full left-1/2'>
                        <div className='absolute w-40 h-12 -ml-20 bg-retroradwarm-200 mobilemd:-top-8 mobilesm:-top-11 -top-12' />

                        <div className='absolute w-24 -ml-12 bg-retroradwarm-150 h-14 mobilemd:-top-8 mobilesm:-top-11 -top-12' />

                        <div className='absolute w-12 h-20 -ml-6 bg-retroradwarm-100 mobilemd:-top-8 mobilesm:-top-12 -top-14' />


                        <div className='absolute w-5 -ml-16 rounded-br-lg mobilemd:h-12 h-14 bg-retroradwarm-200 mobilemd:-top-8 mobilesm:-top-11 -top-12' />
                        <div className='absolute w-5 rounded-bl-lg mobilemd:h-12 h-14 bg-retroradwarm-200 ml-11 mobilemd:-top-8 mobilesm:-top-11 -top-12' />

                        <div className='absolute w-5 h-20 -ml-10 rounded-br-lg mobilemd:h-16 bg-retroradwarm-150 mobilemd:-top-8 mobilesm:-top-14 -top-16' />
                        <div className='absolute w-5 h-20 ml-5 rounded-bl-lg mobilemd:h-16 bg-retroradwarm-150 mobilemd:-top-8 mobilesm:-top-14 -top-16' />

                        <div className='absolute w-8 h-12 -ml-24 rounded-br-lg mobilesm:h-11 mobilemd:h-8 bg-retroradcool-150 mobilemd:-top-8 mobilesm:-top-11 -top-12' />
                        <div className='absolute w-8 h-12 ml-16 rounded-bl-lg mobilesm:h-11 mobilemd:h-8 bg-retroradcool-150 mobilemd:-top-8 mobilesm:-top-11 -top-12' />

                    </div>
                }

                {connectBottom &&
                    <div className='absolute w-full left-1/2'>

                        <div className='absolute w-40 h-40 -ml-20 bg-retroradwarm-200' />

                        <div className='absolute w-24 h-40 -ml-12 mobilemd:h-44 bg-retroradwarm-150 -bottom-40' />

                        <div className='absolute w-12 -ml-6 h-44 mobilemd:h-48 bg-retroradwarm-100 -bottom-40' />


                        <div className='absolute w-5 h-40 -ml-16 rounded-tr-lg bg-retroradwarm-200' />
                        <div className='absolute w-5 h-40 rounded-tl-lg bg-retroradwarm-200 ml-11' />

                        <div className='absolute w-5 h-32 mb-2 -ml-10 rounded-tr-lg mobilesm:mb-3 bg-retroradwarm-150 mobilemd:mb-0 mobilemd:h-44 mobilemd:-bottom-40 -bottom-32' />
                        <div className='absolute w-5 h-32 mb-2 ml-5 rounded-tl-lg mobilesm:mb-3 bg-retroradwarm-150 mobilemd:mb-0 mobilemd:h-44 mobilemd:-bottom-40 -bottom-32' />

                        <div className='absolute w-8 h-32 mb-2 -ml-24 rounded-tr-lg mobilesm:mb-1 mobilemd:mb-0 bg-retroradcool-150 mobilemd:h-36 mobilemd:-bottom-40 -bottom-36' />
                        <div className='absolute w-8 h-32 mb-2 ml-16 rounded-tl-lg mobilesm:mb-1 mobilemd:mb-0 bg-retroradcool-150 mobilemd:h-36 mobilemd:-bottom-40 -bottom-36' />

                    </div>
                }

            </div>
        </div>

    )
}

export default MainContainer