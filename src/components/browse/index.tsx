import { Component } from 'react';
import { Container } from 'react-bootstrap';
import WithHeaderFooter from '../../hoc'
import { ShowItem } from '../showDetails';
import './index.css';
import Api from '../../utils/api';
import GetUrl from '../../utils/image';

interface IState {
    loading: boolean;
    movies: ShowItem[];
    series: ShowItem[];
}

class BrowseComponent extends Component<any, IState> {

    api: Api;

    constructor(props: any) {
        super(props);
        this.api = new Api();
        this.state = {
            series: [],
            movies: [],
            loading: true
        }
    }

    async componentDidMount() {
        try {
            let [movies, series] = await Promise.all([this.api.getContent('movies'), this.api.getContent('series')])
            this.setState({
                movies,
                series
            });
        } catch (e) {
            console.error(e);
        } finally {
            this.setState({
                loading: false
            });
        }

    }

    onPosterClick = (id: number) => {
        this.props.history.push(`/detail/${id}`);
    };

    getDom = (s: ShowItem) => {
        return <div key={s.id} className="listing" onClick={() => this.onPosterClick(s.id)} style={{ backgroundImage: `url(${GetUrl(s.poster)})` }}>
            <h2 className='listing-title'>{s.title}</h2>
        </div>
    }

    getMovies = () => {
        return this.state.movies.length === 0 ? <p>No results found</p> : this.state.movies.map(s => this.getDom(s));
    }

    getSeries = () => {
        return this.state.series.length === 0 ? <p>No results found</p> : this.state.series.map(s => this.getDom(s))
    };

    render() {
        return (
            <section id="browse">
                <Container>
                    <h2>Browse Movies</h2>
                    <div className="listing-container">
                        {this.getMovies()}
                    </div>
                    <h2 className="mt-5">Browse TV Shows</h2>
                    <div className="listing-container">
                        {this.getSeries()}
                    </div>
                </Container>
            </section>
        );
    }

}


export default WithHeaderFooter(BrowseComponent);