<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <child-compoent :argfromparent = "tochildmessage.tochildmessage"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import childCompoent from './childCompoent.vue'
export default defineComponent({
  components:{
    childCompoent
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(){
    const tochildmessage = reactive({
      tochildmessage : '传递给子组件'
    })
    console.log(tochildmessage)
    return{
      tochildmessage
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
