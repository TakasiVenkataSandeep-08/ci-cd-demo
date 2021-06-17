<template>
    <div class="filter">
        <button class="btn btn-blue" @click="setFilter('All')">All</button>
        <button class="btn btn-green"  @click="setFilter('Active')">Active</button>
        <button class="btn btn-teal"  @click="setFilter('Completed')">Completed</button>
    </div>
</template>
<script>
import Button from './Button.vue'
export default {
  components: { Button },
    name:'Filters',
    props:{
        filter:String
    },
    methods: {
        setFilter(filter){
            this.$emit('set-filter',filter)
        }
    },
}
</script>
<style scoped>
    .filter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 10px;
    }
</style>