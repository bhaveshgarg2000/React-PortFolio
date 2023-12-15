import '../App.css'
const Home = () => {
    return (
        <>
            {/* <div className="relative w-[1204px] h-[350px] flex items-center">
                <div className="flex-1 text-center">
                    Hi,<br />
                    My Name is Bhavesh Krishan Garg
                </div>
                <img
                    className="w-[367px] h-[367px] object-cover"
                    alt="Element"
                    src="https://firebasestorage.googleapis.com/v0/b/garg-picsgram-152c5.appspot.com/o/2dda2e32f3756a4fa6263c412a603624.jpg?alt=media&token=409ccefa-b9df-480f-a20c-9f5f8908e44f"
                />
            </div> */}

            <div className="container flex justify-center items-center py-12">
                <div className="md:w-full sm:w-11/12">
                    <div className="flex flex-col md:flex-row items-center ">
                        <div className="md:w-1/2 sm:w-full text-center py-6 ">
                            <h3 className="name1 italic text-justify break-all sm:text-xl md:text-2xl ">
                                Hi 👋,
                                <br />
                                My name is
                                <br />
                                Bhavesh Krishan Garg
                                <br />
                                I design web elements with a keen eye for beauty and aesthetics.
                            </h3>
                        </div>
                        <div className="md:w-1/2 sm:w-64 md:ml-20 ">
                            <img className="md:h-96 md:w-64 border-8 rounded-br-full md:rounded-bl-full rounded-tl-full border-neutral-600 border-double "
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
