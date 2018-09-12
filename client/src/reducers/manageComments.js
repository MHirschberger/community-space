import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageComments(state={comments: []}, action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            const comment = {
                id: cuid(),
                text: action.text
            }
            return { ...state, comments: [...state.comments, comment]}
        
        case 'DELETE_COMMENT':
            return { ...state, comments: state.comments.filter(comment => comment.id !== action.id) }
        
        default:
            return state;
    }

}