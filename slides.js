 var currentSlide = 1;
 var numberOfSlides;

$(document).ready(function() {
	numberOfSlides = $('.slide').size();
	$('.slide').hide();
	$('#tableOfContents').hide();
	toggleSlides(currentSlide);
	
	// click handler for table of contents
	$('#tableOfContents').delegate('li', 'click', function(){
	    currentSlide = $('#tableOfContents').find('li').index(this) + 1;
		toggleSlides(currentSlide);	
		$('#tableOfContents').hide();
	});
});

// Register keypress events on the whole document
$(document).keydown(function(e) {
	
	switch(e.keyCode) { 
    	// User pressed left arrow
    	case 37:
			slideDown();
       		break;
       	// User pressed right arrow
       	case 39:
			slideUp();
       		break;
		// User pressed c
		case 67:
			$('#tableOfContents').toggle();
	       	break;
	}
});

function slideDown() {
	if (currentSlide > 1) {
   		currentSlide--;
		toggleSlides(currentSlide);
	}
}

function slideUp() {
	if (currentSlide < numberOfSlides){
   		currentSlide++;
		toggleSlides(currentSlide);
	}
}

function toggleSlides(currentSlide) {
	/* Ingen effekter */
	//$('.slide').removeClass('show').addClass('hide');
	//$('#slide' + slide).removeClass('hide').addClass('show');
	
	/* Rullgardin effekt */
	$('.slide').slideUp(500).delay(500);
	$('#slide' + currentSlide).slideDown(500);
}
