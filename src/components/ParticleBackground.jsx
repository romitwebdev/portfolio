import React from "react";
import Particles from "react-particles-js";
import particleConfig from "../config/ParticleConfig.jsx";

const ParticleBackground = () => {
    return (
        <Particles
            height={window.outerHeight}
            params={particleConfig}
        ></Particles>
    );
};

export default ParticleBackground;
