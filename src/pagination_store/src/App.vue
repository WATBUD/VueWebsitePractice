<template>
<section id="main">
  <div
      v-show="this.onLoading"
      id="onLoadingMask"
      style="user-select: none;
    width: 100%;
    height: 100%;
    background: rgb(9 9 9 / 68%);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(./Image/Share/Loading.gif);"
    > 
  </div>
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
</section>
</template>

<script>
import * as apiClient from "./utils/api";
import * as helper from "./utils/helper";
import { anchorTeacherPrefix } from "./utils/constant";
import { createWebHashHistory } from 'vue-router';

export default {
  name: "App",
  data() {
    // TODO: focus to design teacher pagination state
    return {
      teachers: [],
      paginationNumber:1,
      selectedTeacherId: 0,
      onLoading:true,
    };
  },
  beforeMount() {
    apiClient.fetchTeachers({page:this.paginationNumber,size:3}).then((data) => {
        if(data.length>0){
        this.teachers = data;
        }
        this.onLoading=false;
    });
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
    onNext() {
      this.onLoading=true;
      var calculateValue=this.paginationNumber+1;
      apiClient.fetchTeachers({page:calculateValue,size:3}).then((data) => {
        if(data.length>0){
        this.teachers = data;
        this.paginationNumber=calculateValue;
        }
        else{
          createWebHashHistory
        }
        this.onLoading=false;
      });
    },
    onPrev() {
      this.onLoading=true;
      var calculateValue=this.paginationNumber-1;
      apiClient.fetchTeachers({page:calculateValue,size:3}).then((data) => {
        if(data.length>0){
        this.teachers = data;
        this.paginationNumber=calculateValue;
        }
        else{
          alert('page does not exist!!');
        }
        this.onLoading=false;
      });
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
