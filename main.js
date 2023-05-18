function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(480, 480)
}