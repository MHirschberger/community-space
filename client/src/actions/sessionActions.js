const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const createSession = (email, password) => {
    return (dispatch) => {
        dispatch({type: 'LOADING PAGE'});
        return fetch('/api/login', {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers
        })
            .then(response => response.json())
            .then(user => {
                dispatch({type: 'CREATE_SESSION', payload: user})
            })
    }
}