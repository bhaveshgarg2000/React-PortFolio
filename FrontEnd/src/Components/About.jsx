const About = () => {
    const WorkExp = [
        {
            title: "Backend Web Developer",
            jobType: "Internship",
            location: "Faridabad",
            time: "Apr-Jun 2023",
            organisation: "Arctic Innovage"
        },
        {
            title: "Backend Web Developer",
            jobType: "Internship",
            location: "Delhi",
            time: "July-Nov 2022",
            organisation: "CRIS"
        },
    ];
    const Education = [
        {
            title: "Backend Web Developer",
            EducationType: "B.Tech",
            location: "Faridabad",
            time: "Sept 2020 - Aug 2024",
            organisation: "MRU"
        },
    ];

    return (
        <>
            {/* ABOUT */}
            <div className="select-none flex justify-center items-center text-3xl md:text-3xl text-dark font-bold pt-2">
                About
            </div>
            <p className="pt-1 flex sm:text-xl md:text-2xl normal-case text-dark tracking-wide  text-dark px-4 text-justify select-none">
                I`m currently pursuing a Bachelors of Technology at Manav Rachna University.
                As a Full-Stack Developer, he is skilled in HTML, CSS, JavaScript, Node.js, React, Express.js, MongoDB, and more.
                Passionate about web development, Bhavesh has hands-on experience in creating dynamic and responsive applications.
                Eager to blend academic knowledge with practical coding expertise for impactful solutions, he invites you to innovate and learn together!
            </p>

            {/* Work Exp */}
            <div className="select-none flex justify-center items-center text-3xl md:text-3xl text-dark font-bold pb-1 ">
                Work Experience
            </div>
            <div className="space-y-1 ">
                {WorkExp.map((experience, index) => (
                    <div key={index} className="text-dark pt-1 px-4  rounded-lg shadow-md mx-auto sm:mx-auto md:text-xl sm:text-xs select-none border-2 border-black">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col pl-2">
                                <h2 className="md:text-2xl sm:text-xl font-semibold pt-1 select-none px-2">{experience.title}</h2>
                                <div className="flex items-center space-x-1 ">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                    </svg>
                                    <span className="select-none text-xl">{experience.jobType}</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"></path>
                                    </svg>
                                    <span className="select-none text-xl">{experience.location}</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                    <span className="select-none text-xl">{experience.time}</span>
                                    <div className="flex items-center space-x-1 ">
                                        <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 12h-2v2h2v-2zm0-6h-2v4h2V6z"></path>
                                        </svg>
                                        <span className="text-dark text-xl">{experience.organisation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* EDUCATION */}
            <div className="select-none flex justify-center items-center text-3xl md:text-3xl text-dark font-bold pt-1">
                Education
            </div>
            {Education.map((education, index) => (
                <div key={index} className="text-dark pt-2 rounded-lg border-2 border-black shadow-md mx-auto sm:mx-auto md:text-xl sm:text-xs select-none px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col pl-2">
                            <h2 className="md:text-2xl sm:text-xl font-semibold mb-2 select-none px-2">{education.title}</h2>
                            <div className="flex items-center space-x-1 ">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                                <span className="select-none text-xl">{education.EducationType}</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"></path>
                                </svg>
                                <span className="select-none text-xl">{education.location}</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                                <span className="select-none text-xl">{education.time}</span>
                                <div className="flex items-center space-x-1 ">
                                    <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 12h-2v2h2v-2zm0-6h-2v4h2V6z"></path>
                                    </svg>
                                    <span className="text-dark text-xl">{education.organisation}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default About;
