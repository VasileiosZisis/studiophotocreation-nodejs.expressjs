const text = document.querySelectorAll('.text');

const img = document.querySelectorAll('.category-img')

const modalEle = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const modalIMG = document.querySelectorAll('.modal-IMG');

// TEXT ANIMATION
observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.classList.add('animate-text');
    }
  })
})
  
text.forEach(path => {
  observer.observe(path);
})

// IMG ANIMATION
observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.classList.add('animate-img');
    }
  })
})

img.forEach(path => {
  observer.observe(path);
})

// RELLAX
const rellax = new Rellax('.rellax');

// SPLIDE
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' , {
        autoplay  : true,
        interval  : 0,
        easing    : 'ease',
        speed     : 9000,
        type      : 'loop',
        perPage   : 3,
        perMove   : 1,
        height    : '600px',
	    cover     : true,
        arrows    : false,
        breakpoints: {
            640: {
                perPage: 1,
            },
        }
    }).mount();
} );

// MODAL IMG
modalIMG.forEach(item => {
  item.addEventListener("click", event => {
     modalEle.style.display = "block";
     modalImage.src = event.target.src;
     document.body.style.overflow = "hidden";
  });
});
window.onclick = function(event) {
 if (event.target === modalEle) {
   modalEle.style.display = "none";
   document.body.style.overflow = "visible";
 }
}
close.addEventListener("click", () => {
  modalEle.style.display = "none";
  document.body.style.overflow = "visible";
});