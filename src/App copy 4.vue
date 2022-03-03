<template>
<div class="container">
<div id="Area1" class="GroupArea" >

  <div id="Keyboard Sample Demo" class="list-group">
    <input id="toggle" class="btn-toggle" type="checkbox" checked>
    <label class="toggleBtn" for="toggle">Keyboard Sample Demo</label>
    <ul>
      <li routerLink="/KeyBoard_RGB" routerLinkActive="active">KeyBoard_RGB</li>
      <li routerLink="/numpad-keyboard" routerLinkActive="active">numpad-keyboard</li>
      <li routerLink="/perixx" routerLinkActive="active">perixx</li>

    </ul>
  </div>

</div>

</div>
</template>

<script>
import * as apiClient from "./utils/api";
import * as helper from "./utils/helper";
import { anchorTeacherPrefix } from "./utils/constant";

export default {
  name: "App",
  data() {
    // TODO: focus to design teacher pagination state
    return {
      teachers: [],
      selectedTeacherId: 0,
    };
  },
  beforeMount() {
    this.fetchTeachers();
    this.selectedTeacherId = helper.getTeacherIdAnchor();
  },
  computed: {
    anchorTeacherPrefix() {
      return anchorTeacherPrefix;
    },
    seeMoreAboutThisTeacher() {
      return this.teachers.find(
        (teacher) => teacher.id === this.selectedTeacherId
      );
    },
  },
  methods: {
    fetchTeachers() {
      // TODO: fetch teacher pagination data
      apiClient.fetchTeachers().then((teachers) => {
        this.teachers = teachers;
      });
    },
    onNext() {
      // TODO: go to next page
    },
    onPrev() {
      // TODO: go to prev page
    },
    seeMore(id) {
      this.selectedTeacherId = id;
    },
  },
};
</script>

<style>
#app {
  padding: 0 24px;
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
