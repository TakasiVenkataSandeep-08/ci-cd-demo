<template>
    <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
    
</template>
<script>
import LoginForm from '../components/LoginForm'
export default {
     components:{
         LoginForm
     }
}
</script>

<style scoped>
h1{
    text-align: center;
    margin-top: 20px;
}
</style>