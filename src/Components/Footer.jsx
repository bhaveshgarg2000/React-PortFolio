import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    const shouldOpenInNewTab = true;

    return (
        <div className="mt-20 pt-2 bg-white ">
            <div className="footer text-center text-dark p">
                <div className="icons">
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#000" }}
                        href="https://twitter.com/Bhaveshkrishan1"
                        target={shouldOpenInNewTab ? "_blank" : undefined}
                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    >
                        <RiTwitterXLine />
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#333333" }}
                        href="https://github.com/bhaveshgarg2000"
                        target={shouldOpenInNewTab ? "_blank" : undefined}
                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    >
                        <FaGithub />
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="https://www.instagram.com/bgarg2000/"
                        target={shouldOpenInNewTab ? "_blank" : undefined}
                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    >
                        <FaInstagram />
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#0082ca" }}
                        href="https://www.linkedin.com/in/bhaveshgarg2005/"
                        target={shouldOpenInNewTab ? "_blank" : undefined}
                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className="text-center text-dark pb-2  pt-1 fs-5">
                    © 2023 | Bhavesh Krishan Garg
                </div>
            </div>
        </div>
    );
};

export default Footer;
