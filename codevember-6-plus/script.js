
    const verticalSide = document.getElementsByClassName('vertical')[0];
    const horizontalSide = document.getElementsByClassName('horizontal')[0];
    const cube = document.getElementsByClassName('cube')[0];


    onmousemove = function (e) {
      const bodyVerticalCenter = document.body.clientWidth;
      const bodyHorizontalCenter = document.body.clientHeight;

      let mousePosX = e.x;
      let mousePosY = e.y;

      let horizontalRatio = ((mousePosX * 100) / bodyVerticalCenter) / 2;
      let verticalRatio = ((mousePosY * 100) / bodyHorizontalCenter) / 2;

      verticalSide.style.transform = "rotateY(calc(-" + horizontalRatio + "deg - 55deg)) translateZ(0px)";
      horizontalSide.style.transform = "rotateX(calc(" + verticalRatio + "deg + 75deg)) translateZ(0px)";
      cube.style.transform = "rotate3d(0, calc(-" + horizontalRatio + " - 12) ,calc(" + verticalRatio + " - 12), calc(15deg + " + horizontalRatio + "deg + " + verticalRatio + "deg)";

    }