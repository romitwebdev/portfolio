import "../css/About.css";
import { useState } from "react";
import AllSkillsets from "../components/AllSkillsets.jsx";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";

const About = () => {
    const [skillset] = useState([
        {
            id: 0,
            name: "HTML",
            logo: <SiHtml5 />,
            percentage: 90,
        },
        {
            id: 1,
            name: "CSS",
            logo: <SiCss3 />,
            percentage: 90,
        },
        {
            id: 3,
            name: "JavaScript",
            logo: <SiJavascript />,
            percentage: 50,
        },
        {
            id: 4,
            name: "ReactJS",
            logo: <RiReactjsFill />,
            percentage: 50,
        },
    ]);
    return (
        <>
            <div className="about-container">
                <div className="about-container__header-holder">
                    <h1 className="about_heading_text">ABOUT MYSELF</h1>
                    <div className="about-container__headings">
                        <p>
                            Hi! I am Romit Poudel, a self-taught passionate
                            frontend web developer and designer focused on
                            crafting great web experiences. Designing and Coding
                            have been my passion since the days I started
                            working with computers but I found myself into web
                            design/development since 2019. I focus on writing
                            clean, elegant and efficient code. I enjoy creating
                            beautifully designed, intuitive and functional
                            websites.
                        </p>
                        <div className="about-container__headings__image-holder">
                            <img src="images/bg.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="about-container__skills">
                    <h1>MY SKILLSETS</h1>
                    <div className="about-container__skills__list">
                        {skillset.map((skl) => {
                            return <AllSkillsets skillset={skl} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
