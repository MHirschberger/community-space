import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageDiscussions(state={loading: false, discussions: [], errors: []}, action) {
    switch(action.type) {

        case 'LOADING_DISCUSSION':
            return { ...state, loading: true };

        case 'ADD_DISCUSSION':
            if (action.payload.id && action.payload.text) {
                return { loading: false, discussions: [...state.discussions, action.payload], errors: []};
            } else if (!action.payload.id && action.payload.text){
                return { ...state, errors: action.payload.text };
            } else {
                return state;
            }
        
        case 'DELETE_DISCUSSION':
            return { ...state, loading: false, discussions: state.discussions.filter(discussion => discussion.id !== action.id) }

        case 'FETCH_DISCUSSIONS':
            return { loading: false, discussions: action.payload };
        
        case 'FETCH_DISCUSSION':
            return { loading: false, discussions: action.payload };
        
        default:
            return state;
    }

}