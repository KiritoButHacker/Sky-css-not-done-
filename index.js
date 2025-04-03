// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider_slide');
    const navLinks = document.querySelectorAll('.slider_navlink');
    const prevButton = document.getElementById('nav-button--prev');
    const nextButton = document.getElementById('nav-button--next');
    const playButton = document.querySelector('.slider_play-button');
    
    let currentSlide = 0;
    let autoplayInterval;
    let isPlaying = true;
    
    // Initialize slideshow
    function showSlide(n) {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      
      // Remove active class from all nav links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // Set current slide index
      currentSlide = (n + slides.length) % slides.length;
      
      // Show current slide and highlight nav link
      slides[currentSlide].classList.add('active');
      navLinks[currentSlide].classList.add('active');
    }
    
    // Next/previous controls
    function moveToNextSlide() {
      showSlide(currentSlide + 1);
    }
    
    function moveToPrevSlide() {
      showSlide(currentSlide - 1);
    }
    
    // Start autoplay
    function startAutoplay() {
      isPlaying = true;
      playButton.classList.remove('paused');
      autoplayInterval = setInterval(moveToNextSlide, 3000);
    }
    
    // Stop autoplay
    function stopAutoplay() {
      isPlaying = false;
      playButton.classList.add('paused');
      clearInterval(autoplayInterval);
    }
    
    // Toggle autoplay
    function toggleAutoplay() {
      if (isPlaying) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    }
    
    // Add event listeners
    prevButton.addEventListener('click', () => {
      moveToPrevSlide();
      stopAutoplay();
    });
    
    nextButton.addEventListener('click', () => {
      moveToNextSlide();
      stopAutoplay();
    });
    
    playButton.addEventListener('click', toggleAutoplay);
    
    // Add click events to nav links
    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        showSlide(index);
        stopAutoplay();
      });
    });
    
    // Initialize the slideshow
    startAutoplay();
  });
