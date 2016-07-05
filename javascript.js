for (var i=0; i<231; i++) {
	$(document).ready(function() {
    	$('#container').append("<div class='pixel' id='horizontal'></div>");
	});
};


$(document).ready(function(){
	$('div').hover(function(){
		$(this).addClass('white');
	});
});

$(document).ready(function(){
	$('button').click(function(){
		$('div').removeClass('white');
	});
});




