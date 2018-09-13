import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageComments(state={discussions: [], comments:[]}, action) {
    switch(action.type) {
        case 'ADD_DISCUSSION' :
            const discussion = {
                id: cuid(),
                text: action.text
            }
            return { ...state, discussions: [...state.discussions, discussion]}
        
        case 'DELETE_DISCUSSION':
            return { ...state, discussions: state.discussions.filter(discussion => discussion.id !== action.id) }

        case 'FETCH_DISCUSSIONS':
        case 'LOADING_CATS':
        return { loading: true, pictures: [] };

    case 'FETCH_CATS':
        return { loading: false, pictures: action.payload };
        
        case 'ADD_COMMENT':
            const discussionIdsArray = state.discussions.map(discussion => discussion.id);
            if (discussionIdsArray.includes(action.comment.discussionId)) {
                const comment = {
                    id: cuid(),
                    text: action.comment.text,
                    discussionId: action.comment.discussionId
                }
                return { ...state, comments: [...state.comments, comment]}
            } else {
                return state;
            }   
               
        case 'DELETE_COMMENT':
            return { ...state, comments: state.comments.filter(comment => comment.id !== action.id) }
        
        default:
            return state;
    }

}