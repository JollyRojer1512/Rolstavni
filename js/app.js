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

