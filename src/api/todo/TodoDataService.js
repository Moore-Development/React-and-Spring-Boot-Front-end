import axios from 'axios';
import {API_URL, JPA_API_URL} from '../../Constants'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class TodoDataService {

    retrieveAllTodos(name) {
        return axios.get(`${JPA_API_URL}/users/${name}/todos/`);
    }

    retrieveTodo(name, id) {
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }
}
export default new TodoDataService()