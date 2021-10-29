import { useState } from "react";
import { GrGithub } from "react-icons/gr";
import AllProjects from "../components/AllProjects.jsx";
import "../css/Projects.css";

const Projects = () => {
    const [projects] = useState([
        {
            id: 1,
            coverImg: "images/music.jpg",
            title: "Music App",
            tech: "HTML, CSS, JavaScript, ReactJs",
            text: "lorem lskjdfsldjfsldflsdjlfsl",
            link: "xyz.com",
            gitHubUrl: "slkdf.com",
            gitHubImg: <GrGithub />,
        },
        {
            id: 2,
            coverImg: "images/music.jpg",
            title: "counter App",
            tech: "HTML, CSS, JavaScript, ReactJs",
            text: "lorem lskjdfsldjfsldflsdjlfsl",
            link: "xyz.com",
            gitHubUrl: "slkdf.com",
            gitHubImg: <GrGithub />,
        },
        {
            id: 3,
            coverImg: "images/music.jpg",
            title: "counter App",
            tech: "HTML, CSS, JavaScript, ReactJs",
            text: "lorem lskjdfsldjfsldflsdjlfsl",
            link: "xyz.com",
            gitHubUrl: "slkdf.com",
            gitHubImg: <GrGithub />,
        },
        {
            id: 4,
            coverImg: "images/music.jpg",
            title: "counter App",
            tech: "HTML, CSS, JavaScript, ReactJs",
            text: "lorem lskjdfsldjfsldflsdjlfsl",
            link: "xyz.com",
            gitHubUrl: "slkdf.com",
            gitHubImg: <GrGithub />,
        },
        {
            id: 5,
            coverImg: "images/music.jpg",
            title: "counter App",
            tech: "HTML, CSS, JavaScript, ReactJs",
            text: "lorem lskjdfsldjfsldflsdjlfsl",
            link: "xyz.com",
            gitHubUrl: "slkdf.com",
            gitHubImg: <GrGithub />,
        },
    ]);
    return (
        <>
            <div className="content-header">
                <div className="content-header__headings">
                    <h1 className="heading_text">MY PROJECTS</h1>
                    <p>A small gallery of recent projects choosen by me.</p>
                </div>
                <div className="content-header__projects">
                    {projects.map((prjcts) => {
                        return <AllProjects key={prjcts.id} project={prjcts} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;
