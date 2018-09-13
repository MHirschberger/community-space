export const fetchComments = (discussionId) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_COMMENTS' });
        return fetch(`/api/discussions/${discussionId}/comments.json`)
            .then(response => response.json())
            .then(comments => dispatch({type: 'FETCH_COMMENTS', payload: comments }))
    }
};