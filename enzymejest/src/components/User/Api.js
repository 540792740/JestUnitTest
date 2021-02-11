const API_URL = (id)=> `https://jsonplaceholder.typicode.com/todos/${id}`
export const fetchUser = (id) => fetch(API_URL(id)).then(response => response.json())
