// Replace Text In Header
//get handle to replace-me class from document
const checkReplace = document.querySelector('.replace-me');

//if we got the handle
if (checkReplace !== null) {
  //create an object of ReplaceMe, give it:
  // handle, and an object having values for options
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 1300,//ms
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll function For Navbar
function userScroll() {
  //get handle to navbar
  const navbar = document.querySelector('.navbar');

  //add scroll event listener, on scroll of > 50, perform
  //inline function
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      //make navbar darker, add bottom border color secondary,
      //and make it sticky 
      navbar.classList.add('bg-dark');
      navbar.classList.add('border-bottom');
      navbar.classList.add('border-secondary');
      navbar.classList.add('navbar-sticky');
    } else {//remove all of the above
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('border-bottom');
      navbar.classList.remove('border-secondary');
      navbar.classList.remove('navbar-sticky');//custom class
    }
  });
}

//after dom content loaded, invoke user scroll function
document.addEventListener('DOMContentLoaded', userScroll);


// Video Modal handling
//get video-btn, videoModal and the video
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');//this is iframe
let videoSrc;//just define video src variable

//if video-btn is clicked, assign src url from video-btn data
//attribute 
if (videoBtn !== null) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');
  });
}

if (videoModal !== null) {
  //when video modal is shown (event), set video attribute to 
  //src + .... (autoplay 1 means autoplay, showInfo=0 means no)
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute(
      'src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    );
  });

  //when video modal is hide, stop playing (remove autoplay)
  //from src attribute
  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  });
}
