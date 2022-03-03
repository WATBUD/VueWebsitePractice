<template>
<div >
<router-link to="/two_sum_less_than_k">Go to two_sum_less_than_k</router-link><br/>
<router-link to="/component_refactoring">Go to component_refactoring</router-link><br/>
<!-- <div id="Area1" class="GroupArea" >

  <div id="Keyboard Sample Demo" class="list-group">
    <input id="toggle" class="btn-toggle" type="checkbox" checked>
    <label class="toggleBtn" for="toggle">Keyboard Sample Demo</label>
    <ul>
      <li routerLink="/KeyBoard_RGB" routerLinkActive="active">KeyBoard_RGB</li>
      <li routerLink="/numpad-keyboard" routerLinkActive="active">numpad-keyboard</li>
      <li routerLink="/perixx" routerLinkActive="active">perixx</li>

    </ul>
  </div>

</div> -->

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
