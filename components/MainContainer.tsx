import React from 'react'
import Image from 'next/image'

const MainContainer = () => {
    return (
        <div className='w-full px-4'>
            <div className="w-full mx-auto mt-4 p-4 bg-[#de3931] rounded-xl">
                <div className="w-full h-full p-4 mx-auto bg-[#e5732d] rounded-xl">
                    <div className="w-full h-full p-4 mx-auto bg-[#f0b024] rounded-xl">
                        <div className="w-full h-full p-4 mx-auto bg-[#f6dcad] rounded-xl">
                            <div className='relative aspect-[80/83]'>
                                <Image className=''
                                    src={'/Portfolio2023Headshot.webp'}
                                    alt='Cartoon portrait of Ben Basic'
                                    fill
                                    priority
                                    sizes='100vw'
                                // "(max-width: 300px) 252px,
                                // (max-width: 400px) 352px,
                                // (max-width: 500px) 452px,
                                // 512px"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainContainer