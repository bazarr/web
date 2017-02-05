import React from 'react';
import Utils from '../utils.js';

export default class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.createPost = this.createPost.bind(this);
        this.state = {};
    }

    createPost() {
        fetch(Utils.endpoint + '/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: '0500fde7-668d-4a60-9c9e-ace7f00b5e57', //this id will always be the same for now
                title: this.state.title,
                description: this.state.description,
                condition: this.state.condition,
                price: this.state.price
            }),
        });
    }

    render() {
        return ( 
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="thumbnail">
                    <div className="caption">
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
                                        {this.state.condition || 'Condition'}
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="conditionMenu">
                                        <li><a onClick={(e) => this.setState({condition: e.target.value})} >New</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a onClick={(e) => this.setState({condition: e.target.value})}>Mint Condition</a></li>
                                        <li><a onClick={(e) => this.setState({condition: e.target.value})}>Working Condition</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a onClick={(e) => this.setState({condition: e.target.value})}>Not Working</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Additional Info</label>
                                <textarea onChange={(e) => this.setState({description: e.target.value})} className="form-control" rows="5" id="addInfo"></textarea>
                            </div>
                            <button type="button" onClick={() => this.createPost()} className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}