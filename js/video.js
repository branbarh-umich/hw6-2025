// [TODO] accessability check
// [TODO] ask about whether console logs are required or not

let video;

window.addEventListener("load", function () {
  // [DONE] Initialize the "video" element:
  video = document.querySelector("#player1");

  // [DONE] Turn off autoplay and turn off looping:
  video.autoplay = false;
  video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
  // [DONE] Play the video:
  video.play();

  // [DONE] Update the volume information:
  document.querySelector("#volume").innerText = `${video.volume * 100}%`;
});

document.querySelector("#pause").addEventListener("click", function () {
  // [DONE] Pause the video:
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  // [DONE] Slow the current video speed by 10% each time the button is clicked:
  video.playbackRate *= 0.9;

  // [DONE] Log the new speed to the console:
  console.log(`Speed is ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function () {
  // [DONE] Increase the current video speed each time the button is clicked:
  video.playbackRate /= 0.9;

  // [DONE] Log the new speed to the console:
  console.log(`Speed is ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function () {
  // [DONE] Advance the current video by 10 seconds (if the video length has been exceeded, go back to the start of the video):
  video.currentTime += 10;

  if (video.currentTime >= video.duration) {
    video.currentTime = 0; // [TODO] is this right?
  }

  // [DONE] Log the current location of the video:
  console.log(`Video current time is ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function () {
  // [DONE] Mute or unmute the video:
  video.muted = !video.muted;

  // [DONE] Update the text in the button:
  if (video.muted) {
    document.querySelector("#mute").innerText = "Unmute";
  } else {
    document.querySelector("#mute").innerText = "Mute";
  }
});

document.querySelector("#slider").addEventListener("change", function () {
  // [DONE] Change the volume based on the slider:
  const newVolume = document.querySelector("#slider").value / 100;
  video.volume = newVolume;

  // [DONE] Update the volume information:
  document.querySelector("#volume").innerText = `${video.volume * 100}%`;
  console.log(`The current value is ${video.volume}`);
});

document.querySelector("#vintage").addEventListener("click", function () {
  // [DONE] Utilize the existing oldSchool class on the video element:
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  // [DONE] Remove the oldSchool class from the video:
  video.classList.remove("oldSchool");
});
