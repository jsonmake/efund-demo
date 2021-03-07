<template>
    <div>todoList</div>
    <todo-item/>
</template>

<script lang="ts">
import TodoItem from './Item.vue'
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'TodoList',
  components: {
   TodoItem
  },
});
</script>