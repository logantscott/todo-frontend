import Request from 'superagent';

export const getTodos = async() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = 'https://vast-cove-97016.herokuapp.com/api/todos';
    const token = user ? user.token : '';
    let data = await Request.get(url)
        .set('Authorization', token);
    return data;
}

export const addTodo = async(apiQuery) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = 'https://vast-cove-97016.herokuapp.com/api/todos';
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    const token = user ? user.token : '';
    let data = await Request.post(url, apiQuery)
        .set('Authorization', user.token);
    return data;
}

export const updateTodo = async(apiQuery) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = 'https://vast-cove-97016.herokuapp.com/api/todos';
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    const token = user ? user.token : '';
    let data = await Request.put(url, apiQuery)
        .set('Authorization', user.token);
    return data;
}

export const deleteTodo = async(apiQuery) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = 'https://vast-cove-97016.herokuapp.com/api/todos';
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    const token = user ? user.token : '';
    let data = await Request.delete(url, apiQuery)
        .set('Authorization', user.token);
    return data;
}