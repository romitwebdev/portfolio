import { useState } from "react";
import AllProjects from "../components/AllProjects.jsx";
import "../css/Projects.css";

const Projects = () => {
    const [projects] = useState([
        {
            id: 1,
            coverImg: "images/blog.png",
            title: "Blog Website",
            tech: "HTML, CSS, JavaScript, ReactJs",
            link: "https://myblog-romit.netlify.app/",
            gitHubUrl: "https://github.com/romitwebdev/my-blog.git",
        },
        {
            id: 2,
            coverImg: "images/ytclone.png",
            title: "youTube clone",
            tech: "HTML, SCSS, ReactJs, TypeScript",
            link: "https://romit-youtube-clone.netlify.app/",
            gitHubUrl: "https://github.com/romitwebdev/youtube-clone.git",
        },

        {
            id: 3,
            coverImg: "images/music.jpg",
            title: "Music App",
            tech: "HTML, CSS, JavaScript, ReactJs",
            link: "xyz.com",
            gitHubUrl: "slkdf.com",
        },
        {
            id: 4,
            coverImg: "images/music.jpg",
            title: "counter App",
            tech: "HTML, CSS, JavaScript, ReactJs",

            link: "xyz.com",
            gitHubUrl: "slkdf.com",
        },
        {
            id: 5,
            coverImg: "images/music.jpg",
            title: "counter App",
            tech: "HTML, CSS, JavaScript, ReactJs",
            link: "xyz.com",
            gitHubUrl: "slkdf.com",
        },
    ]);
    return (
        <>
            <div className="content-header">
                <div className="container">
                    <div className="content-header__headings">
                        <h1 className="heading_text">MY PROJECTS</h1>
                        <p>A small gallery of recent projects choosen by me.</p>
                    </div>
                    <div className="content-header__projects">
                        {projects.map((prjcts) => {
                            return (
                                <AllProjects key={prjcts.id} project={prjcts} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
