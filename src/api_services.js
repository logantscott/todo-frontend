import Request from 'superagent';

export const getTodos = async(apiQuery) => {
    const url = 'https://vast-cove-97016.herokuapp.com/todos'
    // const query = apiQuery ? apiQuery : '';
    // console.log('query', query);
    let data = await Request.get(url);
    return data;
}