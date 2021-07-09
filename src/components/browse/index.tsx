import { Component } from 'react';
import { Container, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import WithHeaderFooter from '../../hoc'
import { ShowItem } from '../../interfaces';
import './index.css';
import Api from '../../utils/api';
import GetUrl from '../../utils/image';
import { SelectedType } from '../../App';

interface IState {
    loading: boolean;
    selected: SelectedType;
    shows: ShowItem[];
    movies: ShowItem[];
    series: ShowItem[];
    allContent: ShowItem[]
}

class BrowseComponent extends Component<any, IState> {

    api: Api;

    constructor(props: any) {
        super(props);
        this.api = new Api();
        this.state = {
            shows: [],
            series: [],
            movies: [],
            allContent: [],
            loading: true,
            selected: ''
        }
    }

    fetchContent = async () => {
        try {
            let shows = await this.api.getContent(this.state.selected);
            await this.setState({
                shows: shows.sort(_ => 0.5 - Math.random())
            });
        } catch (e) {
            console.error(e);
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    async componentDidMount() {
        await this.fetchContent();
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
        return this.state.shows.length === 0 ? <p>No results found</p> : this.state.shows.map(s => this.getDom(s));
    }

    handleToggle = async (selected: SelectedType) => {
        await this.setState({
            selected
        });
        await this.fetchContent();
    }

    render() {
        return (
            <section id="browse">
                <Container>
                    <Row className="px-1">
                        <ToggleButtonGroup name="type-selector" type="radio" value={this.state.selected} onChange={this.handleToggle}>
                            <ToggleButton value={''}><i className="fas fa-video"></i>All</ToggleButton>
                            <ToggleButton value='movies'><i className="fas fa-film"></i>Movies</ToggleButton>
                            <ToggleButton value='series'><i className="fas fa-tv"></i>TV Shows</ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <h2>{this.state.selected === '' ? 'Browse All Content' : this.state.selected === 'movies' ? 'Browse Movies' : 'Browse TV Shows'}</h2>
                    <div className="listing-container">
                        {this.getContent()}
                    </div>
                </Container>
            </section>
        );
    }

}


export default WithHeaderFooter(BrowseComponent);