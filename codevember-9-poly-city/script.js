const land = document.getElementsByClassName('land')[0];

onmousemove = function (e) {
  let bodyVerticalCenter = document.body.clientWidth;
  let bodyHorizontalCenter = document.body.clientHeight;

  let mousePosX = e.x;
  let mousePosY = e.y;

  let horizontalRatio = ((mousePosX * 100) / bodyVerticalCenter);
  let verticalRatio = ((mousePosY * 100) / bodyHorizontalCenter) / 2;


  land.style.transform = "rotateX(calc(" + verticalRatio + "deg - 35deg)) rotateY(calc(" + horizontalRatio + "deg - 30deg))";


}