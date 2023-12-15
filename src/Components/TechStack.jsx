import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { Tooltip } from "@material-tailwind/react";
const TechStack = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center pt-3 ">
                <h2 className="sm:text-xs md:text-6xl text-dark font-bold">My Tech Stack</h2>
                <p className="font-italic md:text-xl mt-3">Technologies I`ve been working with</p>
                <div className="flex flex-row px-8 space-x-10 pt-3 ">
                
                    {/* HTML */}
                    <div className="flex flex-col items-center xl ">
                        <Tooltip
                            content="HTML 5"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}>
                            <div className="hover:opacity-50">
                                <FaHtml5 size="6em" />
                            </div>
                        </Tooltip>
                        <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider">HTML 5</span>
                    </div>
                    {/* CSS */}
                    <div className="flex flex-col items-center xl" >
                        <Tooltip
                            content="CSS 3"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                        >
                            <div className="flex flex-col items-center xl hover:opacity-50">
                                <FaCss3 size="6em" />
                                <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider">
                                    CSS 3
                                </span>
                            </div>
                        </Tooltip>
                    </div>
                    {/* JS */}
                    <div className="flex flex-col items-center xl" >
                        <Tooltip
                            content="JavaScript"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                        >
                            <div className="flex flex-col items-center xl hover:opacity-50">
                                <IoLogoJavascript size="6em" />
                                <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" >JavaScript</span>

                            </div>
                        </Tooltip>
                    </div>
                    {/* MySQL */}
                    <div className="flex flex-col items-center xl" >
                        <Tooltip content="MySQL"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}>

                            <div className="flex flex-col items-center xl hover:opacity-50">
                                <  SiMysql size="6em" className="hover:opacity-50" />

                                <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > MySQL</span>
                            </div>
                        </Tooltip>
                    </div>
                    {/* TailWind */}

                    <div className="flex flex-col items-center xl" >
                        <Tooltip content="TailWind"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}>

                            <div className="flex flex-col items-center xl hover:opacity-50">
                                <  SiTailwindcss size="6em" className="hover:opacity-50" />

                                <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > TailWind</span>
                            </div>
                        </Tooltip>
                    </div>
                    {/* VsCode */}

                    <div className="flex flex-col items-center xl" >
                        <Tooltip content="VsCode"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}>

                            <div className="flex flex-col items-center xl hover:opacity-50">
                                <  TbBrandVscode size="6em" className="hover:opacity-50" />

                                <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > VsCode</span>
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div>

                    <div className="flex flex-row px-8 space-x-10 pt-5 " >
                        {/* MongoDB*/}
                        <div className="flex flex-col items-center xl" >
                            <Tooltip content="MongoDB"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>

                                <div className="flex flex-col items-center xl hover:opacity-50">
                                    <  SiMongodb size="6em" className="hover:opacity-50" />

                                    <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > MongoDB</span>
                                </div>
                            </Tooltip>
                        </div>

                        {/* Express JS */}

                        <div className="flex flex-col items-center xl" >
                            <Tooltip content="ExpressJS"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>

                                <div className="flex flex-col items-center xl hover:opacity-50">
                                    <  SiExpress size="6em" className="hover:opacity-50" />

                                    <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > ExpressJS</span>
                                </div>
                            </Tooltip>
                        </div>


                        {/* ReactJS */}

                        <div className="flex flex-col items-center xl" >
                            <Tooltip content="ReactJS"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>

                                <div className="flex flex-col items-center xl hover:opacity-50">
                                    <  FaReact size="6em" className="hover:opacity-50" />

                                    <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > ReactJS</span>
                                </div>
                            </Tooltip>
                        </div>


                        {/* NodeJS */}
                        <div className="flex flex-col items-center xl" >
                            <Tooltip content="NodeJS"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>

                                <div className="flex flex-col items-center xl hover:opacity-50">
                                    <  FaNodeJs size="6em" className="hover:opacity-50" />

                                    <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > NodeJS</span>
                                </div>
                            </Tooltip>
                        </div>


                        <div className="flex flex-col items-center xl" >
                            <Tooltip content="GitHub"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>

                                <div className="flex flex-col items-center xl hover:opacity-50">
                                    <  FaGithub size="6em" className="hover:opacity-50" />

                                    <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > GitHub</span>
                                </div>
                            </Tooltip>
                        </div>

                        {/* GO */}


                        <div className="flex flex-col items-center xl" >
                            <Tooltip content="GO"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>

                                <div className="flex flex-col items-center xl hover:opacity-50">
                                    <  FaGolang size="6em" className="hover:opacity-50" />

                                    <span className="pt-2 text-black text-2xl font-bold italic hover:tracking-wider" > Go</span>
                                </div>
                            </Tooltip>
                        </div>



                    </div>
                </div>
            </div >
        </>
    )
}

export default TechStack
