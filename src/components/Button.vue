<template>
    <button @click="toggleShowAddTask()" class="btn" :style="[showAddTask?{background:'red'}:{background:color}]">{{showAddTask?'Close':text}}</button>
</template>
<script>
export default {
    name:"button",
    props:{
        text:String,
        color: {
           type:String,
           default:"steelblue"
    },
    showAddTask:Boolean
    },
    methods: {
        toggleShowAddTask(){
            this.$emit('toggle-show-add-task')
        }
    },
}
</script>