
const SlashOne = () => <span className=" text-retroradwarm-50">/</span>
const SlashTwo = () => <span className=" text-retroradwarm-150">/</span>

const LandingHero: React.FC = () => {
    return (
        <div className='w-full max-w-xl p-10 mx-auto text-center'>

            <h1 className="text-6xl text-retrolight font-cursive drop-shadow-[4px_4px_0px_rgb(236,114,101)]">
                Ben Basic
            </h1>

            <p className="my-4 text-lg text-newwhite font-heading">
                Web Developer <SlashOne /><SlashTwo /> Designer <SlashOne /><SlashTwo /> Animator
            </p>

            {/* <div className="w-full h-1 bg-retroradwarm-150" />
            <div className="w-full h-1 mt-1 bg-retroradwarm-50" /> */}

            {/* <p className="my-4 text-lg text-newwhite font-description">
                The main text, the main text, the main text, the main text, the main text, the main text, the main text, the main text.
            </p> */}

            <button className="justify-center px-4 py-2 mt-4 text-center bg-retrowarm-100 rounded-3xl">
                <span className="text-xl font-heading text-newwhite">
                    View Projects
                </span>
            </button>


        </div>
    )
}

export default LandingHero