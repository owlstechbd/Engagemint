const textLoop = document.getElementById("text-loop");
const texts = ["Digital Agency", "Strategix Agency"];
let index = 0;

// Function to smoothly change text
function changeText() {
  // Fade out current text
  textLoop.style.opacity = 0;

  setTimeout(() => {
    // Update text when opacity is 0
    index = (index + 1) % texts.length;
    textLoop.textContent = texts[index];

    // Fade in new text
    textLoop.style.opacity = 1;
  }, 1000); // Wait for fade-out to complete
}

// Change text every 3 seconds
setInterval(changeText, 3000);


//video

function playVideo() {
  // Hide the thumbnail section
  const videoThumbnail = document.querySelector(".video-thumbnail");
  videoThumbnail.style.display = "none";

  // Show the custom video section
  const customVideoContainer = document.querySelector(".custom-video-container");
  customVideoContainer.style.display = "block";

  // Play the video
  const mainVideo = document.getElementById("mainVideo");
  mainVideo.play().catch((error) => {
    console.log("Video play error: ", error);
  });

  // Update the Play/Pause button text
  const playPauseBtn = document.getElementById("playPauseBtn");
  playPauseBtn.textContent = "Pause";
}

function togglePlayPause() {
  const mainVideo = document.getElementById("mainVideo");
  const playPauseBtn = document.getElementById("playPauseBtn");

  if (mainVideo.paused) {
    mainVideo.play();
    playPauseBtn.textContent = "Pause";
  } else {
    mainVideo.pause();
    playPauseBtn.textContent = "Play";
  }
}


//slider

const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentIndex = 0;

  function showSlide(index, direction) {
    slides[currentIndex].classList.remove('active');
    slides[currentIndex].classList.add('fade-out');

    currentIndex = index;

    slides[currentIndex].classList.remove('fade-out');
    slides[currentIndex].classList.add('active');

    if (direction === 'right-to-left') {
      slides[currentIndex].style.transform = 'translateX(100%)';
      requestAnimationFrame(() => {
        slides[currentIndex].style.transform = 'translateX(0)';
      });
    }
  }

  prevBtn.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex, 'right-to-left');
  });

  nextBtn.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex, 'left-to-right');
  });


//testmonail-video


// Select all testimonial video sections
const testimonialVideos = document.querySelectorAll('.testimonial-video');

testimonialVideos.forEach((videoSection) => {
  const thumbnail = videoSection.querySelector('.testimonial-video-thumbnail');
  const fullVideoContainer = videoSection.querySelector('.testimonial-video-container');
  const fullVideo = videoSection.querySelector('.testimonial-full-video');
  const playPauseBtn = videoSection.querySelector('.testimonial-play-pause-btn');

  // Play the full video when the thumbnail is clicked
  thumbnail.addEventListener('click', () => {
    thumbnail.style.display = 'none'; // Hide the thumbnail
    fullVideoContainer.style.display = 'block'; // Show the full video container
    fullVideo.play().catch((error) => {
      console.error('Video playback error:', error);
    });
    playPauseBtn.textContent = 'Pause'; // Update button text
  });

  // Toggle play/pause functionality
  playPauseBtn.addEventListener('click', () => {
    if (fullVideo.paused) {
      fullVideo.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      fullVideo.pause();
      playPauseBtn.textContent = 'Play';
    }
  });
});



