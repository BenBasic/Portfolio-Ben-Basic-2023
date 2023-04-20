import React from 'react'
import SkillsCollection from './SkillsCollection'
import ProjectsIndividual from './ProjectsIndividual'

const ProjectsContent = () => {
    return (
        <div className='w-full pb-2 mx-auto'>

            <ProjectsIndividual
                name='HWY 17 Hotel'
                img='Proj-HWY17'
                alt='Screenshot of HWY 17 Hotel website homepage'
                url='https://www.hwy17hotel.com/'
                description={
                    <div className='mx-auto'>
                        <p className='mx-4 my-1 text-base'>
                            Hotel website with real-time reservation system.
                        </p>

                        <p className='mx-4 my-1 text-base'>
                            Designed and developed from the ground up for client within a 2 month deadline.
                        </p>
                    </div>
                }
                skills={
                    <div className='w-full px-4 mx-auto mb-5 font-heading text-retroblack-50'>

                        <SkillsCollection
                            one='TypeScript'
                            two='Nextjs'
                            three='React'
                        />

                        <div className='w-full mx-auto my-1 border-t-2 border-retroradwarm-150' />

                        <SkillsCollection
                            one='Tailwind'
                            two='Framer Motion'
                        />

                        <div className='w-10/12 mx-auto my-1 border-t-2 border-retroradwarm-150' />

                        <SkillsCollection
                            one='MongoDB'
                            two='Node'
                            three='Express'
                        />

                        <div className='w-full mx-auto my-1 border-t-2 border-retroradwarm-150' />

                        <SkillsCollection
                            one='Stripe API'
                            two='Cloudbeds API'
                        />

                    </div>
                }
            />


            {/*  */}
            {/*  */}
            {/*  */}


            <ProjectsIndividual
                name='Big Bird Inn'
                img='Proj-BigBird'
                alt='Screenshot of Big Bird Inn website reservation page'
                url='https://www.bigbirdinn.com/'
                description={
                    <div className='mx-auto'>
                        <p className='mx-4 my-1 text-base'>
                            Hotel website with real-time reservation system.
                        </p>

                        <p className='mx-4 my-1 text-base'>
                            Designed and developed from the ground up for client within a 2 month deadline.
                        </p>
                    </div>
                }
                skills={
                    <div className='w-full px-4 mx-auto mb-5 font-heading text-retroblack-50'>

                        <SkillsCollection
                            one='TypeScript'
                            two='Nextjs'
                            three='React'
                        />

                        <div className='w-full mx-auto my-1 border-t-2 border-retroradwarm-150' />

                        <SkillsCollection
                            one='Tailwind'
                            two='Framer Motion'
                        />

                        <div className='w-10/12 mx-auto my-1 border-t-2 border-retroradwarm-150' />

                        <SkillsCollection
                            one='MongoDB'
                            two='Node'
                            three='Express'
                        />

                        <div className='w-full mx-auto my-1 border-t-2 border-retroradwarm-150' />

                        <SkillsCollection
                            one='Stripe API'
                            two='Cloudbeds API'
                        />

                    </div>
                }
            />


            {/*  */}
            {/*  */}
            {/*  */}


            <ProjectsIndividual
                name='NutraBee'
                img='Proj-NutraBee'
                alt='Screenshot of NutraBee website homepage'
                url='https://www.nutrabee.ca/'
                description={
                    <div className='mx-auto'>
                        <p className='mx-4 my-1 text-base'>
                            Custom Shopify store with existing codebase taken over.
                        </p>

                        <p className='mx-4 my-1 text-base'>
                            Implemented new features, bug fixes, and performance optimization for client.
                        </p>
                    </div>
                }
                skills={
                    <div className='w-full px-4 mx-auto mb-5 font-heading text-retroblack-50'>

                        <SkillsCollection
                            one='Liquid'
                            two='JavaScript'
                            three='CSS'
                        />

                        <div className='w-full mx-auto my-1 border-t-2 border-retroradwarm-150' />

                        <SkillsCollection
                            one='HTML'
                            two='jQuery'
                        />

                    </div>
                }
            />


        </div>
    )
}

export default ProjectsContent