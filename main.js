document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' , {
        autoplay  : true,
        interval  : 3000,
        speed     : 800,
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