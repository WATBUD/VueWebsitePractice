<template>
<div id="stataDiv">
  <iframe :src='source' id="embedIframe" style="margin-top: 3vh;" width="100%" height="100%" frameBorder="0" ref="iframe">

  </iframe>
</div>
</template>

<script>
export default {
  name: "EmbedURL",
    props: {
    inputEmbedURL: {
      type: String,
      default: null
    }
  }
  ,
  data() {
    // TODO: focus to design teacher pagination state
    return {
      source:'/Native HTML/'+this.$route.params.inputEmbedURL+'.html',
      test_Source1:'sadadad',
    };
  },
  created(){
     //setTimeout(() => {
      console.log('%c this.$route.params', 'background: blue; color: red',this.$route.params);
    // }, 1000);

  }
  ,
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
