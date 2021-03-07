<template>
    <div>{{argfromparent}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface IchildInfo{
    message:string,
    count:number
}
interface IchildArrayInfo{
    InfoArray:IchildInfo[]
}

export default defineComponent({
  
  props: {
    msg: String,
    argfromparent:{
        type:String
    }
  },
  setup(props){

      console.log('从HelloWorld(父)组件传递过来的值' + props.argfromparent)
  
  }
});
</script>