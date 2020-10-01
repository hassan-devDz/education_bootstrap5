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
function getEventTarget(e) {
    e = e || window.event;

    return e.target;
}


(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()