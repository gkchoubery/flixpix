import React from 'react';
import './App.css';
import ContentComponent from './components/content';
import CarouselComponent from './components/carousel'
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import FeaturedComponent, { IProps as FeaturedComponentProps } from './components/featured'
import LoginModalComponent from './components/login';
import RegisterModalComponent from './components/register';

interface IState {
  loginModalShow: boolean;
  registerModalShow: boolean;
}

export default class App extends React.Component<{}, IState> {

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
    this.state = {
      loginModalShow: false,
      registerModalShow: false
    };

  }

  setModalShow = (type: 'login' | 'register') => {
    this.setState({
      loginModalShow: type === 'login',
      registerModalShow: type === 'register'
    });
  }

  onLoginHide = () => {
    this.setState({
      loginModalShow: false
    });
  }

  onRegisterHide = () => {
    this.setState({
      registerModalShow: false
    });
  }

  render() {
    return (
      <>
        <HeaderComponent setModalShow={this.setModalShow} onLoginHide={this.onLoginHide} onRegisterHide={this.onRegisterHide} />
        <CarouselComponent />
        {this.featuredContentBlock.map(({ title, type }) => <FeaturedComponent key={title} title={title} type={type} />)}
        <ContentComponent />
        <FooterComponent />
        <LoginModalComponent onHide={this.onLoginHide} show={this.state.loginModalShow} />
        <RegisterModalComponent onHide={this.onRegisterHide} show={this.state.registerModalShow} />
      </>
    );
  }
}
