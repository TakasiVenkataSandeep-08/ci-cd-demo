<template>
    <form @submit="onLogin" class="add-form">
        <div class="form-control">
            <label for="task">User Name</label>
            <input v-model="name" type="text" name="name" placeholder="Enter User name">
        </div>
        <div class="form-control">
            <label for="task">Email</label>
            <input v-model="email" type="text" name="email" placeholder="Enter email address">
        </div>
        <div class="form-control">
            <label for="task">Password</label>
            <input v-model="password" type="password" name="day" placeholder="Enter Password">
        </div>
        <input type="submit" value="Login" class="btn btn-block">
    </form>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        onLogin(e){
            e.preventDefault();
            const authData = {
                name:this.name,
                email:this.email,
                password:this.password
            }
            console.log(authData)
        }
    }
}
</script>