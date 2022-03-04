<template>
<section style="margin: 0px;
    display: flex;
    width: 100%;
    height: 100%;">
<!-- <router-link to="/">back to the homepage</router-link> -->
    <div id="NavArea" style="
            position: fixed;
            width: 100%;
            height: 29px;
            background: rgb(45, 45, 45);
            z-index: 9999;
            ">
        <div id="HomePage" class="NavItemStyle" style="
            width: 100px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(255, 255, 255);
            "  @click="routeDesignation()"> HomePage

        </div>
  </div>
<router-view style="margin-top: 29px;position: absolute;"></router-view>

</section>

</template>

<script>
import "./NavUI.css"
export default  {
  name: "App",
  data() {
    return {
        //source:"https://en.wikipedia.org/wiki/Main_Page",
        source:"./interviewer_louis.html",

    };
  },
  beforeMount() {

  },
  computed: {

  },
  methods: {
    routeDesignation() {
      //this.$router.push('/two_sum_less_than_k')
      this.$router.push({
        path: "/",
        params: {
         }
      });
    }
    ,
  },
};
</script>

<style scoped>
#app {
font-family: Arial, Helvetica, sans-serif;
margin: 0px;
display: flex;
width: 100%;
height: 100%;
}
body {
  margin: 0px;
  display: flex;
  width: 100%;
  height: 100%;
}
html {
height: 100%;
}

    

span {
  padding: 2px 4px;
  margin: 0 4px;
  background-color: lightgray;
  border-radius: 4px;
  color: white;
}


</style>
