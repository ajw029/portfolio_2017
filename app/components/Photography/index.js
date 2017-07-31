import React, { Component } from "react";
import PhotosContainer from "./PhotosContainer";
import Header from "./Header";
import NavBar from "../NavBar";

export class PhotographyContainer extends Component {
    constructor(props) {
        super(props);
        const photosList = [
            [
                {
                    id: 1,
                    imgPath: "assets/imgs/cat_1.jpg",
                    className: "full_horizontal_cell",
                    title: "Some Random title",
                    caption: "Bleh"
                }
            ],
            [
                {
                    id: 2,
                    imgPath: "assets/imgs/mai_1.jpg",
                    className: "half_horizontal_cell",
                    title: "Some Random title",
                    caption: "Bleh"
                },
                {
                    id: 3,
                    imgPath: "assets/imgs/dog_1.jpg",
                    className: "half_horizontal_cell",
                    title: "Some Random title",
                    caption: "Bleh"
                },
            ],
            [
                {
                    id: 4,
                    imgPath: "assets/imgs/mai_2.jpg",
                    className: "full_horizontal_cell",
                    title: "Some Random title",
                    caption: "Bleh"
                }
            ],
            [
                {
                    id: 5,
                    imgPath: "assets/imgs/mai_3.jpg",
                    className: "half_vertical_cell",
                    title: "Some Random title",
                    caption: "Bleh"
                },
                {
                    id: 6,
                    imgPath: "assets/imgs/mai_4.jpg",
                    className: "half_vertical_cell",
                    title: "Some Random title",
                    caption: "Bleh"
                }
            ]
        ];
        this.photosList = photosList;
    }

    convertPhotosToContainers = () => {
        return this.photosList.map((photos) => {
            return (
                <PhotosContainer
                    photoCells={photos}
                />
            )
        })
    }

    render() {
        const PhotoContainers = this.convertPhotosToContainers();
        return (
            <div>
                <NavBar />
                <Header />
                {PhotoContainers}
            </div>
        );
    }
}

export default PhotographyContainer;
