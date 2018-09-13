import { combineReducers } from 'redux';
import discussionsReducer from './manageDiscussions';
import commentsReducer from './manageComments';

const rootReducer = combineReducers({
    discussions: discussionsReducer,
    comments: commentsReducer
})

export default rootReducer;