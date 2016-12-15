"use strict";

(function () {
    var slideIndex = 0;
    function slideShow() {
        var i;
        var slides = document.getElementsByClassName("slide");
        for (i = 0; i < slides.length; i += 1) {
            slides[i].style.display = "none";
        }
        slideIndex += 1;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(slideShow, 8000);
    }
    slideShow();
}());

