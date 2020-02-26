import Request from 'superagent';

export const getTodos = async() => {
    const url = 'https://vast-cove-97016.herokuapp.com/todos'
    let data = await Request.get(url);
    return data;
}

export const addTodo = async(apiQuery) => {
    const url = 'https://vast-cove-97016.herokuapp.com/todos'
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    let data = await Request.post(url, apiQuery);
    return data;
}

export const updateTodo = async(apiQuery) => {
    const url = 'https://vast-cove-97016.herokuapp.com/todos'
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    let data = await Request.put(url, apiQuery);
    return data;
}

export const deleteTodo = async(apiQuery) => {
    const url = 'https://vast-cove-97016.herokuapp.com/todos'
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    let data = await Request.delete(url, apiQuery);
    return data;
}