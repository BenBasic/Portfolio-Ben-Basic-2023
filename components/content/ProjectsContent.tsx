import React from 'react'
import Image from 'next/image'
import SkillsCollection from './SkillsCollection'

const ProjectsContent = () => {
    return (
        <div className='w-full pb-2 mx-auto'>

            <div className='relative w-full py-2 text-center'>
                <div className='relative w-full mx-auto'>
                    <h1 className='py-1 mx-auto my-4 text-3xl text-center text-retroblack font-heading'>
                        HWY 17 Hotel
                    </h1>

                    <div className='absolute left-0 w-1/5 h-8 -ml-4 top-2 bg-retroradwarm-100 rounded-r-xl' />
                    <div className='absolute right-0 w-1/5 h-8 -mr-4 top-2 bg-retroradwarm-100 rounded-l-xl' />

                    <div className='absolute left-0 w-1/5 h-4 -ml-6 top-4 bg-retroradwarm-150 rounded-r-xl' />
                    <div className='absolute right-0 w-1/5 h-4 -mr-6 top-4 bg-retroradwarm-150 rounded-l-xl' />
                </div>

            </div>


            <div className='relative aspect-[16/9] p-4 mx-4 mb-2'>
                <Image className='border-t-4 border-b-8 rounded-xl border-x-4 border-retroblack'
                    src={`/Proj-HWY17.webp`}
                    alt='Screenshot of HWY 17 Hotel website homepage'
                    fill
                    priority
                    sizes='100vw'
                    key={`HWY17`}
                // "(max-width: 300px) 252px,
                // (max-width: 400px) 352px,
                // (max-width: 500px) 452px,
                // 512px"
                />

            </div>

            <div className='w-full mx-auto mb-3 text-center'>
                <a>
                    <button className='w-10/12 py-1 rounded-full bg-[#A3211A]'>
                        <span className='text-2xl text-white font-heading'>
                            Visit Site
                        </span>
                    </button>
                </a>
            </div>


            <div className='w-11/12 mx-auto mb-4 text-center border-2 border-black font-descriptionBold text-retroblack-50 rounded-xl'>

                <p className='mx-4 my-1 text-base'>
                    Hotel website with real-time reservation system.
                    Designed and developed from the ground up. Created for client within a 2 month deadline.
                </p>

            </div>


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


            {/*  */}
            {/*  */}
            {/*  */}


            <div className='relative w-full py-2 text-center'>
                <div className='relative w-full mx-auto'>
                    <h1 className='py-1 mx-auto my-4 text-3xl text-center text-retroblack font-heading'>
                        Big Bird Inn
                    </h1>

                    <div className='absolute left-0 w-1/5 h-8 -ml-4 top-2 bg-retroradwarm-100 rounded-r-xl' />
                    <div className='absolute right-0 w-1/5 h-8 -mr-4 top-2 bg-retroradwarm-100 rounded-l-xl' />

                    <div className='absolute left-0 w-1/5 h-4 -ml-6 top-4 bg-retroradwarm-150 rounded-r-xl' />
                    <div className='absolute right-0 w-1/5 h-4 -mr-6 top-4 bg-retroradwarm-150 rounded-l-xl' />
                </div>

            </div>


            <div className='relative aspect-[16/9] p-4 mx-4 mb-2'>
                <Image className='border-t-4 border-b-8 rounded-xl border-x-4 border-retroblack'
                    src={`/Proj-BigBird.webp`}
                    alt='Screenshot of Big Bird Inn website homepage'
                    fill
                    priority
                    sizes='100vw'
                    key={`BigBird`}
                // "(max-width: 300px) 252px,
                // (max-width: 400px) 352px,
                // (max-width: 500px) 452px,
                // 512px"
                />

            </div>

            <div className='w-full mx-auto mb-3 text-center'>
                <a>
                    <button className='w-10/12 py-1 rounded-full bg-[#A3211A]'>
                        <span className='text-2xl text-white font-heading'>
                            Visit Site
                        </span>
                    </button>
                </a>
            </div>


            <div className='w-11/12 mx-auto mb-4 text-center border-2 border-black font-descriptionBold text-retroblack-50 rounded-xl'>

                <p className='mx-4 my-1 text-base'>
                    Hotel website with real-time reservation system.
                    Designed and developed from the ground up. Created for client within a 2 month deadline.
                </p>

            </div>


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


            {/*  */}
            {/*  */}
            {/*  */}


            <div className='relative w-full py-2 text-center'>
                <div className='relative w-full mx-auto'>
                    <h1 className='py-1 mx-auto my-4 text-3xl text-center text-retroblack font-heading'>
                        NutraBee
                    </h1>

                    <div className='absolute left-0 w-1/5 h-8 -ml-4 top-2 bg-retroradwarm-100 rounded-r-xl' />
                    <div className='absolute right-0 w-1/5 h-8 -mr-4 top-2 bg-retroradwarm-100 rounded-l-xl' />

                    <div className='absolute left-0 w-1/5 h-4 -ml-6 top-4 bg-retroradwarm-150 rounded-r-xl' />
                    <div className='absolute right-0 w-1/5 h-4 -mr-6 top-4 bg-retroradwarm-150 rounded-l-xl' />
                </div>

            </div>


            <div className='relative aspect-[16/9] p-4 mx-4 mb-2'>
                <Image className='border-t-4 border-b-8 rounded-xl border-x-4 border-retroblack'
                    src={`/Proj-NutraBee.webp`}
                    alt='Screenshot of NutraBee website homepage'
                    fill
                    priority
                    sizes='100vw'
                    key={`NutraBee`}
                // "(max-width: 300px) 252px,
                // (max-width: 400px) 352px,
                // (max-width: 500px) 452px,
                // 512px"
                />

            </div>

            <div className='w-full mx-auto mb-3 text-center'>
                <a>
                    <button className='w-10/12 py-1 rounded-full bg-[#A3211A]'>
                        <span className='text-2xl text-white font-heading'>
                            Visit Site
                        </span>
                    </button>
                </a>
            </div>


            <div className='w-11/12 mx-auto mb-4 text-center border-2 border-black font-descriptionBold text-retroblack-50 rounded-xl'>

                <p className='mx-4 my-1 text-base'>
                    MENTION SHOPIFY LIQUID CODE
                </p>

            </div>


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


        </div>
    )
}

export default ProjectsContent