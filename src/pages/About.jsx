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
                                I'm Romit Poudel, a passionate frontend web
                                developer and designer. Through diligent
                                self-study, I've cultivated my skills across
                                various projects. Now, I aspire to gain
                                professional experience to further refine my
                                expertise, collaborate with industry veterans,
                                and embrace best practices. I prioritize
                                crafting visually captivating and user-friendly
                                websites. My aim is to leave a lasting
                                impression, contribute to successful teams, and
                                deliver exceptional results. Feel free to
                                explore my work and reach out for inquiries or
                                collaboration opportunities. Thank you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
