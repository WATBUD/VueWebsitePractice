<template>
  <div>
    <div
      v-show="this.pictureEditor.OnEditing"
      id="AreaForEditingImageFiles"
      style="
      width: 100vw;
      height: 100vh;
      background: rgb(9 9 9 / 68%);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
  "
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
          style="width: 500px;height: 500px;position: relative;    border: 1px solid rgb(255, 255, 255);    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;"
        >
          <canvas id="ImageFiles_canvas" style="position: absolute;" width="500" height="500"></canvas>
          <!-- <canvas id="CanvasMask" style="position: absolute;" width="500" height="500"></canvas> -->
          <div
            id="mask"
            @mousemove="captureFootageMousemove"
            @mousedown="captureFootageMousedown"
            @mouseup="captureFootageMouseup"
            style="width: 250px;
    height: 250px;
    position: absolute;
    border: 250px solid rgb(22 22 22 / 58%);
    border-radius: 50%;"
          ></div>
        </div>

        <input
          @input="changeImageSize($event)"
          min="1"
          max="2"
          step="0.1"
          v-model="imageSize"
          type="range"
        />
      </div>
      <button @click="saveClipCanvasImage">saveClipCanvasImage</button>
      <button @click="this.pictureEditor.OnEditing=false;">Cancel</button>
    </div>
    <!-- Choose a profile picture: -->
    <label for="avatar">Update Image:</label>
    <!-- <input
    :value="text"
    @input="event => text = event.target.value">-->
    <input
      @input="inputImage($event)"
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
        width="100"
        height="100"
        alt
      />
    </div>
    <!-- <canvas style="position: absolute;
      left: 1040px;
      top: 23px;
    " id="canvas2" width="500" height="500"></canvas>-->
  </div>
</template>

<script>
import { PictureEditor } from './PictureModule'
//var pictureEditor=new PictureEditor();
export default {
  name: "App",
  components: {},
  mounted() {},
  created() {},
  data: function() {
    return {
      ages: [],
      languages: [],
      step: 1,
      pictureEditor:new PictureEditor(),
      albums: [],
      imageSize: 1,
      startX:0,
      startY:0,
      selectAlbumsIndex:0,
    };
  },
  beforeMount() {
      //console.log("%c pictureEditor:", "color: red", this.pictureEditor);
  },
  computed: {
    currentStep({ step }) {
      if (step === 1) return "language";
      if (step === 2) return "age";
      return "final";
    }
  },
  methods: {
    changeImageSize(event) {
      console.log("%c changeImageSize:", "color: red", event);
      console.log("%c this.imageDataURL:", "color: blue", this.pictureEditor.imageDataURL);
      var canvas = document.getElementById("ImageFiles_canvas");
      var context = canvas.getContext("2d");
      //var dataURL = canvas.toDataURL();
      var _this = this;
      // if (_this.imageDataURL == undefined) {
      // _this.imageDataURL = canvas.toDataURL();
      // }
      var load_img = new Image();
      load_img.src = this.pictureEditor.imageDataURL;
      load_img.onload = function() {
        context.clearRect(0, 0, 500, 500);
        context.save();
        context.translate(250, 250);
        context.scale(_this.imageSize, _this.imageSize);
        context.translate(-250, -250);
        //console.log("%c dataURL:", "color: red", load_img);
        context.drawImage(load_img, 0, 0, 500, 500);
        console.log("%c load_img.onload:", "color: red", _this.imageSize);
        context.restore();
      };
    },
    inputImage(event) {
      console.log("%c inputImage:", "color: red", event);
      console.log("%c inputImage:", "color: red", event.target.files);
      console.log("%c this.pictureEditor.OnEditing", "color: red", this.pictureEditor.OnEditing);
      this.pictureEditor.OnEditing = true;
      //this.initialization(event.target.files[0]);
      var files_SRC = event.target.files[0];
      this.pictureEditor.albums.push(URL.createObjectURL(files_SRC));
      
      // let searchIndex = this.pictureEditor.albums.findIndex((x) => x == URL.createObjectURL(files_SRC));
      // if(searchIndex=-1){
      // this.pictureEditor.albums.push(URL.createObjectURL(files_SRC));
      // }
      // else{
      //   retrun;
      // }
      var _this = this;

      var img = new Image();
      //img.src = "https://dl.dropboxusercontent.com/s/1alt1303g9zpemd/UFBxY.png";
      img.src = URL.createObjectURL(files_SRC);
      img.onload = function() {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        // img.width=500;
        // img.height=500;
        console.log("%c inputImage:", "color: red", img);
        console.dir(img);
        var canvas = document.getElementById("ImageFiles_canvas");
        var context = canvas.getContext("2d");
        //context.drawImage(img, 0, 0, 500, 500);
        event.srcElement.value = "";

        // const downloadLink = document.createElement('a')
        // var exportURL=canvas.toDataURL();
        // var exportURL=URL.createObjectURL(files_SRC);
        // downloadLink.href = exportURL;
        // downloadLink.download = 'mycanvasimage.png'
        // downloadLink.click();
        // var ele = document.getElementById(event.srcElement.id);
        // console.log("%c ele:", "color: red", ele);
        // ele.reset();

        //context.clearRect(0, 0, 500, 500);
        //context.save();
        // context.translate(250, 250);
        // context.scale(2, 2);
        // context.translate(-250, -250);

        // context.beginPath();
        // context.arc(250, 250, 125, 0, 2 * Math.PI);
        // context.strokeStyle = "rgb(255 255 255 / 100%)";
        // context.lineWidth = 1;
        // context.stroke();
        // context.clip();
        context.drawImage(img, 0, 0, 500, 500);
        _this.pictureEditor.imageDataURL = canvas.toDataURL();

      };
    },
    saveClipCanvasImage() {
      var canvas = document.getElementById("ImageFiles_canvas");
      var context = canvas.getContext("2d");
      var load_img = new Image();
      load_img.src = this.pictureEditor.imageDataURL;
      var _this = this;
      load_img.onload = function() {
        context.clearRect(0, 0, 500, 500);
        context.save();
        context.translate(250, 250);
        context.scale(_this.imageSize, _this.imageSize);
        context.translate(-250, -250);
        context.beginPath();
        context.strokeStyle = "rgb(255 255 255 / 100%)";
        context.lineWidth = 2;
        context.arc(250, 250, 125 / _this.imageSize, 0, 2 * Math.PI);
        context.stroke();
        context.clip();
        context.drawImage(load_img, 0, 0, 500, 500);
        var canvas = document.getElementById("img_0");

        context.restore();
        _this.pictureEditor.imageDataURL = undefined;
        _this.imageSize = 1;
        //_this.pictureEditor.OnEditing=false;
      };
    },

    captureFootageMouseup(event) {

    },
    captureFootageMousemove(event) {

    },
    captureFootageMousedown(event) {
      if (!this.pictureEditor.isDragging) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      // 滑鼠位置
      var mouseX = parseInt(event.clientX - event.offsetX);
      var mouseY = parseInt(event.clientY - event.offsetY);
      // 滑鼠移動後和原本位置的距離
      var dx = mouseX - this.startX;
      var dy = mouseY - this.startY;
      // update the starting drag position (== the current mouse position)
      this.startX = mouseX;
      this.startY = mouseY;
    },


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