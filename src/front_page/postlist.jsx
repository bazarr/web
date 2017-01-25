import React from 'react';

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
        /*fetch('http://localhost:8000/posts', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({posts: json.posts});
        });*/

        //not the real thing. Just fetching mocks!
        var mocks = [{
            label: 'Cute dog for Sale',
            img: 'http://s2.favim.com/610/150421/adorable-animal-cute-dog-Favim.com-2670482.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et quam orci. Donec massa sapien, finibus ultricies arcu eget, lobortis dictum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet congue ipsum. Quisque ac convallis libero. Etiam efficitur bibendum risus vitae posuere. Vestibulum elit lorem, vehicula a ligula quis, varius volutpat nulla. Duis egestas rhoncus tortor sed varius.'
        },{
            label: 'Cute dog for Sale',
            img: 'http://s2.favim.com/610/150421/adorable-animal-cute-dog-Favim.com-2670482.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et quam orci. Donec massa sapien, finibus ultricies arcu eget, lobortis dictum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet congue ipsum. Quisque ac convallis libero. Etiam efficitur bibendum risus vitae posuere. Vestibulum elit lorem, vehicula a ligula quis, varius volutpat nulla. Duis egestas rhoncus tortor sed varius.'
        },{
            label: 'Cute dog for Sale',
            img: 'http://s2.favim.com/610/150421/adorable-animal-cute-dog-Favim.com-2670482.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et quam orci. Donec massa sapien, finibus ultricies arcu eget, lobortis dictum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet congue ipsum. Quisque ac convallis libero. Etiam efficitur bibendum risus vitae posuere. Vestibulum elit lorem, vehicula a ligula quis, varius volutpat nulla. Duis egestas rhoncus tortor sed varius.'
        },{
            label: 'Cute dog for Sale',
            img: 'http://s2.favim.com/610/150421/adorable-animal-cute-dog-Favim.com-2670482.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et quam orci. Donec massa sapien, finibus ultricies arcu eget, lobortis dictum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet congue ipsum. Quisque ac convallis libero. Etiam efficitur bibendum risus vitae posuere. Vestibulum elit lorem, vehicula a ligula quis, varius volutpat nulla. Duis egestas rhoncus tortor sed varius.'
        }];

        let i = 0;
        let posts =  mocks.map((post) => {
            i++;
            return (
                <div key={i} className="col-md-6 col-sm-6 col-lg-6">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3>{post.label}</h3>
                            <img src={post.img} className="img-thumbnail" style={{width:"304", height:"236"}}/> 
                            <p>{post.description}</p>
                            <p><a href="#" className="btn btn-primary" role="button">Buy</a></p>
                        </div>
                    </div>
                </div>
            );
        });

        this.setState({ posts });
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