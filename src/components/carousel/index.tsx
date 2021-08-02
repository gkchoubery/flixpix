import React from 'react';
import { Carousel } from 'react-bootstrap';
import { ShowItem } from '../../interfaces';
import './index.css';

export interface IState {
    loading: boolean;
    data: ShowItem[];
}

export default class CarouselComponent extends React.Component<{}, IState> {

    static defaultProps = {
        loading: false,
        data: [],
    };

    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            data: INTRO_DATA
        };
    }

    render() {
        return (
            <Carousel fade>
                {/* Due to a bug in React-Bootstrap, carousel items cannot be moved to a different React Component */}

                {this.state.data.map(({ id, title, description, banner }) => {
                    return <Carousel.Item key={id}>
                        <img
                            className="d-block w-100" alt={title}
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

const INTRO_DATA: ShowItem[] = [
    {
        "id": 588228,
        "title": "The Tomorrow War",
        "description": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
        "type": "movies",
        "year": 2021,
        "featured": true,
        "banner": "/nVKRspU9SQEs2gNrms8cDKsI4vx.jpg",
        "poster": "/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg",
        "rating": 8.9,
        "totalRatings": 307,
        "rentPrice": "5.9",
        "buyPrice": "13"
    },
    {
        "id": 591273,
        "title": "Fear Street Part One: 1994",
        "description": "In 1994, a group of teenagers discovers that the terrifying events which have haunted their town for generations ​are all connected — and that they may be the next targets.",
        "type": "movies",
        "year": 2021,
        "featured": false,
        "banner": "/tyZmdMdI3jLs93HDObOZkdq4J7z.jpg",
        "poster": "/6Wt1YDJdKAISEuARxsOLJepsC6l.jpg",
        "rating": 7,
        "totalRatings": 26,
        "rentPrice": "4.7",
        "buyPrice": "11"
    },
    {
        "id": 520763,
        "title": "A Quiet Place Part II",
        "description": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
        "type": "movies",
        "year": 2021,
        "featured": false,
        "banner": "/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
        "poster": "/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
        "rating": 7.9,
        "totalRatings": 1158,
        "rentPrice": "5.3",
        "buyPrice": "12"
    },
    {
        "id": 649409,
        "title": "No Sudden Move",
        "description": "A group of criminals are brought together under mysterious circumstances and have to work together to uncover what's really going on when their simple job goes completely sideways.",
        "type": "movies",
        "year": 2021,
        "featured": false,
        "banner": "/ok7RdHhVngnwkvKj09tvtOvypG.jpg",
        "poster": "/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg",
        "rating": 7.1,
        "totalRatings": 17,
        "rentPrice": "4.7",
        "buyPrice": "11"
    },
    {
        "id": 459151,
        "title": "The Boss Baby: Family Business",
        "description": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
        "type": "movies",
        "year": 2021,
        "featured": true,
        "banner": "/pxOiKwRvNp3zFOiuwpYpzlbmEgC.jpg",
        "poster": "/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg",
        "rating": 8.4,
        "totalRatings": 22,
        "rentPrice": "5.6",
        "buyPrice": "13"
    }
];