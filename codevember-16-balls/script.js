const xInitial = document.body.clientWidth / 2;
const yInitial = document.body.clientHeight / 2;
const x = [xInitial];
const y = [yInitial];
const dxInitial = 1;
const dyInitial = -1;
const dx = [dxInitial];
const dy = [dyInitial];

const ballColors = ['red', 'orange', 'purple', 'gray', 'cyan', 'wheat', 'darkblue', 'yellow', 'pink', 'blue'];

createBall = (ballSize) => {
    let ballColorClass = ballColors[Math.floor(Math.random()*ballColors.length)];
    if(ballSize < 200) {
    let createDiv = document.createElement("div");
    createDiv.setAttribute('class', ballColorClass);
    document.getElementById('balls').appendChild(createDiv);
    x.push(xInitial);
    y.push(yInitial);
    dx.push(Math.cos(-380 * (Math.PI / 180) * Math.random(50)));
    dy.push(Math.sin(-380 * (Math.PI / 180) * Math.random(50)));
}
}

start = () => {

    let balls = document.getElementById('balls').getElementsByTagName('div');

    for (let i = 0; i < balls.length; i++) {

        let ball = document.getElementById('balls').getElementsByTagName('div');

        let ballWidth = ball[i].clientWidth;
        let ballHeight = ball[i].clientHeight;
        let bodyWidth = document.body.clientWidth - ballWidth;
        let bodyHeight = document.body.clientHeight - ballHeight;

        let ballRadius = 0;

        ballPosition = () => {
            ball[i].style.top = y[i] + "px";
            ball[i].style.left = x[i] + "px";

            if (x[i] + dx[i] > bodyWidth - ballRadius || x[i] + dx[i] < ballRadius) {
                dx[i] = -dx[i];
                createBall(balls.length);
            }

            if (y[i] + dy[i] > bodyHeight - ballRadius || y[i] + dy[i] < ballRadius) {
                dy[i] = -dy[i];
                createBall(balls.length);
            }

            x[i] += dx[i];
            y[i] += dy[i];

        }
        ballPosition();
    }

}

setInterval(() => { start(); }, 1);
