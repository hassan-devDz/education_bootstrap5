var myCarousel = document.querySelector("#carousel-kafaa");
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 100000,
    wrap: true,
    touch: true,
    pause: false,
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbarNav",
    offset: 50,
});

function getEventTarget(e) {
    e = e || window.event;

    return e.target;
}
var scrollSpyContentEl = document.getElementById("navbarNav");
var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl);

var elem = document.querySelector(".model_img");
var iso = new Isotope(elem, {
    itemSelector: ".portfolio-item",
});

var filtersElem = document.querySelector(".filters-button-group");
filtersElem.addEventListener("click", function(event) {
    // only work with buttons
    if (!matchesSelector(event.target, "button")) {
        return;
    }
    var filterValue = event.target.getAttribute("data-filter");

    iso.arrange({ filter: filterValue });
});

(function() {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
            "submit",
            function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

/*================modal========== */
var left = document.getElementById("left"),
    right = document.getElementById("right"),
    slideIndex = 1;

let img01 = document.getElementById("img01");
const model = document.querySelector(".model_img");
let plus = document.querySelectorAll(".backgound-kafaa .icofont-plus");

model.addEventListener("click", y);
let dir;

function y() {
    let target1 = getEventTarget();

    const iconplus = target1.closest(".backgound-kafaa .icofont-plus");

    let nodes = Array.from(plus); // get array
    let index_plus = nodes.indexOf(iconplus);
    currentSlide(index_plus);
    if (iconplus != null) {
        img01.src = iconplus.offsetParent.previousElementSibling.src;
        if (index_plus == 1) {
            img01.src = "assets/image/portfolio-3-full.webp";
        }
    }
}
showSlides(slideIndex);
const plusSlides = () => {
    showSlides((slideIndex += 1));
};
const tarhSlides = () => {
    showSlides((slideIndex -= 1));
};
const currentSlide = (n) => {
    showSlides((slideIndex = n));
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img-fluid");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex == 1) {
        img01.src = "assets/image/portfolio-3-full.webp";
    } else {
        img01.src = slides[slideIndex].src;
    }
}
left.addEventListener("click", tarhSlides);
right.addEventListener("click", plusSlides);