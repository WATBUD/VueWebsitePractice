<template>
  <section>
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
      justify-content: center;"
      @mousemove="pictureEditor.captureFootageMousemove"
    >
      <div
        id="ImageFiles"
        style="background: rgb(30 30 30);
          width: 50%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: column;
          "
      >
        <div
          id="CenterArea"
          style="width: 500px;height: 500px;position: relative;    
          border: 1px solid rgb(255, 255, 255);    
          display: flex;
          overflow: hidden;"
          @mousedown="pictureEditor.captureFootageMousedown"
        >
          <canvas id="ImageFiles_canvas" style="position: absolute;" width="500" height="500"></canvas>

          <img
            id="Element_Image"
            style="pointer-events: none;    visibility: hidden;"
            @click="canvasLoadImage($event)"
            width="500"
            height="500"
            alt=""
          />
          <div
            id="mask"
            style="width: 250px;height: 250px;
            position: absolute;
            border: 1000px solid rgb(22 22 22 / 58%);
    margin-left: -875px;
    margin-top: -875px;
            border-radius: 50%;"
          ></div>
        </div>

        <input
          @input="pictureEditor.changeImageSize($event)"
          min="1"
          max="2"
          step="0.1"
          v-model="pictureEditor.imageSize"
          type="range"
        />
      </div>
      <button @click="pictureEditor.saveClipCanvasImage">saveClipCanvasImage</button>
      <button @click="pictureEditor.onEditing=false;pictureEditor.imageSize = 1;">Cancel</button>
    </div>
    <!-- Choose a profile picture: -->
    <label for="avatar">Update Image:</label>
    <!-- <input
    :value="text"
    @input="event => text = event.target.value">-->
    <input
      @input="pictureEditor.inputImage($event)"
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png, image/jpeg"
    />

    <div id="albums">
      <img
        @click="canvasLoadImage($event)"
        v-for="(item,index) in pictureEditor.albums"
        :key="item.id"
        :src="item"
        :index="'img_'+index"
        :id="'img_'+index"
        width="100"
        height="100"
        alt
      />
    </div>

  </section>
</template>

<script>
import { PictureEditor } from "./PictureModule_DragCircle";
//var pictureEditor=new PictureEditor();
export default {
  name: "App",
  components: {},
  mounted() {},
  created() {},
  data: function() {
    return {
      pictureEditor: new PictureEditor(),
      albums: [],
      startX: 0,
      startY: 0
    };
  },
  beforeMount() {
    //console.log("%c pictureEditor:", "color: red", this.pictureEditor);
  },
  computed: {},
  methods: {
    canvasLoadImage(imgElement) {
      // console.log('%c canvasLoadImage:', 'color: red',imgElement);
      // console.log('%c canvasLoadImage:', 'color: red',this.pictureEditor.albums);
      // //img.src = "https://dl.dropboxusercontent.com/s/1alt1303g9zpemd/UFBxY.png";
    },

    reloadPage() {},
    initialization(src) {}
  }
};
</script>

<style scoped>
#albums {
  display: flex;
  width: 500px;
  height: 500px;
  border: 1px solid rgb(255 0 0);
  flex-wrap: wrap;
  align-content: flex-start;
}

.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 5px auto;
  width: 500px;
  border: 1px solid;
  padding: 10px;
}

.btn-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 30px 5px 10px 5px;
}

.btn-wrapper > button {
  width: 50px;
  height: 30px;
}

label {
  cursor: pointer;
}
</style>