import React from 'react'
import RadTitle from '../RadTitle'
import SkillsCollection from './SkillsCollection'

const SkillsContent = () => {
    return (
        <div className='w-full pb-2 mx-auto'>

            <RadTitle
                title='Technical'
                spacing={false}
            />


            <div className='w-full px-2 mx-auto mobilefold:px-4 font-heading text-retroblack-50'>

                <SkillsCollection
                    one='JavaScript'
                    two='TypeScript'
                />

                <div className='w-10/12 mx-auto my-1 border-t-2 border-retroradwarm-150' />

                <SkillsCollection
                    one='React'
                    two='Node'
                    three='Express'
                />

                <div className='w-full mx-auto my-1 border-t-2 border-retroradwarm-150' />

                <SkillsCollection
                    one='MongoDB'
                    two='GraphQL'
                />

                <div className='w-10/12 mx-auto my-1 border-t-2 border-retroradwarm-150' />

                <SkillsCollection
                    one='Nextjs'
                    two='D3js'
                    three='jQuery'
                />

                <div className='w-full mx-auto my-1 border-t-2 border-retroradwarm-150' />

                <SkillsCollection
                    one='Tailwind'
                    two='Material UI'
                />

                <div className='w-10/12 mx-auto my-1 border-t-2 border-retroradwarm-150' />

                <SkillsCollection
                    one='HTML'
                    two='CSS'
                    three='Liquid'
                />

            </div>



            <RadTitle
                title='Creative'
                spacing={false}
            />


            <div className='w-full px-2 pb-2 mx-auto mb-4 mobilefold:px-4 font-heading text-retroblack-50'>

                <SkillsCollection
                    one='Photoshop'
                    two='Illustrator'
                />

                <div className='w-10/12 mx-auto my-1 border-t-2 border-retroradwarm-150' />

                <SkillsCollection
                    one='Flash'
                    two='Clip Studio'
                    three='Figma'
                />

                <div className='w-full mx-auto my-1 border-t-2 border-retroradwarm-150' />

                <SkillsCollection
                    one='Premiere'
                    two='After Effects'
                />

            </div>

        </div>
    )
}

export default SkillsContent