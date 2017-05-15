import React from 'react';
import { Grid, Col, Thumbnail } from 'react-bootstrap';
import { endpoint, conditionMap } from '../../utils.js';

export default class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.getPosts = this.getPosts.bind(this);
        this.state = {};
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        fetch(endpoint + '/posts', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            let i = 0;
            let posts = [];
            for( var j = 0; j < json.posts.length; j++ ) {
                let post = json.posts[j];
                i++;
                posts.push(
                    <Col key={i} xs={12} sm={6} md={4} lg={3}>
                        <Thumbnail src={post.image} alt="242x200">
                            <h3>{post.title}</h3>
                            <h4>{post.description}</h4>
                            <h4>Price: {post.price}</h4>
                            <h4>{conditionMap[post.condition]}</h4>
                        </Thumbnail>
                    </Col>
                );
            }
            this.setState({ posts });
        });
    }

    render() {
        return (
            <div className="row">
                <div className="container-fluid">
                    <Grid>
                        {this.state.posts}
                    </Grid>
                </div>
            </div>
        );
    }
}