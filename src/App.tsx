import React from 'react';
import './App.css';
import ContentComponent from './components/content';
import CarouselComponent from './components/carousel'
import FeaturedComponent, {IProps as FeaturedComponentProps} from './components/featured'
import Api from './utils/api';

const api = new Api();

export default class App extends React.Component {

  api: Api;
  featuredContentBlock: FeaturedComponentProps[] = [
    {
      title: 'Featured Movies',
      type: 'movie'
    },
    {
      title: 'Featured TV Series',
      type: 'series'
    }
  ];

  constructor(props: any) {
    super(props);
    this.api = new Api();
  }

  render() {
    return (
      <div>
        <CarouselComponent />
        {this.featuredContentBlock.map(({ title, type }) => <FeaturedComponent key={title} title={title} type={type} />)}
        <ContentComponent />
      </div>
    );
  }
}
