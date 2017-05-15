import React from 'react';
import { endpoint, condition } from '../../utils.js';
import base64Img from 'base64-img';
import { connect } from 'react-redux';
import { submitNewPost, closeCreatePostModal } from '../actions';
import { Modal, Nav, NavItem, Navbar, FormGroup, FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import './main.css';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.createPost = this.createPost.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this.state = { file: '',imagePreviewUrl: '', condition: { value: 'Condition ' } };
    }

    createPost() {
        let imagePath = document.getElementById('input-image-path').value;
        let base64ImageString = 'image'; //base64Img.base64Sync(imagePath);
        fetch(endpoint + '/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: '0500fde7-668d-4a60-9c9e-ace7f00b5e57', //this id will always be the same for now
                title: this.state.title,
                description: this.state.description,
                condition: this.state.condition.id,
                price: this.state.price,
                image: base64ImageString
            }),
        }).then(value => {
            console.log(value);
            this.props.createPost();
        }).fail( error => {
            window.alert('Error! Could not create new post');
        });
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return ( 
            <div>
                <Modal bsSize="large" show={this.props.showModal} onHide={this.props.hideModal} >
                    <Modal.Header closeButton>
                        <Modal.Title>Create a post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label>What are you selling?</label>
                                <input type="text" onChange={(e)=> this.setState({title: e.target.value})} className="form-control" id="item" placeholder="Item"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" onChange={(e)=> this.setState({price: e.target.value})} className="form-control" id="price" placeholder="Price"/>
                            </div>
                            <div className="form-group">
                                <div className="dropdown center-right">
                                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        {this.state.condition.value}
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="conditionMenu">
                                        <li><a onClick={() => { this.setState({condition: condition.new})} }>New</a></li>
                                        <li><a onClick={() => { this.setState({condition: condition.excellent})} }>Excellent</a></li>
                                        <li><a onClick={() => { this.setState({condition: condition.good})} }>Good</a></li>
                                        <li><a onClick={() => { this.setState({condition: condition.fair})} }>Fair</a></li>
                                        <li><a onClick={() => { this.setState({condition: condition.asIs})} }>As is</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Additional Info</label>
                                <textarea onChange={(e) => this.setState({description: e.target.value})} className="form-control" rows="5" id="addInfo"></textarea>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 previewComponent">
                                    <input className="fileInput"
                                        id="input-image-path" 
                                        type="file" 
                                        accept="image/*"
                                        onChange={(e)=>this._handleImageChange(e)} />
                                    <button type="button" onClick={() => {this.createPost()}} className="btn btn-default">Submit</button>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 imgPreview">
                                    {$imagePreview}
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

// This should be inside the container
const mapStateToProps = (state) => {
  return {
      showModal: state.postForm.showModal
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => {
            dispatch(submitNewPost());
        },
        hideModal: () => {
            dispatch(closeCreatePostModal());
        }
    };
}

const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)

export default PostFormContainer;