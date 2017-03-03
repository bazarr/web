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
                    <div key={i} className="col-sm-4 col-md-4 col-lg-3">
                        <div className="post-card">
                            <div className="default-post-image-box"> 
                                <div className="default-post-image"/>
                            </div>
                            <div className="text-center post-card-info">
                                <p>{post.description}</p>
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
            <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="row">
                    <div className="container-fluid">
                        {this.state.posts}
                    </div>
                </div>
            </div>
        );
    }
}