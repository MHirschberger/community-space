const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const createSession = credentials => {
    return (dispatch) => {
        dispatch({type: 'LOADING'});
        return fetch('/api/login', {
            method: "POST",
            body: JSON.stringify({credentials}),
            headers
        })
            .then(response => response.json())
            .then(discussion => {
                dispatch({type: 'CREATE_SESSION', payload: discussion})
            })
    }
}