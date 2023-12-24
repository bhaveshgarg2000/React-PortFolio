import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { Tooltip } from "@material-tailwind/react";
const TechStack = () => {
    const Stack = [
        {
            title: "HTML 5",
            icon: <FaHtml5 size="6em" />,
            // size: "6em",
        },
        {
            title: "CSS 3",
            icon: <FaCss3 size="6em" />,
            // size: "6em",
        },
        {
            title: "JavaScript",
            icon: <IoLogoJavascript size="6em" />,
            // size: "6em",
        },
        {
            title: "MySQL",
            icon: <SiMysql size="6em" />,
            // size: "6em",
        },
        {
            title: "TailWind",
            icon: <SiTailwindcss size="6em" />,
            // size: "6em",

        },

        {
            title: "MongoDB",
            icon: <SiMongodb size="6em" />,
            // size: "6em",
        },
        {
            title: "ExpreeeJs",
            icon: <SiExpress size="6em" />,
            // size: "6em",
        },
        {
            title: "ReactJs",
            icon: <FaReact size="6em" />,
            // size: "6em",
        },
        {
            title: "NodeJs",
            icon: <FaNodeJs size="6em" />,
            // size: "6em"

        },
        {
            title: "GitHub",
            icon: <FaGithub size="6em" />,
        },
    ];
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-5xl text-dark font-bold pt-2">My Tech Stack</h2>
            <p className="font-italic sm:text-sm md:text-xl pt-3">Technologies I`ve been working with</p>
            <div className="flex flex-wrap justify-center">
                {Stack.map((stack, index) => (
                    <div key={index} className="pt-2 w-full sm:w-1/4 md:w-1/5 lg:w-1/5 px-1 mt-4">
                        <Tooltip
                            content={stack.title}
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}>
                            <div className="flex flex-col items-center  hover:opacity-50">
                                {stack.icon}
                                <span className="text-black text-2xl font-bold italic hover:tracking-wider">{stack.title}</span>
                            </div>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TechStack