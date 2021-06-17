<template>
    <hr/>
    <footer>
        <p>Vue demo app</p>
        <router-link to="/about"> About us</router-link>
    </footer>
</template>
<script>
export default {
    name:"Footer"
}
</script>
<style scoped>
    a{
        color:#333
    }
    footer{
        margin-top:30px;
        text-align: center;
    }
    p{
        color: slateblue
    }
</style>