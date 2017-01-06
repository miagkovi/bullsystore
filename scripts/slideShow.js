"use strict";

(function () {
	var slideIndex = 2;
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

// var MrSlider = (function() {
// 	var slideIndex = 0;
// 	var _createSlider = function(className, frequency) {
// 		var i = 0;
// 		var slides = document.getElementsByClassName(className);
// 		for (; i < slides.length; i += 1) {
// 			slides[i].style.display = "none";
// 		}
// 		slideIndex += 1;
// 		if (slideIndex > slides.length) {
// 			slideIndex = 1;
// 		}
// 		slides[slideIndex - 1].style.display = "block";
// 		setTimeout(_createSlider, frequency);
// 	}
// 	return {
// 		createSlider: _createSlider
// 	}
// }());

// MrSlider.createSlider("slide", 2000);