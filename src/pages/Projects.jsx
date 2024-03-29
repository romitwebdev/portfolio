import { useState } from "react";
import AllProjects from "../components/AllProjects.jsx";
import "../css/Projects.css";

const Projects = () => {
    // object for cards
    const [projects] = useState([
        {
            id: 0,
            coverImg: "images/blog.png",
            title: "Blog Website",
            tech: "HTML, SCSS, JavaScript, ReactJs",
            link: "https://myblog-romit.netlify.app/",
            gitHubUrl: "https://github.com/romitwebdev/my-blog.git",
        },
        {
            id: 1,
            coverImg: "images/ytclone.png",
            title: "YouTube Clone",
            tech: "HTML, SCSS, ReactJs, TypeScript",
            link: "https://romit-youtube-clone.netlify.app/",
            gitHubUrl: "https://github.com/romitwebdev/youtube-clone.git",
        },

        {
            id: 2,
            coverImg: "images/tiktokclone.png",
            title: "TikTok Clone",
            tech: "HTML, SCSS, ReactJs, TypeScript",
            link: "https://romit-tiktok-clone.netlify.app/",
            gitHubUrl: "https://github.com/romitwebdev/tiktok-clone",
        },
        {
            id: 3,
            coverImg: "images/movieflix.png",
            title: "Movie Finder App",
            tech: "HTML, SCSS, React Bootstrap, NextJS, TypeScript, ReduxToolkit, FetchApi",
            link: "https://movieflix-romit.vercel.app/",
            gitHubUrl: "https://github.com/romitwebdev/movieflix.git",
        },
        {
            id: 4,
            coverImg: "images/bookfinder.png",
            title: "Bookfinder App",
            tech: "HTML, SCSS, React Bootstrap, NextJS, TypeScript, ReduxToolkit, FetchApi",
            link: "https://bookfinder-romit.vercel.app/",
            gitHubUrl: "https://github.com/romitwebdev/bookfinder.git",
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
                        {/* projects details is passed to Allprojects component as props */}
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
