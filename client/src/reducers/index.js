import { combineReducers } from 'redux';
import discussionsReducer from './manageDiscussions';

const rootReducer = combineReducers({
    discussions: discussionsReducer
})

export default rootReducer;