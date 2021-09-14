const text = document.querySelectorAll('.text');

const img = document.querySelectorAll('.scale-img')

const modalEle = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const modalIMG = document.querySelectorAll('.modal-IMG');

// ACTIVE CLASS
(function () {
  const current = location.pathname.split('/')[1];
  if (current === "") return;
  const menuItems = document.querySelectorAll('.navbar a');
  for (let i = 0, len = menuItems.length; i < len; i++) {
      if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].className += " active";
      }
  }
})();

// TRANSITION
addEventListener('DOMContentLoaded', (event) => {
  const transitionEle = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a');

  setTimeout (() => {
    transitionEle.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      transitionEle.classList.add('is-active');

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  }
})

// TEXT ANIMATION
observerText = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.classList.add('animate-text');
    }
  })
})
  
text.forEach(path => {
  observerText.observe(path);
})

// IMG ANIMATION
observerIMG = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.classList.add('animate-img');
    }
  })
})

img.forEach(path => {
  observerIMG.observe(path);
})

// RELLAX
const rellax = new Rellax('.rellax');

// SPLIDE
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' , {
        autoplay  : true,
        interval  : 1000,
        easing    : 'linear',
        speed     : 5500,
        type      : 'loop',
        perPage   : 3,
        perMove   : 1,
        height    : '600px',
        arrows    : false,
        breakpoints: {
            1350: {
                perPage: 2,
            },
            750: {
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
