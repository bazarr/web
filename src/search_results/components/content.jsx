import PostList from './postlist.jsx';
import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <PostList/>
            </div>
        );
    }

}