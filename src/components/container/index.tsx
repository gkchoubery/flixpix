import React from 'react';
import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';
import LoginModalComponent from '../../components/login';
import RegisterModalComponent from '../../components/register';
import { User } from '../../interfaces/user';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IState {
    loginModalShow: boolean;
    registerModalShow: boolean;
    user?: User;
}

class ContainerComponent extends React.Component<RouteComponentProps, IState> {

    constructor(props: RouteComponentProps) {
        super(props);
        const user = localStorage.getItem('user');
        this.state = {
            loginModalShow: false,
            registerModalShow: false,
            user: user ? JSON.parse(user) : null
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

    onLogin = async (user: User) => {
        await this.setState({
            user
        });
        localStorage.setItem('user', JSON.stringify(user));
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <>
                <HeaderComponent user={this.state.user} setModalShow={this.setModalShow} onLoginHide={this.onLoginHide} onRegisterHide={this.onRegisterHide} />
                {this.props.children}
                {this.state.user ? '' :
                    <>
                        <LoginModalComponent onLogin={this.onLogin} onHide={this.onLoginHide} show={this.state.loginModalShow} />
                        <RegisterModalComponent onHide={this.onRegisterHide} show={this.state.registerModalShow} />
                    </>}
                <FooterComponent />
            </>
        );
    }
}

export default withRouter(ContainerComponent);