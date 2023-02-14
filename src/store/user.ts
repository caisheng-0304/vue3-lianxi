import { defineStore } from 'pinia'
export const useUsersStore = defineStore('users', {
    state: () => {
        return{
            name: '测试',
            age: 100,
            items:[]
        }
    },
    getters:{
        getAddAge:(state)=> state.age + 100
    },
    actions:{
        init(){
            return new Promise((resolve,reject)=>{
                console.log('++');
                resolve(1)
            })
        }
    }
})
export const useCount = defineStore('count',{
    state:()=>({count:0}),
    actions:{
        countAdd(){
            this.count++
        }
    }
})