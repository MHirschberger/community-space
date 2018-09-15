import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageComments(state={loading: false, comments:[], errors: []}, action) {
    switch(action.type) {

        case 'LOADING_COMMENTS':
            return { ...state, loading: true };
        
        case 'ADD_COMMENT':
            if (action.payload.id && action.payload.text) {
                return { loading: false, comments: [...state.comments, action.payload], errors: []};
            } else if (!action.payload.id && action.payload.text){
                return { ...state, errors: action.payload.text };
            } else {
                return state;
            }
               
        case 'DELETE_COMMENT':
            return { ...state, loading: false, comments: state.comments.filter(comment => comment.id !== action.payload.id) }

        case 'FETCH_COMMENTS':
            return { loading: false, comments: action.payload };
        
        default:
            return state;
    }

}