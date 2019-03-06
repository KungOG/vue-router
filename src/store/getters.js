export default {
    users (state) {
        return state.users;
    },
    getUsersByUserId (state) {
        return (id) => {
            return state.users.filter(
                user => user.id == id
            )[0]
        }
    },
    getPostsByUserId (state) {
        return (id) => {
            return state.posts.filter(
                post => post.userId == id
            )
        }
    },
    getPostById (state) {
        return (id) => {
            return state.posts.filter(
                post => post.id == id
            )[0]
        }
    }
}