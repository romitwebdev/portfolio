import React from "react";
import "../css/Header.css";
import SocialLinks from "./SocialLinks";
import { GrFacebook, GrInstagram, GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import TypeWriter from "typewriter-effect";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__item">
                    <p>Hi there, i am</p>
                    <h1>Romit Poudel</h1>
                    <h1>
                        I am a
                        <span>
                            <TypeWriter
                                options={{
                                    strings: ["Frontend developer", "Designer"],
                                    autoStart: true,
                                    cursor: "_",
                                    loop: true,
                                }}
                            />
                        </span>
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
                    <img src="images/bg.png" alt="" loading="lazy" />
                </div>
            </div>
        </>
    );
};

export default Header;
