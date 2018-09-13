const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

export const fetchDiscussions = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING' });
        return fetch('/api/discussions.json')
            .then(response => response.json())
            .then(discussions => dispatch({type: 'FETCH_DISCUSSIONS', payload: discussions }))
    }
};

export const addDiscussion = discussion => {
    return (dispatch) => {
        dispatch({type: 'LOADING'});
        return fetch('/api/discussions', {
            method: "POST",
            body: JSON.stringify({discussion}),
            headers
        })
            .then(response => response.json())
            .then(discussion => dispatch({type: 'ADD_DISCUSSION', payload: discussion}))
    }
}