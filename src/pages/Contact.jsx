import "../css/Contact.css";
import { GiVibratingSmartphone } from "react-icons/gi";

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <h1>CONTACT ME</h1>
                <div className="contact-container__content">
                    <div>
                        <h1>I'd Love To Hear From You</h1>
                        <p className="text">
                            I’m interested in freelance opportunities –
                            especially ambitious or large projects. However, if
                            you have other request or question, don’t hesitate
                            to use the form.
                        </p>
                        <p className="contact icon">
                            <GiVibratingSmartphone />
                        </p>
                        <p className="contact number">Call Me : 55203466</p>
                    </div>
                    <form action="" className="form-contrl">
                        <li>
                            {" "}
                            <input
                                type="text"
                                placeholder=""
                                className="name"
                                required
                            />
                            <label htmlFor="name" className="label name">
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
                            <label htmlFor="email" className="label email">
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
                            <label htmlFor="subject" className="label subject">
                                <span className="content-name">Subject</span>
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
                            <label htmlFor="message" className="label message">
                                <span className="content-name">Message</span>
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
        </>
    );
};

export default Contact;
