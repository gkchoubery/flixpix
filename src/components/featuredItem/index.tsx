import { Component } from "react";
import { ShowItem } from "../showDetails";
import "./index.css";

export interface IProps {
  data: ShowItem;
}

export default class FeaturedItemComponent extends Component<IProps> {
  render() {
    return (
      <li>
        <figure>
          <img src={`https://image.tmdb.org/t/p/w300/${this.props.data.poster}`} alt={this.props.data.title} />
          <figcaption>
            <h3>{this.props.data.title}</h3>
          </figcaption>
        </figure>
      </li>
    );
  }
}
