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
            let posts =  json.posts.map((post) => {
                i++;
                return (
                    <div key={i} className="col-md-6 col-sm-6 col-lg-6">
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
            });

            this.setState({ posts });
        });
    }

    render() {
        return (
            <div className="col-md-8 col-sm-12 col-lg-8">
                <div className="row">
                    <div className="container-fluid">
                        {this.state.posts}
                    </div>
                </div>
            </div>
        );
    }
}