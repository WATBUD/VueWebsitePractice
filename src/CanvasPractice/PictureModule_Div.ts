
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
        console.log("%c PictureEditor:", "color: red");
        document.addEventListener("mouseup", (event) => {
            this.captureFootageMouseup(event);
        });
    }
    changeImageSize(event: any) {
        console.log("%c changeImageSize:", "color: red", event);
        console.log("%c this.imageDataURL:", "color: blue", this.imageDataURL);
        const element_Image = <HTMLImageElement>document.getElementById("Element_Image");
        element_Image.style.transform ="scale("+this.imageSize+","+ this.imageSize+")";
        
        const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        const context: any = canvas.getContext("2d");
        context.clearRect(0, 0, 500, 500);
        context.save();
        context.translate(250, 250);
        context.scale(this.imageSize, this.imageSize);
        context.translate(-250, -250);
        context.drawImage(element_Image, 0, 0, 500, 500);
        context.restore();

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
        const element_Image = <HTMLImageElement>document.getElementById("Element_Image");
        element_Image.src = URL.createObjectURL(files_SRC);
        element_Image.onload = function () {
            const width = element_Image.naturalWidth;
            const height = element_Image.naturalHeight;
            // img.width=500;
            // img.height=500;
            console.log("%c inputImage:", "color: red", element_Image);
            console.dir(element_Image);
            event.srcElement.value = "";
            element_Image.style.transform ="scale(1, 1)";
            console.log("%c this.getBoundingClientRect:", "color: yellow", element_Image.getBoundingClientRect());
            // const downloadLink = document.createElement('a')
            // var exportURL=canvas.toDataURL();
            // var exportURL=URL.createObjectURL(files_SRC);
            // downloadLink.href = exportURL;
            // downloadLink.download = 'mycanvasimage.png'
            // downloadLink.click();
            // var ele = document.getElementById(event.srcElement.id);
            // console.log("%c ele:", "color: red", ele);
            // ele.reset();

            //_this.imageDataURL = canvas.toDataURL();

        };
    }

    saveClipCanvasImage() {
        const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        const context: any = canvas.getContext("2d");
        const _this = this;
        const load_img = <HTMLImageElement>document.getElementById("Element_Image");
        const  dx = load_img.offsetLeft;
        const  dy = load_img.offsetTop;
        context.clearRect(0, 0, 500, 500);
        context.save();
        context.translate(250, 250);
        context.scale(_this.imageSize, _this.imageSize);
        context.translate(-250, -250);
        //---Circle--//
        context.beginPath();
        context.strokeStyle = "rgb(255 255 255 / 100%)";
        context.lineWidth = 1;
        //context.translate(250-dx, 250-dy);
        
        context.arc(250, 250, 125 / _this.imageSize, 0, 2 * Math.PI);
        context.stroke();
        context.clip();
        context.drawImage(load_img, dx/_this.imageSize, dy/_this.imageSize, 500, 500);
        context.restore();
        console.log("%c _this.selectAlbumsIndex:", "color: blue", _this.selectAlbumsIndex);
        const album_img = <HTMLImageElement>document.getElementById("img_" + _this.selectAlbumsIndex);
        album_img.src = canvas.toDataURL();
        _this.imageDataURL = undefined;
        _this.imageSize = 1;
        load_img.style.transform ="scale(1, 1)";
        load_img.style.marginLeft=0+'px';
        load_img.style.marginTop= 0+'px';

        this.onEditing=false;
    }

    canvasTranslate(X:any,Y:any) {
        // console.log("%c this.imageDataURL:", "color: blue", this.imageDataURL);
        const element_Image =<HTMLImageElement>document.getElementById("Element_Image");
        console.log("%c this.canvasTranslate:", "color: blue", element_Image.offsetLeft,X,Y);
        //console.log("%c this.canvasTranslate:", "color: blue", element_Image.getBoundingClientRect());
        //console.log("%c this.element_Image:", "color: blue", element_Image);
        const  dx = element_Image.offsetLeft;
        const  dy = element_Image.offsetTop;
        element_Image.style.marginLeft=(dx+X)+'px';
        element_Image.style.marginTop= (dy+Y)+'px';
        // const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        // const context: any = canvas.getContext("2d");
        // const _this = this;
        // const load_img = new Image();
        // load_img.src = this.imageDataURL;
        // load_img.onload = function () {
        //     context.clearRect(0, 0, 500, 500);
        //     context.save();
        //     context.translate(250, 250);+
        //     context.scale(_this.imageSize, _this.imageSize);
        //     context.translate(-250, -250);
        //     context.drawImage(load_img, X, Y, 500, 500);
        //     context.restore();
        // };
    }
    getOffset(el:any) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
    }


    captureFootageMousedown(event: MouseEvent) {
        const page_XY= [event.pageX,event.pageY];
        console.log("%c captureFootageMousedown:", "color: red", page_XY);
        this.isDragging=true;
        this.startX = page_XY[0]-this.lastCaptureCoordinates[0];
        this.startY = page_XY[1]-this.lastCaptureCoordinates[1];
        event.preventDefault();
        event.stopPropagation();
    }

    captureFootageMouseup(event: MouseEvent) {
        console.log("%c captureFootageMouseup:", "color: red", event);
        this.isDragging=false;
    }

    captureFootageMousemove(event: MouseEvent) {
        if (!this.isDragging) {
           return;
        }
        // console.log("%c element_Image.getBoundingClientRect():", "color: red", element_Image.getBoundingClientRect());
        // console.log("%c element_Image.offsetLeft():", "color: red", element_Image.offsetLeft);
        // console.log("%c element_Image.offsetTop():", "color: red", element_Image.offsetTop);
        console.log("%c event.offsetX:", "color: red", event.offsetX);
        console.log("%c event.offsetY:", "color: red", event.offsetY);
        console.log("%c event:", "color: red", event);
        this.lastCaptureCoordinates= [event.pageX - this.startX,event.pageY - this.startY];
        // update the starting drag position (== the current mouse position)
        this.canvasTranslate(this.lastCaptureCoordinates[0],this.lastCaptureCoordinates[1]);
        //console.log("%c captureFootageMousemove:", "color: red", event);
    }
}
