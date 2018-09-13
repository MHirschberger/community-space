export const fetchDiscussions = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_DISCUSSIONS' });
        return fetch('http://localhost:3001/discussions')
            .then(response => response.json())
            .then(discussions => dispatch({type: 'FETCH_DISCUSSIONS', payload: discussions }));
    }
};