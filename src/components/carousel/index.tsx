import React from 'react';
import { Carousel } from 'react-bootstrap';
import Api from '../../utils/api';
import { ShowItem } from '../showDetails';
import './index.css';

export interface IState {
    loading: boolean;
    data: ShowItem[];
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
            this.setState({
                loading: false,
                data: response
            });

        } catch (e) {
            console.error(JSON.stringify(e));
            this.setState({
                loading: false,
                data: [],
            })
        }


    }
    render() {
        return (
            <Carousel fade>
                {/* Due to a bug in React-Bootstrap, carousel items cannot be moved to a different React Component */}

                {this.state.data.map(({ id, title, description, banner }) => {
                    return <Carousel.Item key={id}>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/original/${banner}`}
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