import React from 'react';
import loader from "../../../Assets/images/loader-icon.svg";

const Preloader = () => {
    return (
        <div>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Preloader;