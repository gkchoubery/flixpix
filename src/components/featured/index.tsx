import { Component } from "react";
import { ShowItem } from "../../interfaces";
import { Container } from "react-bootstrap";
import "./index.css";
import GetUrl from '../../utils/image';
import Api from "../../utils/api";
import { SelectedType } from "../../App";

export interface IProps {
  title: string;
  type: SelectedType;
  history?: any
}

interface IState {
  loading: boolean;
  data: ShowItem[];
}

export default class FeaturedComponent extends Component<IProps, IState> {
  api: Api;
  static defaultProps = {
    loading: false,
    data: [],
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
    this.api = new Api();
  }

  async componentDidMount() {
    try {
      let data = await this.api.getFeaturedContent(this.props.type, 6);
      this.setState({
        loading: false,
        data,
      });
    } catch (e) {
      this.setState({
        loading: false,
        data: [],
      });
    }
  }

  getDom = (s: ShowItem) => {
    return <div key={s.id} className="listing" style={{ backgroundImage: `url(${GetUrl(s.poster)})` }}>
      <div className="listing-badge"><i className={`fas ${s.type === 'movies' ? 'fa-film' : 'fa-tv'}`}></i></div>
      <h2 className='listing-title'>{s.title}</h2>
    </div>
  }

  getContent = () => {
    return this.state.data.length === 0 ? <p>No results found</p> : this.state.data.map(s => this.getDom(s));
  }

  render() {
    return (
      <Container>
        <section className="featured">
          <h2>{this.props.title}</h2>
          <div className="listing-container">
            {this.getContent()}
          </div>
        </section>
      </Container>
    );
  }
}
