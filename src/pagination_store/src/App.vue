<template>
<div id="main">
  <div class="container">
    <h1>Teachers</h1>
    <ul>
      <li v-for="teacher in teachers" :key="teacher.id">
        {{ teacher.id }} | {{ teacher.name }}
        <a
          :href="`#${anchorTeacherPrefix}${teacher.id}`"
          @click="seeMore(teacher.id)"
        >
        see more
        </a>
      </li>
    </ul>
    <br />
    <button @click="onPrev">Previous Page</button>
    <button @click="onNext">Next Page</button>

    <div v-if="seeMoreAboutThisTeacher" id="rightWindow">
      <h3>Teacher's information</h3>
      <hr />
      <div>ID: {{ seeMoreAboutThisTeacher.id }}</div>
      <div>Name: {{ seeMoreAboutThisTeacher.name }}</div>
      <br /><br />
      <h3>Speaking Language</h3>
      <hr />
      <div style="display: flex;">
        <span
          v-for="language in seeMoreAboutThisTeacher.speakLanguages"
          :key="language"
        >
          {{ language }}
        </span>
      </div>
      <br /><br />
      <a href="#" @click="seeMore(0)">(close this tab)</a>
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
      paginationNumber:1,
      selectedTeacherId: 0,
    };
  },
  beforeMount() {
    this.fetchTeachers(1);
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
    fetchTeachers(_page=1) {
      // TODO: fetch teacher pagination data
      apiClient.fetchTeachers({page:_page,size:3}).then((teachers) => {
        this.teachers = teachers;
      });
    },
    onNext() {
      var calculateValue=this.paginationNumber+1;
      if(calculateValue*3<=15){
      this.paginationNumber=calculateValue;
      this.fetchTeachers(this.paginationNumber);
      }
    },
    onPrev() {
      var calculateValue=this.paginationNumber-1;
      if(calculateValue>=1){
      this.paginationNumber=calculateValue;
      this.fetchTeachers(this.paginationNumber);
      }
    },
    seeMore(id) {
      this.selectedTeacherId = id;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 5px auto;
  width: 500px;
  border: 1px solid;
  padding: 10px;
  width: 100vw;
    height: 100vh;
}



#rightWindow {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 360px;
    background-color: rgb(250 235 215);
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
