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
        <div className='w-full px-4'>
            <div className="w-full mx-auto mt-4 p-4 bg-[#de3931] rounded-xl relative">
                <div className="w-full h-full p-4 mx-auto bg-[#e5732d] rounded-xl relative">
                    <div className="w-full h-full p-4 mx-auto bg-[#f0b024] rounded-xl relative">
                        <div className="w-full h-full mx-auto bg-[#f6dcad] rounded-xl">

                            <div className='relative aspect-[80/83] p-4'>
                                <Image className='p-4'
                                    src={`/${img}.webp`}
                                    alt='Cartoon portrait of Ben Basic'
                                    fill
                                    priority
                                    sizes='100vw'
                                    key={`${img}`}
                                // "(max-width: 300px) 252px,
                                // (max-width: 400px) 352px,
                                // (max-width: 500px) 452px,
                                // 512px"
                                />

                            </div>


                            <div className='relative w-full py-2 text-center'>
                                <div className='w-full mx-auto bg-retroradwarm-100'>
                                    <h1 className='py-2 mx-auto my-4 text-5xl text-center text-retroblack font-heading'>
                                        {title}
                                    </h1>
                                </div>
                            </div>

                            {content}


                        </div>
                    </div>
                </div>

                {connectTop &&
                    <div className='absolute top-0 w-full left-1/2'>
                        <div className='absolute w-40 h-12 -ml-20 bg-retroradwarm-200 -top-8' />

                        <div className='absolute w-24 h-16 -ml-12 bg-retroradwarm-150 -top-8' />

                        <div className='absolute w-12 h-20 -ml-6 bg-retroradwarm-100 -top-8' />


                        <div className='absolute w-5 h-12 -ml-16 rounded-br-lg bg-retroradwarm-200 -top-8' />
                        <div className='absolute w-5 h-12 rounded-bl-lg bg-retroradwarm-200 ml-11 -top-8' />

                        <div className='absolute w-5 h-16 -ml-10 rounded-br-lg bg-retroradwarm-150 -top-8' />
                        <div className='absolute w-5 h-16 ml-5 rounded-bl-lg bg-retroradwarm-150 -top-8' />

                        <div className='absolute w-8 h-8 -ml-24 rounded-br-lg bg-retroradcool-150 -top-8' />
                        <div className='absolute w-8 h-8 ml-16 rounded-bl-lg bg-retroradcool-150 -top-8' />

                    </div>
                }

                {connectBottom &&
                    <div className='absolute w-full left-1/2'>

                        <div className='absolute w-40 h-40 -ml-20 bg-retroradwarm-200' />

                        <div className='absolute w-24 -ml-12 h-44 bg-retroradwarm-150 -bottom-40' />

                        <div className='absolute w-12 h-48 -ml-6 bg-retroradwarm-100 -bottom-40' />


                        <div className='absolute w-5 h-40 -ml-16 rounded-tr-lg bg-retroradwarm-200' />
                        <div className='absolute w-5 h-40 rounded-tl-lg bg-retroradwarm-200 ml-11' />

                        <div className='absolute w-5 -ml-10 rounded-tr-lg h-44 bg-retroradwarm-150 -bottom-40' />
                        <div className='absolute w-5 ml-5 rounded-tl-lg h-44 bg-retroradwarm-150 -bottom-40' />

                        <div className='absolute w-8 -ml-24 rounded-tr-lg bg-retroradcool-150 h-36 -bottom-40' />
                        <div className='absolute w-8 ml-16 rounded-tl-lg bg-retroradcool-150 h-36 -bottom-40' />

                    </div>
                }

            </div>
        </div>

    )
}

export default MainContainer