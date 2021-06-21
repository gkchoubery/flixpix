import React from 'react';
import { Carousel } from 'react-bootstrap';
import Api from '../../utils/api';
import './index.css';

export interface ICarousel {
    id: number;
    title: string;
    description: string;
    src: string;
    alt: string;
}

export interface IState {
    loading: boolean;
    data: ICarousel[];
}

export default class CarouselComponent extends React.Component<{}, IState> {

    private api: Api;

    static defaultProps = {
        loading: true,
        data: [],
      };

    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
            data: []
        };
        this.api = new Api();
    }

    async componentDidMount() {
        try {
            console.log('mounted');
            const response = await this.api.getCarouselImages();
            console.log(response);
            this.setState({
                loading: false,
                data: response
            });

        } catch(e) {
            this.setState({
                loading: false,
                data: items
            })
        }
        

    }
    render() {
        return (
            <Carousel fade>
                {/* Due to a bug in React-Bootstrap, carousel items cannot be moved to a different React Component */}

                {this.state.data.map(({ id, title, description, alt, src }) => {
                    return <Carousel.Item key={id}>
                        <img
                            className="d-block w-100"
                            src={src}
                            alt={alt}
                        />
                        
                        <Carousel.Caption>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
        )
    }
}

const items = [
    {
        id: 1,
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        title: 'Slide 1',
        description: 'Slide 1',
        alt: 'Slide 1'
    },
    {
        id: 2,
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        title: 'Slide 2',
        description: 'Slide 2',
        alt: 'Slide 2'
    },
    {
        id: 3,
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        title: 'Slide 3',
        description: 'Slide 3',
        alt: 'Slide '
    }
];