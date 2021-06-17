<template>
    <form @submit="onLogin" class="add-form">
        <div class="form-control">
            <label for="task">Email</label>
            <input v-model="email" type="text" name="email" placeholder="Enter email address">
        </div>
        <div class="form-control">
            <label for="task">Password</label>
            <input v-model="password" type="password" name="day" placeholder="Enter Password">
        </div>
        <input type="submit" :value="loading?'Logging in...':'Login'" class="btn btn-block">
    </form>
</template>

<script>
import {AUTH_REQUEST} from '../store/actions/auth.js'
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        onLogin(e){
            e.preventDefault();
            const authData = {
                email:this.email,
                password:this.password
            }
            this.$store.dispatch(AUTH_REQUEST,authData)
            this.email=''
            this.password=''
        }
    },
    computed:{
        loading(){
            let status = this.$store.getters.authStatus
            console.log("status =>",status)
            if(status==="loading"){
                return true
            }
            else{
                return false
            }
        }
    }
}
</script>