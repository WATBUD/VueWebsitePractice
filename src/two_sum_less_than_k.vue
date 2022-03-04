<template>
<div id="stataDiv">
  <iframe :src='source' id="embedIframe" style="margin-top: 3vh;" width="100%" height="100%" frameBorder="0" ref="iframe">

  </iframe>
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    // TODO: focus to design teacher pagination state
    return {
        source:"./interviewer_louis.html",
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

<style scoped>

#stataDiv {
margin: 0px;
display: flex;
width: 100%;
height: 100%;
}

</style>
