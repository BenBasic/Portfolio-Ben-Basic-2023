import React from 'react'
import Image from 'next/image'
import RadTitle from '../RadTitle'
import RadButton from '../RadButton'

type TProject = {
    name: string,
    img: string,
    alt: string,
    url: string,
    description: JSX.Element,
    skills: JSX.Element,
}

const ProjectsIndividual: React.FC<TProject> = ({ name, img, url, description, skills, alt }) => {
    return (
        <div className='w-full mx-auto'>

            <RadTitle
                title={name}
                spacing={true}
            />


            <div className='relative aspect-[16/9] p-4 mx-4 mb-2'>
                <Image className='border-t-4 border-b-8 rounded-xl border-x-4 border-retroblack'
                    src={`/${img}.webp`}
                    alt={`${alt}`}
                    fill
                    priority
                    sizes="(max-width: 300px) 204px,
                    (max-width: 400px) 278px,
                    (max-width: 1535px) 352px,
                    416px"
                    key={`${img}`}

                />

            </div>

            <RadButton
                text='Visit Site'
                url={`${url}`}
                margin={true}
            />


            <div className='w-11/12 mx-auto mb-4 text-center border-2 border-black font-description text-retroblack-50 rounded-xl'>

                {description}

            </div>


            {skills}


        </div>
    )
}

export default ProjectsIndividual