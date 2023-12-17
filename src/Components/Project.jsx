import { FaGithub, FaCode } from "react-icons/fa";
import { Tooltip } from "@material-tailwind/react";

const Project = () => {
    const shouldOpenInNewTab = true;

    const projectDetails = [
        {
            title: "PicsGram",
            description: "Capture and relive life's magic with PicsGram – your go-to for lasting memories.",
            githubUrl: "https://github.com/bhaveshgarg2000/PicsGram",
            liveUrl: "https://pics-gram.vercel.app/",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/garg-picsgram-152c5.appspot.com/o/IMG_6969.jpeg?alt=media&token=90aba91e-788a-4565-8788-ed996d9c8212",
            techStack: "React.Js, Node.Js,Express.Js, Firebase, Bootstrap",
        },
        {
            title: "Tic Tac Toe",
            description: "Delight in strategic clashes on the timeless Tic Tac Toe grid, triumph against friends or computer in this classic game of wits.",
            githubUrl: "https://github.com/bhaveshgarg2000/Tic-Tac-Toe",
            liveUrl: "https://tic-tac-toe-bhavesh.netlify.app/",
            imageUrl: "https://w0.peakpx.com/wallpaper/353/837/HD-wallpaper-tic-tac-toe-games-letters-3d-and-cg-strategy-abstract-other.jpg",
            techStack: "React.Js, Node.Js,Express.Js, Sass, Css",
        },
        {
            title: "Calculator ",
            description: "Sleek and intuitive, our morphic-designed calculator ensures seamless calculations with a modern touch",
            githubUrl: "https://github.com/bhaveshgarg2000/Calculator",
            liveUrl: "https://bhaveshgarg2000.github.io/Calculator/ ",
            imageUrl: "https://img.freepik.com/premium-photo/3d-style-calculator-icon-isolated-white-background-finance-concept-generative-ai_159242-25909.jpg",
            techStack: "HTML,CSS,Bootstrap,Vanilla Js",
        },
        {
            title: "PortFolio",
            description: "My portfolio: highlighting skills and passion in graphic design and web development.",
            githubUrl: "https://github.com/bhaveshgarg2000/PORTFOLIO-BKG",
            liveUrl: "https://bhaveshgarg2000.github.io/PORTFOLIO-BKG/",
            imageUrl: "https://images.pexels.com/photos/14936124/pexels-photo-14936124.jpeg?cs=srgb&dl=pexels-ann-h-14936124.jpg&fm=jpg",
            techStack: "HTML,CSS,vanilla Js, Bootstrap",
        },
        {
            title: "RentRax",
            description: "Rentrax revolutionizes sports equipment rental, offering daily access to premium gear for enthusiasts, ensuring top-notch experience.",
            githubUrl: "https://github.com/bhaveshgarg2000/ENT-WEB",
            liveUrl: "https://bhaveshgarg2000.github.io/ENT-WEB/",
            imageUrl: "https://rentrax.com/wp-content/uploads/2020/08/cropped-RENTRAX-Logo-HR.png",
            techStack: "HTML,CSS,vanilla Js, Bootstrap",
        },

        // Add more project details as needed
    ];

    return (
        <div className="container pt-[96px] mx-auto flex justify-center items-center text-center">
            <div className="row flex justify-center items-center ">
                {projectDetails.map((project, index) => (
                    <div key={index} className="col-md-4 col-sm-12 sm:flex sm:justify-center sm:items-center md:items-baseline mb-4">
                        <div className="w-80 h-96 sm:h-110 sm:w-80 bg-white rounded-lg rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] 
                        rounded-bl-[24px] bg-blend-screen md:drop-shadow-2xl md:text-sm  sm:shadow-sm md:shadow-2xl 
                        sm:shadow-black md:shadow-black mix-blend-dark transition ease-in-out
                        hover:-translate-y-0 hover:scale-110 duration-7 delay-400 cursor-pointer">
                            <div>
                                <Tooltip
                                    content={project.title}
                                    animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0, y: 25 },
                                    }}
                                >
                                    <img
                                        className="w-80 h-44 rounded-tl-[20px] rounded-tr-[20px] hover:opacity-75 "
                                        src={project.imageUrl}
                                        alt=""
                                    />
                                </Tooltip>
                            </div>
                            <p className="Title italic flex items-center justify-center md:text-2xl sm:text-xl text-dark drop-shadow-md md:drop-shadow-x pt-1 ">
                                {project.title}
                            </p>
                            <p className="Description italic text-sm text-center normal-case whitespace-normal">
                                {project.description}
                            </p>
                            <p className="whitespace-normal text-center">
                                Tech Stack - {project.techStack}
                            </p>
                            <div className="flex justify-center">
                                <Tooltip
                                    content="Github"
                                    animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0, y: 25 },
                                    }}
                                >
                                    <a
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#333333" }}
                                        href={project.githubUrl}
                                        target={shouldOpenInNewTab ? "_blank" : undefined}
                                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                                    >
                                        <FaGithub />
                                    </a>
                                </Tooltip>
                                <Tooltip
                                    content="Live URL"
                                    animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0, y: 25 },
                                    }}
                                >
                                    <a
                                        className="btn btn-primary btn-floating m-1 bg-dark"
                                        href={project.liveUrl}
                                        target={shouldOpenInNewTab ? "_blank" : undefined}
                                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                                    >
                                        <FaCode />
                                    </a>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Project;
