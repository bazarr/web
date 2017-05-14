import React from 'react';
import Utils from '../utils.js';

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
        try {
        fetch(Utils.endpoint + '/posts', {
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
                    <div key={i} className="col-md-6 col-sm-12 col-lg-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>{post.label}</h3>
                                <img src={post.img} className="img-thumbnail"/> 
                                <p>{post.description}</p>
                                <p><a href="#" className="btn btn-primary" role="button">Buy</a></p>
                            </div>
                        </div>
                    </div>
                );
            }

            this.setState({ posts });
        });
            } catch(error) {
                window.alert(error);
            }
    }

    render() {
        return (
            <div className="row">
                <div className="container-fluid">
                    {this.state.posts}
                </div>
            </div>
        );
    }
}