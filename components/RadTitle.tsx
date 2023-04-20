import React from 'react'

type TRadTitle = {
    title: string,
    spacing: boolean,
}

const RadTitle: React.FC<TRadTitle> = ({ title, spacing }) => {
    return (

        <div className='relative w-full py-2 text-center'>
            <div className='relative w-full mx-auto'>
                
                <h1 className='py-1 mx-auto my-4 text-3xl text-center text-retroblack font-heading'>
                    {title}
                </h1>

                <div className={`absolute left-0 ${spacing ? 'w-1/5' : 'w-1/4'} h-8 -ml-4 top-2 bg-retroradwarm-100 rounded-r-xl`} />
                <div className={`absolute right-0 ${spacing ? 'w-1/5' : 'w-1/4'} h-8 -mr-4 top-2 bg-retroradwarm-100 rounded-l-xl`} />

                <div className={`absolute left-0 ${spacing ? 'w-1/5' : 'w-1/4'} h-4 -ml-6 top-4 bg-retroradwarm-150 rounded-r-xl`} />
                <div className={`absolute right-0 ${spacing ? 'w-1/5' : 'w-1/4'} h-4 -mr-6 top-4 bg-retroradwarm-150 rounded-l-xl`} />
            </div>
        </div>

    )
}

export default RadTitle