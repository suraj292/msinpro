$(document).ready(function() {
	var SITE = location.origin;
	$(document).on('click', '.custom-pagination-link', function(e) {
		e.preventDefault();

		var args = $(this).attr('data-args');
		var page = $(this).attr('data-page');

		$.ajax({
	    type: 'POST',
	    url: SITE + '/wp-content/themes/besouw/ajax-pagination.php',
	    data: {args: args, page: page},
	    dataType: 'json',
	    beforeSend: function() {
	    	$('.wrap-product').css({'opacity': '0.7'});
	    },
	    success: function(response){
	    	$('.product').remove();
	    	$('.pag-dots').remove();
	    	$('.wrap-product').css({'opacity': '1'});
	    	$('.wrap-product').prepend(response.html);

	    	$('.custom-pagination-link').each(function() {
	    		var length = $('.custom-pagination-link').length;

	    		if($(this).attr('data-page') == response.pag) {
	    			$(this).addClass('active-page');
	    		} else {
	    			$(this).removeClass('active-page');
	    		}

	    		var min = response.pag - 2;
	    		var max = (Number(response.pag) + Number(2));

	    		if($(this).attr('data-page') > max || $(this).attr('data-page') < min) {
	    			$(this).hide();
	    		} else {
	    			$(this).show();
	    		}

	    		if($(this).attr('data-page') == 1 && response.pag > 4) {
	    			$(this).show();
	    			$(this).after('<li class="pag-dots">...</li>');
	    		}

	    		if(max < length && $(this).attr('data-page') == length) {
	    			$(this).before('<li class="pag-dots">...</li>');
	    			$(this).show();
	    		}

	    	})
	    	
	    	$('html,body').animate({scrollTop: $('.filters_title').offset().top}, 1000);
	    }
		});
	})
})