import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageComments(state={loading: false, comments:[]}, action) {
    switch(action.type) {

        case 'LOADING':
            return { loading: true, comments: [] };
        
        case 'ADD_COMMENT':
            return { ...state, loading: false, comments: [...state.comments, action.payload]}
               
        case 'DELETE_COMMENT':
            return { ...state, loading: false, comments: state.comments.filter(comment => comment.id !== action.payload.id) }

        case 'FETCH_COMMENTS':
            return { loading: false, comments: action.payload };
        
        default:
            return state;
    }

}