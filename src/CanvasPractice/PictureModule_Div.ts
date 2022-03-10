
export class PictureEditor {
    pictureEditor = 0;
    albums: any = [];
    imageSize = 1;
    onEditing = false;
    imageDataURL: any = undefined;
    isDragging = false;
    startX = 0;
    startY = 0;
    finalX = 0;
    lastCaptureCoordinates=[0,0];
    selectAlbumsIndex = 0;
    footageEvent:any=[];
    constructor() {
        document.addEventListener("mouseup", (event) => {
            this.captureFootageMouseup(event);
        });
    }
    changeImageSize(event: any) {
        console.log("%c changeImageSize:", "color: red", event);
        console.log("%c this.imageDataURL:", "color: blue", this.imageDataURL);
        const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        const context: any = canvas.getContext("2d");
        //var dataURL = canvas.toDataURL();
        const _this = this;
        // if (_this.imageDataURL == undefined) {
        // _this.imageDataURL = canvas.toDataURL();
        // }
        const load_img = new Image();
        load_img.src = this.imageDataURL;
        load_img.onload = function () {
            context.clearRect(0, 0, 500, 500);
            context.save();
            context.translate(250, 250);
            context.scale(_this.imageSize, _this.imageSize);
            context.translate(-250, -250);
            //console.log("%c dataURL:", "color: red", load_img);
            context.drawImage(load_img, _this.lastCaptureCoordinates[0], _this.lastCaptureCoordinates[1], 500, 500);
            console.log("%c load_img.onload:", "color: red", _this.imageSize);
            context.restore();
        };
    }
    inputImage(event: any) {
        console.log("%c inputImage:", "color: red", event);
        console.log("%c inputImage:", "color: red", event.target.files);
        console.log("%c this.onEditing", "color: red", this.onEditing);
        this.onEditing = true;
        //this.initialization(event.target.files[0]);
        const files_SRC = event.target.files[0];
        this.albums.push(URL.createObjectURL(files_SRC));
        this.selectAlbumsIndex=this.albums.length-1;
        // let searchIndex = this.albums.findIndex((x) => x == URL.createObjectURL(files_SRC));
        // if(searchIndex=-1){
        // this.albums.push(URL.createObjectURL(files_SRC));
        // }
        // else{
        //   retrun;
        // }
        const _this = this;
        const img = new Image();
        //img.src = "https://dl.dropboxusercontent.com/s/1alt1303g9zpemd/UFBxY.png";
        img.src = URL.createObjectURL(files_SRC);
        img.onload = function () {
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            // img.width=500;
            // img.height=500;
            console.log("%c inputImage:", "color: red", img);
            console.dir(img);
            const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
            const context: any = canvas.getContext("2d");
            context.drawImage(img, 0, 0, 500, 500);
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
            _this.imageDataURL = canvas.toDataURL();

        };
    }

    saveClipCanvasImage() {
        const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        const context: any = canvas.getContext("2d");
        const load_img = new Image();
        load_img.src = this.imageDataURL;
        const _this = this;
        load_img.onload = function () {
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
            context.drawImage(load_img, _this.lastCaptureCoordinates[0], _this.lastCaptureCoordinates[1], 500, 500);
            context.restore();
            console.log("%c _this.selectAlbumsIndex:", "color: blue", _this.selectAlbumsIndex);
            const album_img =<HTMLImageElement>document.getElementById("img_"+_this.selectAlbumsIndex);
            album_img.src=canvas.toDataURL();
            _this.imageDataURL = undefined;
            _this.imageSize = 1;
            //_this.onEditing=false;
        };
    }



    canvasTranslate(X:any,Y:any) {
        //console.log("%c canvasTranslate:", "color: red", event);
        // console.log("%c this.imageDataURL:", "color: blue", this.imageDataURL);
        const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        const context: any = canvas.getContext("2d");
        const _this = this;
        const load_img = new Image();
        load_img.src = this.imageDataURL;
        load_img.onload = function () {
            context.clearRect(0, 0, 500, 500);
            context.save();
            context.translate(250, 250);+
            context.scale(_this.imageSize, _this.imageSize);
            context.translate(-250, -250);
            context.drawImage(load_img, X, Y, 500, 500);
            context.restore();
        };
    }


    captureFootageMousedown(event: MouseEvent) {
        console.log("%c captureFootageMousedown:", "color: red", event);
        // if (this.isDragging) {
        //   return;
        // }
        this.isDragging=true;
        event.preventDefault();
        event.stopPropagation();
        // update the starting drag position (== the current mouse position)
        this.startX = event.offsetX;
        this.startY = event.offsetY;
        console.log("%c this:", "color: red", this);
    }
    captureFootageMouseup(event: MouseEvent) {
        console.log("%c captureFootageMouseup:", "color: red", event);
        this.isDragging=false;

    }
    captureFootageMousemove(event: MouseEvent) {
        if (!this.isDragging) {
           return;
        }
        event.preventDefault();
        event.stopPropagation();
        // 滑鼠移動後和原本位置的距離
        const  dx = event.offsetX - this.startX;
        const  dy = event.offsetY - this.startY;
        this.lastCaptureCoordinates[0]=dx*this.imageSize;
        this.lastCaptureCoordinates[1]=dy*this.imageSize;
        // update the starting drag position (== the current mouse position)
        this.canvasTranslate(this.lastCaptureCoordinates[0],this.lastCaptureCoordinates[1]);
        //console.log("%c captureFootageMousemove:", "color: red", event);
    }
}
