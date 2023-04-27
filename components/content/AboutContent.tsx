import RadButton from "../RadButton"

const AboutContent = () => {
    return (

        <div className='w-full px-4 pb-2 mx-auto'>
            <p className='w-full px-0 pb-2 text-sm mobilesm:px-2 mobiletiny:text-base mobilesm:text-lg font-description text-retroblack'>
                As a full-stack <span className="font-descriptionBold">web developer</span> with a background in <span className="font-descriptionBold">animation</span> and <span className="font-descriptionBold">design</span>, I bring a unique blend of <span className="font-descriptionBold">creative</span> and <span className="font-descriptionBold">technical</span> skills to every project.
            </p>

            <p className='w-full px-0 pb-2 mb-2 text-sm mobilesm:px-2 mobiletiny:text-base mobilesm:text-lg font-description text-retroblack'>
                With a passion for <span className="font-descriptionBold">coding</span> and an <span className="font-descriptionBold">unwavering commitment</span> to my craft, I am dedicated to delivering <span className="font-descriptionBold">exceptional results</span> for my clients.
            </p>

            <RadButton
                text='View Resume'
                url={`https://docs.google.com/document/d/1LK5R1XetGPVHpm0u76epVPf7DkoW6TVT/edit?usp=sharing&ouid=102663915874628547290&rtpof=true&sd=true`}
                margin={true}
            />

        </div>

    )
}

export default AboutContent