import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageDiscussions(state={loading: false, discussions: []}, action) {
    switch(action.type) {

        case 'LOADING':
            return { ...state, loading: true };

        case 'ADD_DISCUSSION':
            return { ...state, loading: false, discussions: [...state.discussions, action.payload]}
        
        case 'DELETE_DISCUSSION':
            return { ...state, loading: false, discussions: state.discussions.filter(discussion => discussion.id !== action.id) }

        case 'FETCH_DISCUSSIONS':
            return { loading: false, discussions: action.payload };
        
        default:
            return state;
    }

}