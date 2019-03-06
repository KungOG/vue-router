<template>
    <main class="post">
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
    </main>
</template>

<script>
export default {
    name : 'post',
    computed : {
        post () {
            return this.$store.getters.getPostById(
                this.$route.params.postid
            );
        }
    }
}
</script>

<style>
.post {
    background: grey;
    padding: 1rem;
}
</style>
