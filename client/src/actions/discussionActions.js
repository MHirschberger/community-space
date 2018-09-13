export const fetchDiscussions = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_DISCUSSIONS' });
        return fetch('/api/discussions.json')
            .then(response => response.json())
            .then(discussions => dispatch({type: 'FETCH_DISCUSSIONS', payload: discussions }))
    }
};