import React from 'react'

type TButton = {
    text: string,
    url: string,
    margin: boolean,
}

const RadButton: React.FC<TButton> = ({ text, url, margin }) => {
    return (
        <div className={`w-full mx-auto ${margin ? 'mb-3' : ''} text-center`}>
            <a href={`${url}`} target="_blank" rel="noreferrer">
                <button className='w-10/12 py-1 transition-colors duration-75 rounded-full bg-buttonblue-50 hover:bg-buttonblue-100 active:bg-buttonblue-150 drop-shadow-[0px_3px_0px_rgb(226,168,101)]'>
                    <span className='text-2xl text-white font-heading'>
                        {text}
                    </span>
                </button>
            </a>
        </div>
    )
}

export default RadButton