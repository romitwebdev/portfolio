import Header from "../components/Header";
import ParticleBackground from "../components/ParticleBackground.jsx";
import "../css/Home.css";

const Home = () => {
    return (
        <>
            <div className="content-container">
                <div className="hero">
                    <Header />
                </div>
                <div className="particle">
                    <ParticleBackground />
                </div>
            </div>
        </>
    );
};

export default Home;
