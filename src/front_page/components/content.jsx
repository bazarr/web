import PostList from './postlist.jsx';
import React from 'react';
import { connect } from 'react-redux';
import './spinner.css';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let spinner = (<div/>);
        if( this.props.isLoading ) {
            spinner = (
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            );
        }

        return (
            <div className="row">
                {spinner}
                <PostList/>
            </div>
        );
    }
}

// This should be inside the container
const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoading: state.content.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default ContentContainer;