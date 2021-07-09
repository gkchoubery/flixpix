import { Component } from 'react';
import { ShowItem } from '../../interfaces';
import './index.css';

interface IProps {
    data: ShowItem
}

export default class ShowDetailComponent extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <section id="detail">
                Hello
            </section>
        );
    }
}