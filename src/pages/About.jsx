import "../css/About.css";

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="container">
                    <div className="about-container__header-holder">
                        <h1 className="about_heading_text">ABOUT MYSELF</h1>
                        <div className="about-container__headings">
                            <div className="about-container__headings__image-holder">
                                <img src="images/about.jpeg" alt="" />
                            </div>
                            <p>
                                Hi! I am Romit Poudel, a self-taught passionate
                                frontend web developer and designer focused on
                                crafting great web experiences. Designing and
                                Coding have been my passion since the days I
                                started working with computers but I found
                                myself into web design/development since 2019. I
                                focus on writing clean, elegant and efficient
                                code. I enjoy creating beautifully designed,
                                intuitive and functional websites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
