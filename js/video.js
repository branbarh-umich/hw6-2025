let video;

window.addEventListener("load", function () {
  // Initialize the "video" element:
  video = document.querySelector("#player1"); // [TODO] check

  // Turn off autoplay and turn off looping:
  video.autoplay = false; // [TODO] check
  video.loop = false; // [TODO] check
});

document.querySelector("#play").addEventListener("click", function () {
  // Play the video:
  video.play(); // [TODO] check

  // Update the volume information:
  document.querySelector("#volume").innerText = video.volume; // [TODO] check ?? do we need to update the slider too??
});

document.querySelector("#pause").addEventListener("click", function () {
  // Pause the video:
  video.pause(); // [TODO] check
});

document.querySelector("#slower").addEventListener("click", function () {
  // Slow the current video speed by 10% each time the button is clicked:
  video.playbackRate *= 0.9; // [TODO] check

  // Log the new speed to the console:
  console.log(video.playbackRate); // [TODO] check
});

document.querySelector("#faster").addEventListener("click", function () {
  // Increase the current video speed each time the button is clicked:
  video.playbackRate /= 0.9; // [TODO] check

  // Log the new speed to the console:
  console.log(video.playbackRate); // [TODO] check
});

// [TODO] ensure that clicking "slower" then "faster" returns the playback speed to 100%

document.querySelector("#skip").addEventListener("click", function () {
  // Advance the current video by 10 seconds (if the video length has been exceeded, go back to the start of the video):
  video.currentTime += 10; // [TODO] check

  if (video.currentTime > video.duration) {
    video.currentTime = 0; // [TODO] check
  }

  // Log the current location of the video:
  console.log(video.currentTime); // [TODO] check
});

document.querySelector("#mute").addEventListener("click", function () {
  // Mute or unmute the video:
  video.muted = !video.muted; // [TODO] check

  // Update the text in the button:
  if (video.muted) {
    document.querySelector("#mute").innerText = "Unmute"; // [TODO] check
  } else {
    document.querySelector("#mute").innerText = "Mute"; // [TODO] check
  }
});

// [TODO] should we be using "change" (updates on release) or "input" (updates continuously)?
document.querySelector("#slider").addEventListener("change", function () {
  // Change the volume based on the slider:
  const newVolume = document.querySelector("#slider").value; // [TODO] check
  video.volume = newVolume; // [TODO] check

  // Update the volume information:
  document.querySelector("#volume").innerText = video.volume; // [TODO] check
});

document.querySelector("#vintage").addEventListener("click", function () {
  // Utilize the existing oldSchool class on the video element:
  video.classList.add("oldSchool"); // [TODO] check
});

document.querySelector("#orig").addEventListener("click", function () {
  // Remove the oldSchool class from the video:
  video.classList.remove("oldSchool"); // [TODO] check
});
