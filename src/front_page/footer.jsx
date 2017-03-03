import React from 'react';
import './main.css';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.sendFeedback = this.sendFeedback.bind(this);
    }


    sendFeedback() {
        let rawMSG = document.getElementById('feedback');
        fetch('http://localhost:8000/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                feedback: rawMSG.value
            }),
        })
        .then(() => {
            //TODO get rid of the input box to avoid multiple feedbacks from user
        }).fail(() => {
            //TODO code for failure
        });
    }

    render() {
        return(
            <div className="footer">
                <div className="col-lg-12 col-sm-12 feedback-box">
                    <div className="input-group">
                        <input type="text" id="feedback" className="form-control" placeholder="Write any feedback here..." />
                        <span className="input-group-btn">
                            <button className="btn btn-default " onClick={this.sendFeedback} type="submit">Submit!</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};