import React from 'react';

export default class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return ( 
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="thumbnail">
                    <div className="caption">
                        <div className="btn-group text-center" style={{margin: '10px 0 10px 0'}} role="group">
                            <button type="button" className="btn btn-default">Selling</button>
                            <button type="button" className="btn btn-default">Buying</button>
                        </div>
                        <form>
                            <div className="form-group">
                                <label>What are you selling?</label>
                                <input type="text" className="form-control" id="item" placeholder="Item"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" className="form-control" id="price" placeholder="price"/>
                            </div>
                            <div className="form-group">
                                <div className="dropdown center-right">
                                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Condition
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="conditionMenu">
                                        <li><a href="#">New</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Mint Condition</a></li>
                                        <li><a href="#">Working Condition</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Not Working</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="comment">Additinoal Info</label>
                                <textarea className="form-control" rows="5" id="addInfo"></textarea>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}