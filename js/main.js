var myCarousel = document.querySelector('#carousel-kafaa')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000000,
    wrap: true,
    touch: true,
    pause: false
})

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav',
    offset: 50
})

var scrollSpyContentEl = document.getElementById('navbarNav')
var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl)

