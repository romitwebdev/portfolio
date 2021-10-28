import "../css/AllSkillsets.css";
const AllSkillsets = ({ skillset }) => {
    return (
        <>
            {" "}
            <div className="skill-card-holder">
                <p>{skillset.logo}</p>
                <h2>{skillset.name}</h2>
            </div>
        </>
    );
};

export default AllSkillsets;
