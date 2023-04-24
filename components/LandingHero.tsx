
const SlashOne = () => <span className=" text-retroradwarm-50">/</span>
const SlashTwo = () => <span className=" text-retroradwarm-150">/</span>

const LandingHero: React.FC = () => {
    return (
        <div className='w-full max-w-xl px-6 py-6 mx-auto text-center mobiletiny:py-10 mobilemd:px-10'>

            <h1 className="text-5xl mobiletiny:text-6xl text-retrolight font-cursive drop-shadow-[3px_3px_0px_rgb(236,114,101)] mobiletiny:drop-shadow-[4px_4px_0px_rgb(236,114,101)]">
                Ben Basic
            </h1>

            <p className="my-4 text-sm mobiletiny:text-base mobilesm:text-lg text-newwhite font-heading">
                Web Developer <SlashOne /><SlashTwo /> Designer <SlashOne /><SlashTwo /> Animator
            </p>

            <a href='#Projects'>
                <button className="justify-center px-4 py-2 mt-4 text-center transition-colors duration-75 bg-retrowarm-100 hover:bg-retrowarm-50 rounded-3xl">
                    <span className="text-xl font-heading text-newwhite">
                        View Projects
                    </span>
                </button>
            </a>


        </div>
    )
}

export default LandingHero