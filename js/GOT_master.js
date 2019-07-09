(() => {
  console.log('fired!');

  const sigils = document.querySelectorAll('.sigilContainer'), lightBox = document.querySelector('.lightbox'),
  closeButton = document.querySelector('.close-lightbox'), houseVideo = document.querySelector('.house-video');

  function closeLightBox(event){
    event.preventDefault();
    lightBox.classList.remove('show-lightbox');
    houseVideo.currentTime = 0;//rewinding the video
    houseVideo.pause();
  }

  function popLightBox(){
    lightBox.classList.add('show-lightbox');
    // debugger;
    houseVideo.play();
  }



  sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  closeButton.addEventListener("click", closeLightBox);

  houseVideo.addEventListener('ended', closeLightBox);
})();
