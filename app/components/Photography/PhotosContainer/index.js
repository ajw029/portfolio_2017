import React, {Component, PropTypes} from "react";
import PhotographyCell from "../PhotographyCell";
import "./styles.scss";

export class PhotosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minImgHeight: Infinity
        };
    }

    handleImgLoad = ({target: img}) => {
        const minHeight = Math.min(this.state.minImgHeight, img.height);
        if (this.state.minImgHeight !== minHeight) {
            this.setState({minImgHeight: minHeight});
        }
    }

    render() {
        return (
            <section className="photography_container">
                {
                    this.props.photoCells.map((photo) => {
                        return (
                            <PhotographyCell
                                key={photo.id}
                                {...photo}
                                minImgHeight={this.state.minImgHeight}
                                onLoad={this.handleImgLoad}
                            />
                        )
                    })
                }
            </section>
        );
    }
};

PhotosContainer.propTypes = {
    photoCells: PropTypes.array
};

export default PhotosContainer;
