import { Component } from 'react';
import './index.css';

import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">
                                With FlixPix you have the power to make your decisions.
                                You will be presented with the movies and tv shows that may
                                be featured or trending. Now, should you choose to buy them or rent is up to you.
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li>
                                    <LinkContainer to="/browse?type=movies">
                                        <a href="/">All Movies</a>
                                    </LinkContainer>
                                </li>
                                <li>
                                    <LinkContainer to="/browse?type=series">
                                        <a href="/">All TV Shows</a>
                                    </LinkContainer>
                                </li>
                                <li>
                                    <LinkContainer to="/browse">
                                        <a href="/">All Content</a>
                                    </LinkContainer>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li>
                                    No Quick Links Available
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Geet Choubey | <a href="mailto:gkchoubery@myseneca.ca">gkchoubery@myseneca.ca</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" target="_blank" rel="noreferrer" href="https://facebook.com/thesimplestusername"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a className="twitter" target="_blank" rel="noreferrer" href="https://twitter.com/@18GeetChoubey"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a className="dribbble" target="_blank" rel="noreferrer" href="https://instagram.com/geetchoubey"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a className="linkedin" target="_blank" rel="noreferrer" href="https://linkedin.com/in/geetchoubey"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}