
// RELLAX
const rellax = new Rellax('.rellax');

// SPLIDE
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' , {
        autoplay  : true,
        interval  : 0,
        speed     : 10000,
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