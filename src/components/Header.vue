<template>
    <header class="header">
        <h3>{{title}}</h3>
        <div>
        <small v-show="loggedinUser">Welcome {{loggedinUser.name}}</small>
        <router-link v-show="!isAuthenticated" class="btn" to="/login">Login</router-link>
        <router-link v-show="!isAuthenticated" class="btn" to="/signup">Signup</router-link>
        <router-link v-show="isAuthenticated" class="btn" to="/">Home</router-link>
        <Button v-show="isHomepage" :showAddTask="showAddTask"  @toggle-show-add-task="$emit('toggle-show-add-task')"   text="Add Task" color="green"/>
        </div>
    </header>
    <hr/>
</template>
<script>
import Button from './Button'
export default {
    name:'Header',
    props:{
        title:{
            type:String,
            default:"Task Tracker"
        },
        showAddTask:Boolean
    },
    computed:{
        isHomepage(){
            if(this.$route.path==='/'){
                return true
            }
            else{
                return false
            }
        },
        isAuthenticated(){
            return this.$store.getters.isAuthenticated
        },
        loggedinUser(){
            console.log("profile",this.$store.getters.getProfile)
            return this.$store.getters.getProfile
        }
    },
    components:{
        Button
    },
    emits:['toggle-show-add-task']
  }
</script>