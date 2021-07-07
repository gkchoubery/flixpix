import { Component } from 'react';
import { Container } from 'react-bootstrap';
import './index.css';


export default class ContentComponent extends Component {
    render() {
        return (
            <section id="content">
                <Container>
                    <div className="content">
                        {
                            contentData.map(d => <ContentDataComponent contentData={d}></ContentDataComponent>)
                        }
                    </div>
                </Container>
            </section>
        )
    }
}

type ContentData = {
    contentData: string[]
}

const ContentDataComponent = (props: ContentData) => {
    const [header, description] = props.contentData;
    return (
        <div className="count-box">
            <h2>
                {header}
            </h2>
            <p>{description}</p>
        </div>
    )

}

const contentData = [
    ['Latest Offer', 'Rent TV Shows for $4.99'],
    ['Hottest Deal', 'Buy TV Shows for $7.99'],
    ['Blockbuster', 'Rent latest movies for $2.99'],
    ['Trending', 'Buy trending movies for $1.99']
]