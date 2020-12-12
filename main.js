
NoseX = 0;
NoseY = 0;

function preload() {
 Clown_Nose = loadImage('https://i.postimg.cc/wvmMVyHb/Red-Nose.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded) 
    poseNet.on('pose', gotPoses);
    
}

function draw() {
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(NoseX, NoseY, 30)
    image(Clown_Nose, NoseX, NoseY, 40, 40)

    
}

function modelLoaded() {
    console.log("Pose Net Model Loaded") 
}

function gotPoses(results) {
  if (results.length >0) {
      console.log(results)
      NoseX = results[0].pose.nose.x - 15;
      NoseY = results[0].pose.nose.y - 15;
      console.log("Nose X is =" + results[0].pose.nose.x)
      console.log("Nose Y is =" + results[0].pose.nose.y)
  }
}

function take_snapshot(){
    save("Clown PhotoShoot.png")
}

