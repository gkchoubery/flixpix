import React from 'react';
import { Carousel } from 'react-bootstrap';

interface IProps {
    data?: CarouselInputType[]
}

export interface CarouselInputType {
    heading: string
    description?: string
    src: string
    alt: string

}

export default class CarouselComponent extends React.Component<IProps> {
    carousel = this.props.data ? <Carousel fade>
        {this.props.data.map(({ heading, alt, src, description }) =>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={src}
                    alt={alt}
                />
                <Carousel.Caption>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )}
    </Carousel> : null;
    render() {
        return this.carousel;
    }
}