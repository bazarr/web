import React from 'react';
import Utils from '../../utils.js';
import Recaptcha from 'react-recaptcha';
import './main.css';

const GET_FEEDBACK = 'GET_FEEDBACK';
const VALIDATE_HUMAN = 'VALIDATE_HUMAN';
const SHOW_THANKYOU_MSG = 'SHOW_THANKYOU_MSG';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.submitFeedback = this.submitFeedback.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.onChangeFeedbackText = this.onChangeFeedbackText.bind(this);
        this.state = {
            feedbackState: GET_FEEDBACK
        };
    }

    submitFeedback() {
        let feedbackMSG = document.getElementById('feedback');
        this.setState({
            feedbackState: VALIDATE_HUMAN,
            feedbackMSG: feedbackMSG.value
        });
    }

    sendFeedback() {
        fetch(Utils.endpoint + '/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                feedback: this.state.feedbackMSG
            }),
        })
        .then(() => {
            this.setState({
                feedbackState: SHOW_THANKYOU_MSG
            });
        });
    }

    onChangeFeedbackText(event) {
        if( event.key == 'Enter' ) {
            this.submitFeedback();
        }
    }

    render() {

        let recaptchaNode = this.state.feedbackState === VALIDATE_HUMAN ? (<Recaptcha sitekey="6LdxZBcUAAAAALy351xe4rC8LwMdE6CRDw0_gMDd" render="explicit" onloadCallback={() => {}} verifyCallback={this.sendFeedback} />) : (<div/>);
        let feedbackTextNode = this.state.feedbackState === GET_FEEDBACK ? (<input type="text" id="feedback" className="form-control" onKeyPress={this.onChangeFeedbackText} placeholder="Write any feedback here..." />) : (<div/>);
        let submitFeedbackButtonNode = this.state.feedbackState === GET_FEEDBACK ? (<button className="btn btn-default " onClick={this.submitFeedback} type="submit">Submit!</button>) : (<div/>);
        let thankyouMSGNode = this.state.feedbackState === SHOW_THANKYOU_MSG ? (<h3 className="feedback-thank-you-message">Thanks for the feedback!</h3>) : (<div/>);

        return(
            <div className="footer">
                <div className="feedback-box text-center">
                    {recaptchaNode}
                    {thankyouMSGNode}
                    <div className="input-group">
                        {feedbackTextNode}
                        <span className="input-group-btn">
                            {submitFeedbackButtonNode}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};