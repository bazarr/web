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
        this.state = {
        };
    }

    render() {
        return(
            <div className="footer">
                <div className="feedback-box text-center">
                </div>
            </div>
        );
    }
};