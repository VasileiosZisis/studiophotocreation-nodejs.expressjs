const text = document.querySelectorAll('.text');

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

// RELLAX
const rellax = new Rellax('.rellax');

// SPLIDE
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' , {
        autoplay  : true,
        interval  : 0,
        easing    : 'ease',
        speed     : 15000,
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