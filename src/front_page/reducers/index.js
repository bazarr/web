import { combineReducers } from 'redux';
import postForm from './postForm.js';
import content from './content.js';

const FrontPageLogic = combineReducers({
    postForm,
    content
});

export default FrontPageLogic;