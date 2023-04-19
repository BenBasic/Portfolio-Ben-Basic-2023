import React from 'react'
import SkillsCollection from './SkillsCollection'

const skillList = {

    tech: [

        // 'JavaScript',
        // 'TypeScript',
        // 'React',
        // 'Node',
        // 'Nextjs',
        // 'D3js',
        // 'MongoDB',
        'MySQL',
        // 'GraphQL',
        // 'Express',
        // 'jQuery',
        // 'Tailwind',
        // 'Material UI',
        'Bootstrap',
        // 'HTML',
        // 'CSS',

    ],
}

const SkillsContent = () => {
    return (
        <div className='w-full pb-2 mx-auto'>

            <div className='relative w-full py-2 text-center'>
                <div className='relative w-full mx-auto'>
                    <h1 className='py-1 mx-auto my-4 text-3xl text-center text-retroblack font-heading'>
                        Technical
                    </h1>

                    <div className='absolute left-0 w-1/4 h-8 -ml-4 top-2 bg-retroradwarm-100 rounded-r-xl' />
                    <div className='absolute right-0 w-1/4 h-8 -mr-4 top-2 bg-retroradwarm-100 rounded-l-xl' />

                    <div className='absolute left-0 w-1/4 h-4 -ml-6 top-4 bg-retroradwarm-150 rounded-r-xl' />
                    <div className='absolute right-0 w-1/4 h-4 -mr-6 top-4 bg-retroradwarm-150 rounded-l-xl' />
                </div>

            </div>


            <div className='w-full px-4 mx-auto font-heading text-retroblack-50'>

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
                    three='Git'
                />

            </div>


            <div className='relative w-full py-2 text-center'>
                <div className='relative w-full mx-auto'>
                    <h1 className='py-1 mx-auto my-4 text-3xl text-center text-retroblack font-heading'>
                        Creative
                    </h1>

                    <div className='absolute left-0 w-1/4 h-8 -ml-4 top-2 bg-retroradwarm-100 rounded-r-xl' />
                    <div className='absolute right-0 w-1/4 h-8 -mr-4 top-2 bg-retroradwarm-100 rounded-l-xl' />

                    <div className='absolute left-0 w-1/4 h-4 -ml-6 top-4 bg-retroradwarm-150 rounded-r-xl' />
                    <div className='absolute right-0 w-1/4 h-4 -mr-6 top-4 bg-retroradwarm-150 rounded-l-xl' />
                </div>

            </div>


            <div className='w-full px-4 pb-2 mx-auto mb-4 font-heading text-retroblack-50'>

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