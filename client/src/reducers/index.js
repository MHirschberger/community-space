import { combineReducers } from 'redux';
import discussionsReducer from './manageDiscussions';
import commentsReducer from './manageComments';
import sessionsReducer from './manageSessions';

const rootReducer = combineReducers({
    discussions: discussionsReducer,
    comments: commentsReducer,
    sessions: sessionsReducer
})

export default rootReducer;