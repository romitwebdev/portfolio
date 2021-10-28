import "../css/Header.css";
import React, { useRef, useEffect, useState } from "react";
import SocialLinks from "./SocailLinks";
import { GrFacebook, GrInstagram, GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
    const [currentText, setCurrentText] = useState("");
    const [deleting, setDeleting] = useState(false);

    let index = useRef(0);
    let textIndex = useRef(0);

    useEffect(() => {
        let speed = 200;

        if (!deleting) {
            speed = 200;
        }

        setTimeout(() => {
            let text = ["Frontend Developer", "Designer"];

            if (!deleting) {
                setCurrentText(
                    (prevValue) =>
                        prevValue +
                        text[textIndex.current].charAt(index.current)
                );
                index.current++;
                if (index.current === text[textIndex.current].length - 1) {
                    setDeleting(true);
                }
            } else if (deleting) {
                setCurrentText(
                    text[textIndex.current].substr(0, index.current)
                );

                index.current--;
                if (index.current === 0) {
                    if (textIndex.current < text.length - 1) {
                        textIndex.current++;
                    } else {
                        textIndex.current = 0;
                    }
                    setDeleting(false);
                }
            }
        }, speed);

        // return () => {
        //     clearTimeout(timeOut);
        // };
    }, [currentText, deleting]);

    // const dynamicRef = useRef();

    // useEffect(() => {
    //     let i = 0;
    //     let text = "Frontend Developer";
    //     let speed = 200;
    //     function typingText() {
    //         dynamicRef.current.innerHTML += text.charAt(i);
    //         if (i <= text.length - 1) {
    //             i++;
    //         } else {
    //             dynamicRef.current.innerHTML = "";
    //             i = 0;
    //         }
    //         setTimeout(typingText, speed);
    //     }
    //     // typingText();
    // });

    return (
        <>
            <div className="header">
                <div className="header__item">
                    <p>Hi there, i am</p>
                    <h1>Romit Poudel</h1>
                    <h1>
                        I am a <span>{currentText}</span>
                    </h1>
                    <p>I code, design and optimize modern websites.</p>
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

                <div className="header__image">
                    <img src="images/bg.png" alt="" />
                    {/* <div className="glitch__layers">
                        <div className="glitch__layer"></div>
                        <div className="glitch__layer"></div>
                        <div className="glitch__layer"></div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Header;
