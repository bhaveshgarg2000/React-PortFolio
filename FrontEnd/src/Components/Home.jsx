import '../App.css'
const Home = () => {
    return (
        <>
            <div className="container flex justify-center items-center py-11 ">
                <div className="md:w-full sm:w-11/12">
                    <div className="flex flex-col md:flex-row items-center ">
                        <div className="md:w-1/2 sm:w-full text-center">
                            <p className="italic text-justify sm:text-xl md:text-2xl text-wrap">
                                <h3 className='text-bold italic sm:text-2xl md:text-5xl text-violet-900'>
                                    Bhavesh Krishan Garg
                                </h3>Full Stack Developer adept at creating dynamic web applications.
                                My skills span front-End technologies like HTML, CSS, and JavaScript,React.Js coupled
                                with proficiency in Back-End frameworks such as Node.js and Express.Js.
                                Explore my portfolio for a glimpse into my passion for crafting seamless digital
                                Experiences
                            </p>
                        </div>
                        <div className="md:w-1/2 sm:w-64  flex justify-center">
                            <img className="md:h-96 md:w-64 border-4 rounded-br-full md:rounded-bl-full rounded-tl-full 
                                border-red-500 border-double ring-4 ring-transparent
                                ring-emerald-200 ring-offset-4 ring-offset-lime-50"
                                src="https://firebasestorage.googleapis.com/v0/b/garg-picsgram-152c5.appspot.com/o/IMG_7176.jpeg?alt=media&token=cc28dcd6-2fb6-4658-8f2b-b892530791ce"
                                alt="Bhavesh Krishan Garg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
