<template>
<div>
  <!-- Choose a profile picture: -->
<label for="avatar">Update Image:</label>

<!-- <input
  :value="text"
  @input="event => text = event.target.value"> -->
<input  @input="inputImage($event)" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">


<div id="albums" >

<img  v-for="album in albums" :key="album.id" :src="album" width="100" height="100" alt="">

</div>






<canvas id="canvas" width="500" height="500"></canvas>

</div>



</template>
   
<script>
export default {
  name: "App",
  components: {
  },
  mounted() {
  },
  created(){
  },
  data: function () {
    return {
      ages: [],
      languages: [],
      step: 1,
      albums: [],
    };
  },
  computed: {
    currentStep({ step }) {
      if (step === 1) return "language";
      if (step === 2) return "age";
      return "final";
    },
  },
  methods: {
    inputImage(event){
        console.log('%c inputImage:', 'color: red',event);
        console.log('%c inputImage:', 'color: red',event.target.files);
    this.initialization(event.target.files[0]);
    },
    
    reloadPage(){

    },
    initialization(src){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var img = new Image;
    img.src = "https://dl.dropboxusercontent.com/s/1alt1303g9zpemd/UFBxY.png";
    //img.src = src;
    img.src = URL.createObjectURL(src);
    this.albums.push(URL.createObjectURL(src));
    console.log('%c initialization:', 'color: red',canvas,src,this.albums);

    img.onload = function(){
    //context.drawImage(img, 0, 0);
    }
    // context.beginPath();
    // context.lineWidth = 10;
    // context.strokeStyle = 'red';
    // context.arc(75,75,40,15,0.25*Math.PI);
    // context.stroke();
    //img.onload = draw;
    }
  },
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