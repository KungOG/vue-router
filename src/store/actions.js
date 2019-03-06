import axios from "axios";

export default {

    async getUsers (ctx) {
        ctx.commit('setUsers', await axios.get('https://jsonplaceholder.typicode.com/users'));
        ctx.dispatch('getPosts');
    },
    async getPosts (ctx) {
        ctx.commit('setPosts', await axios.get('https://jsonplaceholder.typicode.com/posts'));
    }
}