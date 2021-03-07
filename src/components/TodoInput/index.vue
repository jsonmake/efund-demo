<template>
    <div>
        <input type="text"
        v-model="todoValue"
        @keyup="setTodoValue"/>
    </div>
</template>

<script lang="ts">
/**
 * 单个数据 ref
 * 多个数据 reactive
 */
import { defineComponent,ref} from 'vue';
import {IUseTodo,useTodo} from '../../hook';

export default defineComponent({
  name: 'TodoInput',
  setup(){
      const {setTodo}:IUseTodo = useTodo();
      //ref对象要使用value才能修改
      const todoValue = ref<string>('');

      const setTodoValue = (e: KeyboardEvent):void =>{
          if(e.keyCode === 13 && todoValue.value.trim().length){
              //设置数据
              setTodo(todoValue.value)
              //alert(todoValue.value)
              todoValue.value = '';
          }
      }

      return{
          todoValue,
          setTodoValue
      }
  },
  components: {
    
  },
});
</script>