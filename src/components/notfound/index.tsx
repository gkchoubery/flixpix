import { Component } from 'react';
import './index.css';

export default class NotFoundComponent extends Component {

    render() {
        return (
            <div id="notfound">
                <div id="countUp">
                    <div className="number" data-count="404">404</div>
                    <div className="text">Page not found</div>
                    <div className="text">This may not mean anything.</div>
                    <div className="text">I'm probably working on something that has blown up.</div>
                </div>
            </div>
        )
    }
}