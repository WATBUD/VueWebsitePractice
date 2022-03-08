<template>
  <div>
    <div
      v-show="OnEditing"
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
      <button @click="this.OnEditing=false;">Cancel</button>

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
        v-for="album in albums"
        :key="album.id"
        :src="album"
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
      albums: [],
      imageSize: 0,
      OnEditing: false,
      imageDataURL: undefined
    };
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
      console.log("%c changeImageSize:", "color: red", event, this.imageSize);
      var canvas = document.getElementById("ImageFiles_canvas");
      var context = canvas.getContext("2d");
      //var dataURL = canvas.toDataURL();

      // var src_img = new Image();
      // src_img.src = this.imageDataURL;
      if (this.imageDataURL == undefined) {
        this.imageDataURL = canvas.toDataURL();
      }

      var load_img = new Image();
      load_img.src = this.imageDataURL;
      var _this = this;
      load_img.onload = function() {
        context.clearRect(0, 0, 500, 500);
        context.save();
        context.translate(250, 250);
        context.scale(_this.imageSize, _this.imageSize);
        context.translate(-250, -250);
        //console.log("%c dataURL:", "color: red", load_img);
        context.drawImage(load_img, 0, 0, 500, 500);





        //context.beginPath();
        //context.scale(this.imageSize, 1);
        console.log("%c load_img.onload:", "color: red", _this.imageSize);
        context.restore();
        // context.beginPath();
        // context.strokeStyle = "rgb(255 255 255 / 50%)";
        // context.lineWidth = 1;
        // context.arc(250, 250, 125, 0, 2 * Math.PI);
        // context.stroke();
        // context.clip();
        //context.drawImage(load_img, 0, 0, 500, 500);
        //context.translate(500 * _this, 500 * _this);

        //context.drawImage(load_img, 0, 0, (500 * _this), 500 * _this);

        //context.drawImage(load_img, 0, 0, 50,50);
        // oImgData = oCtx.getImageData(0, 0, nWidth, nHeight);
        // oCtx.putImageData(oImgData, 0, 0);
      };
    },
    inputImage(event) {
      console.log("%c inputImage:", "color: red", event);
      console.log("%c inputImage:", "color: red", event.target.files);
      this.OnEditing = true;
      //this.initialization(event.target.files[0]);
      var files_SRC = event.target.files[0];
      this.albums.push(URL.createObjectURL(files_SRC));
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
        context.drawImage(img, 0, 0, 500, 500);
        //context.scale(1, 1);
        //context.drawImage(img, 0, 0, 500, 500);
        // context.beginPath();
        // context.strokeStyle = "rgb(255 255 255 / 50%)";
        // context.lineWidth = 1;
        // context.arc(250, 250, 125, 0, 2 * Math.PI);
        // context.stroke();
        // context.clip();
        // context.drawImage(img, 0, 0, 500, 500);


        // canvas = document.getElementById("CanvasMask");
        // context = canvas.getContext("2d");
        // context.beginPath();
        // context.strokeStyle = "rgb(22 22 22 / 50%)";
        // context.arc(250, 250, 125, 0, 2 * Math.PI);
        // context.lineWidth = 250;
        // context.clip();
        // context.stroke();
        //context.drawImage(img, 0, 0, 500, 500);





        // context.fillStyle = "rgb(22 22 22 / 50%)";
        // context.fillRect(0, 0, canvas.width, canvas.height);
        // context.globalCompositeOperation='source-over';
        //context.closePath();
        // context.fillStyle = "rgb(255 255 255 / 0%)";
        // context.fill();
        //context.fillStyle = 'red';
        //context.fillRect(10, 10, 8, 20);
      };
    },
    saveClipCanvasImage() {
    console.log("%c saveClipCanvasImage:", "color: blue");

    var canvas = document.getElementById("ImageFiles_canvas");
    var context = canvas.getContext("2d");
    var load_img = new Image();
      load_img.src = this.imageDataURL;
      var _this = this;
      load_img.onload = function() {
        context.beginPath();
        context.strokeStyle = "rgb(255 255 255 / 50%)";
        context.lineWidth = 0;
        context.arc(250, 250, 125, 0, 2 * Math.PI);
        context.stroke();
        context.clip();
        context.drawImage(load_img, 0, 0, 500, 500);
    }
    }
    ,


    canvasLoadImage(imgElement) {
      // console.log('%c canvasLoadImage:', 'color: red',imgElement);
      // console.log('%c canvasLoadImage:', 'color: red',this.albums);
      // var img = new Image;
      // //img.src = "https://dl.dropboxusercontent.com/s/1alt1303g9zpemd/UFBxY.png";
      // img.src =imgElement.srcElement.src;
      // img.onload = function(){
      // var canvas = document.getElementById('canvas');
      // var context = canvas.getContext('2d');
      // context.drawImage(img, 0, 0,500,500);
      // this.OnEditing=true;
      // canvas = document.getElementById('canvas2');
      // context = canvas.getContext('2d');
      // context.beginPath();
      // context.strokeStyle = 'red';
      // context.arc(250,250,40,0,2*Math.PI);
      // context.stroke();
      // context.clip();
      // context.drawImage(img, 0, 0,500,500);
      //}
    },

    reloadPage() {},
    initialization(src) {
      // context.beginPath();
      // context.lineWidth = 10;
      // context.strokeStyle = 'red';
      // context.arc(75,75,40,15,0.25*Math.PI);
      // context.stroke();
      //img.onload = draw;
    }
  }
};
</script>

<style scoped>
#albums {
  display: flex;
  width: 500px;
  height: 500px;
  border: 1px solid rgb(255 0 0);
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