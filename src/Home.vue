<template>
<section>
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
<router-view style="    margin-top: 45px;
    position: absolute;"></router-view>
</section>
</template>

<script>
import "./NavUI.css"
export default  {
  name: "App",
  data() {
    // TODO: focus to design teacher pagination state
    return {
      teachers: [],
      selectedTeacherId: 0,
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
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}


span {
  padding: 2px 4px;
  margin: 0 4px;
  background-color: lightgray;
  border-radius: 4px;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
