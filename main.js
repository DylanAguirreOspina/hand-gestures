

Webcam.set({
    Width:360,
    height:320,
    png_quality:90,
    image_format:"png",

})

camera= document.getElementById("camera")
Webcam.attatch("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src=""+data_uri+""/>'; 
    });
}

console.log("ml5 version",ml5.version);
Classifier=ml5.imageClassifier(https://teachablemachine.withgoogle.com/models/[...]son)
// put teachable machine link 

function modelLoaded(){
    console.log("Model Loaded")
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is " + prediction_1;
    speak_data_2= "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
} 


