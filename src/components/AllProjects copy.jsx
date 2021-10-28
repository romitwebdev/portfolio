import "../css/AllProjects.css";
const AllProjects = ({ project }) => {
    return (
        <>
            {" "}
            <div className="card-holder">
                <img src={project.coverImg} alt="" />
                <h2>{project.title}</h2>
                <p>{project.tech}</p>
                <p>{project.text}</p>
                <div className="button">
                    <a href={project.link}>Goto Website</a>
                    <a href={project.gitHubUrl}>{project.gitHubImg}</a>
                </div>
            </div>
        </>
    );
};

export default AllProjects;
