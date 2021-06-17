<template>
    <li @dblclick="$emit('toggle-remainder',task.id)" :class="[task.reminder?'reminder':'','task']">
        <div class="left">    
        <h3>{{task.text}}</h3>
        <p>{{task.day}}</p>    
        </div>
        <div class="right">
            <i @click="onDelete(task.id)" class="fas fa-times"></i>
        </div>
    </li>
</template>
<script>
export default {
    name:"Task",
    props:{
        task:Object
    },
    methods: {
        onDelete(id){
            this.$emit('delete-task',id)
        }
    },
}
</script>
<style scoped>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 12px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>