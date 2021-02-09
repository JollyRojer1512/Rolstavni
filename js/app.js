// var targetElm = document.querySelector('.boxChild'),  // reference to scroll target
//     button = document.querySelector('button');        // button that triggers the scroll
  
// // bind "click" event to a button 
// button.addEventListener('click', function(){
//    targetElm.scrollIntoView()
// })


// var counter = 1;
// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if(counter > 5) counter = 1;
// }, 500);


window.addEventListener('load', function(){
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
		windowTop > 100
			? $("header").addClass("fixed")
			: $("header").removeClass("fixed");
		// windowTop > 100 ? $("header").css("height", "100px") : $("header").css("height", "160px");
	});

	// var photos = $('.photos img');
	// console.log(photos);
	
	
	// photos.forEach(i => {
	// 	i.addClass('active');
	// });

	// for(let i = 0; i < photos.length; i++){
	// 	photos[i].addClass('active');
	// }


	
	
	
})


// // Open the Modal
// function openModal() {
// document.getElementById("myModal").style.display = "block";
// }

// // Close the Modal
// function closeModal() {
// document.getElementById("myModal").style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
// showSlides(slideIndex = n);
// }

// function showSlides(n) {
// var i;
// var slides = document.getElementsByClassName("mySlides");
// var dots = document.getElementsByClassName("demo");
// var captionText = document.getElementById("caption");
// if (n > slides.length) {slideIndex = 1}
// if (n < 1) {slideIndex = slides.length}
// for (i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex-1].style.display = "block";
// dots[slideIndex-1].className += " active";
// captionText.innerHTML = dots[slideIndex-1].alt;
// }
