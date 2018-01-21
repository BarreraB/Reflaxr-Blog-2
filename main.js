$('.readmore').click(function(event){
	// here we prevent the default behavior
	// of the click event
	event.preventDefault();

	// all the other work we want to happen
	// when this button is clicked
	$('#show-this-on-click').slidedown("slow",function() {

	});
});

$('.readmore').click(function() {
	$('#show-this-on-click').slidedown("slow",function() {

	});
});


