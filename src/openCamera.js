
function openCamera(){
  var constraint = { audio: false, video: { width: 1280, height: 720 } };
  navigator.mediaDevices.getUserMedia(constraint).then( (mediaStream)=>{
      var video = document.getElementById("streaming");
      video.srcObject = mediaStream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
  }).catch(err => console.log(err) );
}

module.exports = openCamera;
