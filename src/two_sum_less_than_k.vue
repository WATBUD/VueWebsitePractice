<template>
<div>
  sdfffffffffffffffffffffffffffff
  <!-- <iframe id="embedIframe" style="margin-top: 3vh;" width="100%" height="100%" frameBorder="0" :src='src'>

  </iframe> -->


        <!-- <iframe id="myFrame" :src='src' :style="frameStyle" ref="iframe" ></iframe> -->

</div>
</template>

<script>
export default {
  name: "App",
  data() {
    // TODO: focus to design teacher pagination state
    return {
      src:"./two_sum_less_than_k/interviewer_louis.html",
      selectedTeacherId: 0,
    };
  },
  beforeMount() {

  },
  computed: {

  },
  methods: {
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}

#rightWindow {
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 360px;
  background-color: antiquewhite;
  margin: 0;
  padding: 22px;
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
