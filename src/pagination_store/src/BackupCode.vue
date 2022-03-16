<template>
<div id="main">
      <li v-for="teacher in teachers" :key="teacher.id"
          v-show="teacher.id==paginationNumber*3 |teacher.id==(paginationNumber*3-1)|teacher.id==(paginationNumber*3-2)">
        {{ teacher.id }} | {{ teacher.name }}
        <a
          :href="`#${anchorTeacherPrefix}${teacher.id}`"
          @click="seeMore(teacher.id)"
        >
        see more
        </a>
      </li>
      <div
      v-show="this.pictureEditor.onEditing"
      id="AreaForEditingImageFiles"
      style="user-select: none;
      width: 100vw;
      height: 100vh;
      background: rgb(9 9 9 / 68%);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;">

      
      </div>


</div>
</template>



    onNext() {
      var calculateValue=this.paginationNumber+1;
      if(calculateValue*3<this.teachers.length){
      this.paginationNumber=calculateValue;
      }
    },
    onPrev() {
      var calculateValue=this.paginationNumber-1;
      if(calculateValue>=1){
      this.paginationNumber=calculateValue;
      }
    },
