function setup()
{
    canvas= createCanvas(300, 300);
    canvas.position(560, 150);
    background("white");
    video= createCapture(VIDEO);
    video.size(400, 400);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}
function modelLoaded()
{
    console.log('Posenet is initialized');
}