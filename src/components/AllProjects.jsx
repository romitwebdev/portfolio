import React from "react";
import "../css/AllProjects.css";
import { FiExternalLink } from "react-icons/fi";
import { GrGithub } from "react-icons/gr";

const AllProjects = ({ project }) => {
    return (
        <>
            <div className="card-holder">
                <img src={project.coverImg} alt="" />
                <h2>{project.title}</h2>
                <p>
                    <span className="tech-para">Tech:</span> {project.tech}
                </p>

                <div className="button-holder">
                    <button className="btn">
                        <a href={project.link} target="_blank" rel="noreferrer">
                            Goto Website{" "}
                            <span>
                                <FiExternalLink />
                            </span>
                        </a>
                    </button>
                    <button className="btn">
                        <a
                            href={project.gitHubUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code{" "}
                            <span>
                                <GrGithub />
                            </span>
                        </a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AllProjects;
