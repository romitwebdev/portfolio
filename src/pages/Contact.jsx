import "../css/Contact.css";
import { GiVibratingSmartphone } from "react-icons/gi";
import { GrFacebook, GrInstagram, GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
    // display message on form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            "Form is underconstruciton. Please, find the contact and social links below."
        );
    };
    return (
        <>
            <div className="contact-container">
                <div className="container">
                    <h1>CONTACT ME</h1>
                    <div className="contact-container__content">
                        {/* heading, paragraph, social icons section */}
                        <div>
                            <h1>I'd Love To Hear From You</h1>
                            <p className="text">
                                I am currently exploring new opportunities, but
                                would ideally like to find a position that would
                                allow me to expand on my frontend development
                                experience. However, if you have other request
                                or question, don’t hesitate to contact me.
                            </p>
                            <p className="contact icon">
                                <GiVibratingSmartphone />
                            </p>
                            <p className="contact number">
                                Call Me : +974-55203466
                            </p>
                            <div className="header__social">
                                <a
                                    href="https://www.facebook.com/scorpnetixz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="header__social__icons">
                                        <SocialLinks>
                                            <GrFacebook />
                                        </SocialLinks>
                                    </div>
                                </a>
                                <a
                                    href="https://www.instagram.com/el_romit/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="header__social__icons">
                                        <SocialLinks>
                                            <GrInstagram />
                                        </SocialLinks>
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/romitwebdev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="header__social__icons">
                                        <SocialLinks>
                                            <GrGithub />
                                        </SocialLinks>
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/romit-poudel-203b59219/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="header__social__icons">
                                        <SocialLinks>
                                            <BsLinkedin />
                                        </SocialLinks>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* form section */}
                        <form
                            action=""
                            className="form-control"
                            onSubmit={handleSubmit}
                        >
                            <li>
                                {" "}
                                <input
                                    type="text"
                                    placeholder=""
                                    className="name"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="label name"
                                    required
                                >
                                    <span className="content-name">Name</span>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="email"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="label email"
                                    required
                                >
                                    <span className="content-name">Email</span>
                                </label>
                            </li>

                            <li>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="subject"
                                    required
                                />
                                <label
                                    htmlFor="subject"
                                    className="label subject"
                                >
                                    <span className="content-name">
                                        Subject
                                    </span>
                                </label>
                            </li>
                            <li>
                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="7"
                                    placeholder=""
                                    required
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="label message"
                                >
                                    <span className="content-name">
                                        Message
                                    </span>
                                </label>
                            </li>
                            <li>
                                <button type="submit" className="submit-btn">
                                    Submit
                                </button>
                            </li>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
