import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageComments(state={loading: false, comments:[]}, action) {
    switch(action.type) {
        
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

        case 'LOADING_COMMENTS':
            return { loading: true, comments: [] };

        case 'FETCH_COMMENTS':
            return { loading: false, comments: action.payload };
        
        default:
            return state;
    }

}