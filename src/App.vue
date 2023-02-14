<template>
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click="change">重置</button>
    <button @click="patch">批量修改</button>
  </div>
</template>

<script setup lang="ts" >
import { ref,computed } from 'vue';
import {useUsersStore} from "@/store/user"
import {mapStores, storeToRefs} from 'pinia'
const store = useUsersStore()
const { name , age, } = storeToRefs(store)
// setTimeout(() => {
//   store.name = '李四'
// }, 2000);

const change = ()=>{
  store.$reset()
}
// console.log(store.getAddAge);

const patch = async () => {
  // store.$patch((state)=>{
  //   state.items.push({name:"李四",age:99})
  //   // state.hasChanged  = true
  //   state.age = 200
  //   console.log(state.items);
    
  // })
 let res:number = await store.init()
  store.age = res + store.age
 console.log('123');
 
//  console.log(store.age);
}
// console.log(name,age);

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
