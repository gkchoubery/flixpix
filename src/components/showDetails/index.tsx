import { Component } from 'react';

interface IProps {
    data: ShowItem
}

export interface ShowItem {
    id: number
    title: string
    description: string
    type: 'movie' | 'series'
    year: number
    banner: string
    poster: string
    featured: boolean
}

export default class ShowDetailsComponent extends Component<IProps> {
    render() {
        return <><pre>{this.props.data}</pre></>
    }
}