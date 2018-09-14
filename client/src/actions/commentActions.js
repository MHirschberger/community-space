const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

export const fetchComments = (discussionId) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_COMMENTS' });
        return fetch(`/api/discussions/${discussionId}/comments.json`)
            .then(response => response.json())
            .then(comments => dispatch({type: 'FETCH_COMMENTS', payload: comments }))
    }
};

export const addComment = (text, discussionId) => {
        return (dispatch) => {
        dispatch({type: 'LOADING'});
        return fetch(`/api/discussions/${discussionId}/comments`, {
            method: "POST",
            body: JSON.stringify({'comment':{text, discussion_id: discussionId}}),
            headers
        })
            .then(response => response.json())
            .then(comment => dispatch({type: 'ADD_COMMENT', payload: comment}))
    }
}

export const deleteComment = (commentId) => {
    return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
        body: JSON.stringify({'comment':{id: commentId}}),
        headers
    })
        .then(response => response.json())
        .then(comment => dispatch({type: 'DELETE_COMMENT', payload: comment}))
    }
}

