var captureUrl;
var img;
/**
* canvas
*/
var picture = {
  canvas : null,
  context : null
};

var pos = {
  drawable : false,
  x : -1,
  y : -1
};

$(document).ready(function(){

  initPopup();
  
  $("#save").click(saveButtonClick);
  $("#cancel").click(cancelButtonClicked);

  setTimeout(function(){
    initCanvas();
  }, 100);
});




/*
  현재 페이지의 이미지 캡쳐 후 img에 삽입
*/
function setScreenshotUrl(url) {
  $("#target").attr("src", url);
}

function pencilButtonClick(){
  showPencilPopup();
}

// 저장 버튼
function saveButtonClick(){
  var url = document.getElementById("canvas").toDataURL("image/png");
  /*
    TODO : 이미지 이름 변경할 것 ( {앱이름}_{현재시간} )
  */
  download(url, "screenshot.png", "image/png");
}

// 취소 버튼
function cancelButtonClicked(){
  window.close();
}

function initCanvas(){
  var windowW = $(window).width() - 70;

  $("#target").attr("width", windowW);

  picture.canvas = document.getElementById("canvas");
  picture.context = picture.canvas.getContext("2d");

  var width = $("#target").width();
  var height = $("#target").height();

  $("#canvas").attr("width", width).attr("height",height);

  var img = document.getElementById('target');
  picture.context.drawImage(img, 0, 0, windowW, img.height);
  picture.context.lineWidth = 5;

  picture.canvas.addEventListener("mousedown",listener);
  picture.canvas.addEventListener("mousemove",listener);
  picture.canvas.addEventListener("mouseup",listener);

  $("#target").hide();
}

function listener(event){
  switch(event.type){
    case "mousedown":
      initDraw(event);
      break;
    case "mousemove":
      if(pos.drawable){
        draw(event);
      }
      break;
    case "mouseup":
      finishDraw();
      break;
  }
}

function initDraw(event){
  picture.context.beginPath();
  pos.drawable = true;
  var coors = getPosition(event);
  pos.x = coors.X;
  pos.y = coors.Y;
  picture.context.moveTo(pos.x, pos.y);
};

function draw(event){
  var coors = getPosition(event);
  picture.context.lineTo(coors.X, coors.Y);
  pos.x = coors.X;
  pos.y = coors.Y;
  picture.context.stroke();
}

function finishDraw(){
  pos.drawable = false;
  pos.x = -1;
  pos.y = -1;
}

function getPosition(event){
  var x = event.pageX - picture.canvas.offsetLeft;
  var y = event.pageY - picture.canvas.offsetTop;
  return {X: x, Y: y};
}
