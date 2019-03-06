export default {
    setUsers (state, users) {
        state.users = users.data;
    },
    setPosts (state, posts) {
        state.posts = posts.data;
    }
}