<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label for="task">Task</label>
            <input v-model="text" type="text" name="text" placeholder="Add Task">
        </div>
        <div class="form-control">
            <label for="task">Day And Time</label>
            <input v-model="day" type="text" name="day" placeholder="Add Day and time">
        </div>
        <div class="form-control form-control-check">
            <label for="task">Set Completed</label>
            <input v-model="reminder" type="checkbox" name="reminder">
        </div>
        <input type="submit" value="Save Task" class="btn btn-block">
    </form>
</template>
<script>
export default {
    name:'AddTask',
    data(){
        return {
            text:'',
            day:'',
            reminder:false
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault();
            if(!this.text || !this.day){
                alert("Task data fields cannot be empty")
                return
            }
            const newTask = {
                text:this.text,
                day:this.day,
                reminder:this.reminder
            }
            this.text=''
            this.day=''
            this.reminder=false
            this.$emit('add-new-task',newTask)
        }
    }
}
</script>
