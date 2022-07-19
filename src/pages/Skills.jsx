import "../css/Skills.css";
import { useState } from "react";
import AllSkillsets from "../components/AllSkillsets.jsx";
import { RiReactjsFill } from "react-icons/ri";
import {
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiAdobephotoshop,
    SiGit,
} from "react-icons/si";
import { FaBootstrap, FaFigma, FaSass } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Skills = () => {
    // object for cards
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
            name: "Bootstrap",
            logo: <FaBootstrap />,
            percentage: 50,
        },
        {
            id: 5,
            name: "Sass",
            logo: <FaSass />,
            percentage: 50,
        },
        {
            id: 6,
            name: "ReactJS",
            logo: <RiReactjsFill />,
            percentage: 50,
        },
        {
            id: 7,
            name: "Figma",
            logo: <FaFigma />,
            percentage: 50,
        },
        {
            id: 8,
            name: "Photoshop",
            logo: <SiAdobephotoshop />,
            percentage: 50,
        },
        {
            id: 9,
            name: "Git",
            logo: <SiGit />,
            percentage: 50,
        },
        {
            id: 10,
            name: "Github",
            logo: <AiFillGithub />,
            percentage: 50,
        },
    ]);
    return (
        <>
            <div className="skills-container">
                <div className="container">
                    <div className="about-container__skills">
                        <h1>MY SKILLSETS</h1>
                        <div className="about-container__skills__list">
                            {/* skills details is passed to AllSkillsets component as props */}
                            {skillset.map((skl) => {
                                return (
                                    <AllSkillsets key={skl.id} skillset={skl} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
