<template>
    <ol v-for="task in tasks" :key="task.id">
        <Task @toggle-remainder="$emit('toggle-remainder',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task" />
    </ol>
</template>
<script>
import Task from './Task'
export default {
    name:"Tasklist",
    props:{
        tasks:Array
    },
    components:{
        Task
    },
    emits:['delete-task','toggle-remainder']
}
</script>
<style scoped>
    ol {
        list-style: none;
    }
</style>