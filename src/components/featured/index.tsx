import { Component } from "react";
import { ShowItem } from "../showDetails";
import { Container } from "react-bootstrap";
import FeaturedItemComponent from "../featuredItem";
import "./index.css";

import Api from "../../utils/api";

export interface IProps {
  title: string;
  type: "movie" | "series";
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
      let data = await this.api.getFeaturedContent(this.props.type);
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

  render() {
    const featuredShows = !this.state.loading ? (
      this.state.data && this.state.data.length !== 0 ? (
        this.state.data.map((s) => (
          <FeaturedItemComponent key={s.id} data={s} />
        ))
      ) : (
        <p>No Data for this section</p>
      )
    ) : (
      <p>Loading...</p>
    );
    return (
      <Container>
        <section className="featured">
          <h2>{this.props.title}</h2>
          <ul>{featuredShows}</ul>
        </section>
      </Container>
    );
  }
}
