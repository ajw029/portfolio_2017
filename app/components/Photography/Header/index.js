import React, {PropTypes} from "react";
import "./styles.scss";

export const PhotographyHeader = (props) => {
    return (
        <header className={`photographer_header`}>
            <div>Some random ass shit about me</div>
            <div>Find more of my work at BLEH, BLEH</div>
        </header>
    );
};

PhotographyHeader.propTypes = {
};

export default PhotographyHeader;
