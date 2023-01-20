<template>

  <div id="app">

    <button @click="getForEach">forEach方法</button>

  </div>

</template>



<script>

export default {

  name: 'App',

  data(){
    return {



    }

  },

  mounted(){

  },


  methods:{
    getForEach(){
    //var null=null,

      const numbers = ["pos1", "pos2", "pos3", "pos4", "pos5"];
      numbers.forEach((item,index,data) => {

        console.log(item,index,data)

      })
      let res = numbers.forEach((item,index,data) => {

        console.log(item,index,data)
      })
      console.log('返回值',res); // undefined
      let list = [

        { id:1,name:'AAAAAAAAAAAAA' },

        { id:2,name:'BBBBBBBBBBBBBBBBBB' },

      ]

      list.forEach((item,index,data) => {

        if(item.id == 1){

          item.name = 'CCCCCCCCCCCCCCCCCC'  //可以更改原數組
          item = { id:1,name:'sadadadsad' }  //不可以更改原數組
        }

      })

      console.log('是否更改原數組',list);

    }

  }
  ,created(){
this.getForEach();

  }
}

</script>



<style scoped>



</style> 