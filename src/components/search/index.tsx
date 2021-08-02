import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import { RouteComponentProps } from 'react-router-dom';
import Api from '../../utils/api';
import { ShowItem } from '../../interfaces';
import GetUrl from '../../utils/image';

type SearchParams = {
    searchText: string;
}

type IState = {
    loading: boolean;
    shows: ShowItem[];
    searchText: string;
}

type RouteProps = RouteComponentProps<{}, any, SearchParams>;

class SearchComponent extends React.Component<RouteProps, IState> {

    api: Api;

    constructor(props: RouteProps) {
        super(props);
        this.api = new Api();

        this.state = {
            loading: true,
            shows: [],
            searchText: this.props.location.state.searchText
        }
    }

    onPosterClick = (id: number) => {
        this.props.history.push(`/detail/${id}`);
    };

    getDom = (s: ShowItem) => {
        return <div key={s.id} className="listing" onClick={() => this.onPosterClick(s.id)} style={{ backgroundImage: `url(${GetUrl(s.poster)})` }}>
            <div className="listing-badge"><i className={`fas ${s.type === 'movies' ? 'fa-film' : 'fa-tv'}`}></i></div>
            <h2 className='listing-title'>{s.title}</h2>
        </div>
    }

    getContent = () => {
        return this.state.shows.length === 0 ? <div className="no-results"><p>No results found</p></div> : this.state.shows.map(s => this.getDom(s));
    }

    performSearch = async (q: string) => {
        try {
            const shows = await this.api.searchShows(q);
            await this.setState({
                shows
            });
        } catch(e) {
            console.error(e);
        } finally {
            await this.setState({
                loading: false
            });
        }
    }

    async componentDidUpdate(prevProps: RouteProps) {
        if (this.props.location.state.searchText !== prevProps.location.state.searchText) {
            await this.performSearch(this.props.location.state.searchText);
        }
    }

    async componentDidMount() {
        await this.performSearch(this.props.location.state.searchText);
    }

    render() {
        return (
            <section id="search">
                <Container>
                    <h2>Search results</h2>
                    <div className="listing-container">
                        {this.getContent()}
                    </div>
                </Container>
            </section>
        )
    }
}

export default SearchComponent;