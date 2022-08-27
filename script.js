x = 0;
y = 0;
draw_image = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak."
    recognition.start();
}

recognition.onResult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as:"+content;

    if(content =="apple" || content =="Apple") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started generating image.";
        draw_image = "set";
    }
    
}

function setup() {
    createCanvas(900, 600)
}

function draw() {
Image(x,y)
draw_image = "";
}