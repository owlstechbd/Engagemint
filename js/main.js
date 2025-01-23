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
  const sliderContainer = document.getElementById('slider-container');
  let currentIndex = 0;
  let autoSlideInterval;

  // Function to show a specific slide
  function showSlide(index, direction) {
    slides[currentIndex].classList.remove('active');

    // Direction-specific animation
    if (direction === 'left-to-right') {
      slides[currentIndex].style.transform = 'translateX(100%)';
    } else if (direction === 'right-to-left') {
      slides[currentIndex].style.transform = 'translateX(-100%)';
    }

    // Update the current index
    currentIndex = index;

    // Reset the position and activate the new slide
    slides[currentIndex].style.transform = 'translateX(0)';
    slides[currentIndex].classList.add('active');
  }

  // Auto-slide function
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      const newIndex = (currentIndex + 1) % slides.length; // Loop to the next slide
      showSlide(newIndex, 'left-to-right');
    }, 3000); // Slide every 3 seconds
  }

  // Stop auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Previous button click event
  prevBtn.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex, 'right-to-left');
  });

  // Next button click event
  nextBtn.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex, 'left-to-right');
  });

  // Pause auto-slide on hover
  sliderContainer.addEventListener('mouseover', stopAutoSlide);

  // Resume auto-slide on mouse out
  sliderContainer.addEventListener('mouseout', startAutoSlide);

  // Start the auto-slide on page load
  startAutoSlide();



//testmonail-video


// Select all testimonial video sections
const testimonialVideos = document.querySelectorAll('.testimonial-video');

testimonialVideos.forEach((videoSection) => {
  const thumbnail = videoSection.querySelector('.testimonial-video-thumbnail');
  const fullVideoContainer = videoSection.querySelector('.testimonial-video-container');
  const fullVideo = videoSection.querySelector('.testimonial-full-video');
  const playPauseBtn = videoSection.querySelector('.testimonial-play-button img'); // Update to select the play button

  // Play the full video when the thumbnail is clicked
  thumbnail.addEventListener('click', () => {
    // Hide the thumbnail and show the full video container
    thumbnail.style.display = 'none';
    fullVideoContainer.style.display = 'block';
    
    // Play the full video
    fullVideo.play().catch((error) => {
      console.error('Video playback error:', error);
    });

    // Update button text (if needed)
    playPauseBtn.setAttribute('src', 'images/pause.png'); // Update play/pause button image if needed
  });

  // Toggle play/pause functionality on play button click
  playPauseBtn.addEventListener('click', () => {
    if (fullVideo.paused) {
      fullVideo.play();
      playPauseBtn.setAttribute('src', 'images/pause.png'); // Change to pause icon
    } else {
      fullVideo.pause();
      playPauseBtn.setAttribute('src', 'images/green-play.png'); // Change to play icon
    }
  });
});




