import { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import WithHeaderFooter from '../../hoc';
import { ShowItem } from '../../interfaces';
import Api from '../../utils/api';
import GetUrl from '../../utils/image';
import './index.css';

type IState = {
    show: ShowItem | null;
}

type Params = {
    id: string
}

class ShowDetailsComponent extends Component<RouteComponentProps<Params>, IState> {

    api: Api;
    constructor(props: any) {
        super(props);
        this.state = {
            show: null
        };
        this.api = new Api();
    }

    async componentDidMount() {
        try {
            const show = await this.api.getShowDetails(this.props.match.params.id);
            await this.setState({
                show
            })
        } catch (e) {
            this.props.history.replace('/not_found');
        }
    }

    render() {
        const show = this.state.show;

        const rating = show?.rating! / 2;
        const notWhole = Math.floor(rating) !== Math.ceil(rating);
        const ratingsDOM = rating === 0 ? 'Ratings Unavailable' : [...Array(5).keys()].map(n => n + 1).map(n => {
            return <i className={`${n <= rating ? 'fas fa-star' : notWhole && n === Math.ceil(rating) ? 'fas fa-star-half' : ''}`}></i>
        });

        return (
            <section id="detail" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${GetUrl(this.state.show?.banner!, 'original')}')`
            }}>

                <Container>
                    <div className="content">
                        <img alt={show?.title} src={GetUrl(show?.poster!)}></img>
                        <div>
                            <h1>{show?.title} <span className="show-type"><i className={`fas ${show?.type === 'movies' ? 'fa-film' : 'fa-tv'}`}></i></span></h1>
                            <h3>{show?.title}</h3>

                            <p style={{ maxWidth: `${show?.description!.length! > 300 ? '80%' : '60%'}` }}>{show?.description}</p>
                            <span>{ratingsDOM} {show?.rating ? ` (${show?.totalRatings})` : ''}</span>
                            <span>Year: {show?.year}</span>
                            <div className="detail-actions">
                                <Button variant="dark">Buy @ ${show?.buyPrice}</Button>
                                <Button variant="dark">Rent @ ${show?.rentPrice}</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

export default WithHeaderFooter(ShowDetailsComponent);