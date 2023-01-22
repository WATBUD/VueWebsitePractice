
<template>
<div>
<!-- <div@click="routerGo()">two_sum_less_than_k</div><br/> -->

<div id="Area1" class="GroupArea" >
  <div id="Basic exercises" class="list-group">
    <input id="toggleTools" class="btn-toggle" type="checkbox" checked>
    <label class="toggleBtn" for="toggleTools">Basic exercises</label>
    <ul>
    <li><router-link to="/ForEachAndMap">ForEachAndMap</router-link></li>
    <li><router-link to="/HelloWorld">HelloWorld</router-link></li>
    <li><router-link :to="{ name: 'EmbedURL', params: { inputEmbedURL: '[CSS] Specificity' }}">[CSS] Specificity</router-link></li>
    <li><router-link :to="{ name: 'EmbedURL', params: { inputEmbedURL: '[CSS] Box Model' }}">[CSS] Box Model</router-link></li>
    <li><router-link :to="{ name: 'EmbedURL', params: { inputEmbedURL: '[CSS] Transition' }}">[CSS] Transition</router-link></li>

    </ul>
  </div>


  <div id="Practice Example" class="list-group">
    <input id="toggle" class="btn-toggle" type="checkbox" checked>
    <label class="toggleBtn" for="toggle">Practice Example</label>
    <ul>
    <li><router-link :to="{ name: 'EmbedURL', params: { inputEmbedURL: 'two_sum_less_than_k' }}">two_sum_less_than_k</router-link></li>
    <li><router-link to="/component_refactoring">component_refactoring</router-link></li>
    <li><router-link to="/pagination_store">pagination_store</router-link></li>
    </ul>
  </div>
  <div id="Homemade Tools" class="list-group">
    <input id="toggleTools" class="btn-toggle" type="checkbox" checked>
    <label class="toggleBtn" for="toggleTools">Homemade Tools</label>
    <ul>
    <li><router-link to="/PictureEditor">PictureEditor</router-link></li>
    <li><router-link to="/PictureEditor_Div">PictureEditor_Div</router-link></li>
    <li><router-link to="/PictureEditor_DragCircle">PictureEditor_DragCircle</router-link></li>
    </ul>
  </div>
</div>

</div>
</template>

<script>
import "./DemoListUI.css"
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
    // routerGo(){
    //   //this.$router.go('two_sum_less_than_k');
    //   this.$router.push('/two_sum_less_than_k')
    //   //this.$router.href('/two_sum_less_than_k');
    // }
  },
};
</script>

<style scoped>

</style>
