import React, {PropTypes} from "react";
import "./styles.scss";

export const PhotographyCell = (props) => {
    const photo = require(`../../../${props.imgPath}`);
    return (
        <div className={`photographyCell ${props.className}`}>
            <img
                src={photo}
                alt={"Some Pic"}
                onLoad={props.onLoad}
                height={props.minImgHeight !== Infinity ? props.minImgHeight : null}
            />
            <h2 className="title">{props.title}</h2>
            <h3 className="caption">{props.caption}</h3>
        </div>
    );
};

PhotographyCell.propTypes = {
    imgPath: PropTypes.string,
    minImgHeight: PropTypes.number,
    title: PropTypes.string,
    className: PropTypes.string,
    caption: PropTypes.string
};

export default PhotographyCell;
