import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageDiscussions(state={loading: false, discussions: []}, action) {
    switch(action.type) {
        case 'ADD_DISCUSSION' :
            const discussion = {
                id: cuid(),
                text: action.text
            }
            return { ...state, discussions: [...state.discussions, discussion]}
        
        case 'DELETE_DISCUSSION':
            return { ...state, discussions: state.discussions.filter(discussion => discussion.id !== action.id) }

        case 'LOADING_DISCUSSIONS':
            return { loading: true, discussions: [] };

        case 'FETCH_DISCUSSIONS':
            return { loading: false, discussions: action.payload };
        
        default:
            return state;
    }

}