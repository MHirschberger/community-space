import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageDiscussions(state={discussions: []}, action) {
    switch(action.type) {
        case 'ADD_DISCUSSION' :
            const discussion = {
                id: cuid(),
                text: action.text
            }
            return { ...state, discussions: [...state.discussions, discussion]}
        
        case 'DELETE_DISCUSSIONS':
            return { ...state, discussions: state.discussions.filter(discussion => discussion.id !== action.id) }
        
        default:
            return state;
    }

}