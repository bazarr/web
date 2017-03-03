import PostList from './postlist.jsx';
import PostForm from './postform.jsx';
import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row"  style={{margin: "50px 0 0 0"}}>
               <div className="container-fluid">
                    <PostList/>
                </div>
            </div>
        );
    }

}