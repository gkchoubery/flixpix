import React from 'react';
import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';
import LoginModalComponent from '../../components/login';
import RegisterModalComponent from '../../components/register';

interface IState {
    loginModalShow: boolean;
    registerModalShow: boolean;
}

export default class ContainerComponent extends React.Component<{}, IState> {
    
    constructor(props: {}) {
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
                {this.props.children}
                <FooterComponent />
                <LoginModalComponent onHide={this.onLoginHide} show={this.state.loginModalShow} />
                <RegisterModalComponent onHide={this.onRegisterHide} show={this.state.registerModalShow} />
            </>
        );
    }
}