document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' , {
        type      : 'loop',
        perPage   : 3,
        height    : '600px',
	    cover     : true,
        arrows    : false,
        breakpoints: {
            640: {
                perPage: 2,
            },
        }
    }).mount();
} );