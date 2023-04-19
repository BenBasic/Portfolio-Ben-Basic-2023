import React from 'react'

type TSkillRow = {
    one: string,
    two: string,
    three?: string | undefined,
}

const SlashOne = () => <span className=" text-retroradwarm-200">/</span>
const SlashTwo = () => <span className=" text-retroradwarm-150">/</span>

const SkillsCollection: React.FC<TSkillRow> = ({ one, two, three }) => {
    return (
        <div className='w-full px-2 mx-auto text-lg text-center border-2 rounded-full border-retroradwarm-200'>

            <h2 className='inline px-1'>
                {one}
            </h2>

            <SlashOne />
            <SlashTwo />

            <h2 className='inline px-1'>
                {two}
            </h2>

            {three &&
                <>
                    <SlashOne />
                    <SlashTwo />

                    <h2 className='inline px-1'>
                        {three}
                    </h2>
                </>
            }



        </div>
    )
}

export default SkillsCollection