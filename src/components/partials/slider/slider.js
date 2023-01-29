import React from 'react';
import './slider.css';

export default function Slider() {
    return (
        <SliderComponent />
    );
}


class SliderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfImages: [],
        };
    }

    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount() {
        const list = this.importAll(
            require.context("../../../static/images/slider", false, /\.(jpg)$/)
        );

        this.setState({
            listOfImages: list,
        });
        console.log('component mounted');
    }

    renderButtons() {
        return (
            this.state.listOfImages.map((image, index) => {
                const ariaLabel = "Slide " + { index };
                var active = "";
                if (!index) {
                    active = "active";
                }
                return (
                    <button type="button" data-bs-target="#slider" data-bs-slide-to={index} key={index}
                        className={active} aria-current="true" aria-label={ariaLabel}></button>
                );
            })
        );
    }

    renderImages() {
        return (
            this.state.listOfImages.map((image, index) => {
                var classList = "carousel-item";
                if (!index) {
                    classList += " active";
                }
                return (
                    <div key={index} className={classList}>
                        <img src={image} className="d-block w-100" />
                    </div>
                );
            })
        );
    }


    render() {
        return (
            <div id="slider" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {this.renderButtons()}
                </div>
                <div className="carousel-inner">
                    {this.renderImages()}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}