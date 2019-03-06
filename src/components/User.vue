<template>
    <section class="user">
        <h2>I'm {{user.name}}</h2>
        <p>Email: <em>{{user.email}}</em></p>
        <h3>I've Posted this</h3>
        <ul>
            <li v-for="post in posts" :key="post.id" @click="$router.push(`/user/${user.id}/post/${post.id}`)">{{ post.title}}</li>
        </ul>
        <router-view />
    </section>
</template>

<script>
export default {
    name : "user",
    computed : {
        user () {
            return this.$store.getters.getUsersByUserId(
                this.$route.params.id
                );
        },
        posts () {
            return this.$store.getters.getPostsByUserId(
                this.$route.params.id
                );
        }
    }
}
</script>

<style>
.user {
    background: lightgrey;
}
</style>
