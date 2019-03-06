<template>
    <main id="users">
        <h1>Users</h1>
            <ul>
                <li v-for="user in users" :key="user.id" @click="$router.push(`/user/${user.id}`)"> {{user.name}}</li>
            </ul>
        <router-view />
    </main>
</template>

<script>
export default {
    name: 'users',
    computed: {
        users () {
           return this.$store.getters.users;
        }
    }
}
</script>

<style>
#users {
    background: whitesmoke;
}

</style>
