import React from 'react';
import './App.css';
import ContentComponent from './components/content';
import CarouselComponent from './components/carousel'
import FeaturedComponent, { IProps as FeaturedComponentProps } from './components/featured'

export type SelectedType = '' | 'movies' | 'series';

class App extends React.Component {

  featuredContentBlock: FeaturedComponentProps[] = [
    {
      title: 'Featured Movies',
      type: 'movies'
    },
    {
      title: 'Featured TV Series',
      type: 'series'
    }
  ];

  render() {
    return (
      <>
        <CarouselComponent />
        {this.featuredContentBlock.map(({ title, type }) => <FeaturedComponent key={title} title={title} type={type} />)}
        <ContentComponent />
      </>
    );
  }
}

export default App;
