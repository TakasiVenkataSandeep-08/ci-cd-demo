<template>
 <div>
        <h1>Signup</h1>
    <SignupForm />
 </div>
</template>
<script>
import SignupForm from '../components/SignupForm'
export default {
     components:{
         SignupForm
     }
}
</script>
<style scoped>
h1{
    text-align: center;
    margin-top: 20px;
}
</style>