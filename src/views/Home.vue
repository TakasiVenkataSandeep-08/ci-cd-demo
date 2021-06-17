<template>
  <div v-show="showAddTask">
    <AddTask   @add-new-task="addNewTask" />
  </div>
  <Tasklist @toggle-remainder="toggleRemainder" @delete-task="deleteTask" :tasks="filteredTasks" />
  <Filters @set-filter="setFilter" />
</template>
<script>
import Tasklist from '../components/TaskList'
import AddTask from '../components/AddTask'
import Filters from '../components/Filters'
export default {
    components:{
        Tasklist,
    AddTask,
    Filters,
    },
    props:{
        showAddTask:Boolean
    },
    data(){
        return{
            tasks:[],
            filter:'All',
        }
    },
    computed:{
      filteredTasks(){
        let filteredTasks = []
        if(this.filter==="All"){
          filteredTasks = this.tasks
      }
      else if(this.filter==="Active"){
        filteredTasks = this.tasks.filter(task=>!task.reminder)
      }
      else{
        filteredTasks = this.tasks.filter(task=>task.reminder)
      }
      return filteredTasks
      }
  },
  methods: {
    async deleteTask(id){
      if(confirm('Task will be deleted!')){
      await fetch(`api/tasks/${id}`,{
        method:'DELETE'
      })
      this.tasks = this.tasks.filter(task=>task.id!==id)
      }
    },
    async addNewTask(newTask){
      console.log(newTask)
      const res = await fetch("api/tasks",{
        method:'POST',
        headers: {
              'Content-Type': 'application/json'
        },
        body:JSON.stringify(newTask)
      })
      const result = await res.json()
      
      this.tasks = [...this.tasks,result]
    },
    async toggleRemainder(id){
      const updatedTaskIndex = this.tasks.findIndex(task=>task.id===id)
      const reminder = this.tasks[updatedTaskIndex].reminder
        await fetch(`api/tasks/${id}`,{
          method:'PATCH',
          headers: {
              'Content-Type': 'application/json'
        },
          body:JSON.stringify({reminder:!reminder})
        })
        
        this.tasks[updatedTaskIndex].reminder = !this.tasks[updatedTaskIndex].reminder
    },
    async fetchTasks(){
      const res = await fetch("api/tasks")
      const data = await res.json()
      return data
    },
    setFilter(filter){
      this.filter = filter
      
    }
  },
  async created(){
    this.tasks = await this.fetchTasks()
  },
}
</script>