// Detect touch device
function getDeviceType() {
	let check = false;
	(function (a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check ? 'mobile' : 'desktop';
}

// Mobile menu
$('.burger').on('click', function () {
	$(this).toggleClass('active');
	$('body').toggleClass('no_scroll');
	$('.nav_menu').toggleClass('active');
});
$(document).on('click', function (e) {
	if (!$(e.target).closest('.menu_wrap').length) {
		$('.burger').removeClass('active');
		$('.nav_menu').removeClass('active');
		$('body').removeClass('no_scroll');
		$('.mob_top_menu .sub-menu').slideUp(300);
	}
	e.stopPropagation();
});

// Logo mobile
$('.logo > a').on('click', function (e) {
	if (getDeviceType() == 'mobile' && !$(this).hasClass('clicked')) {
		e.preventDefault();
		$(this).addClass('clicked');
	}
});
$(document).on('click', function (e) {
	if (!$(e.target).closest('.logo').length) {
		$('.logo > a').removeClass('clicked');
	}
	e.stopPropagation();
});

// Tooltips
if ($('[data-toggle="tooltip"]').length) {
	$('[data-toggle="tooltip"]').tooltip({
		animation: false
	});
}

// Accorderon
$('.accordeon_item_title').on('click', function (e) {
	if($(e.target).hasClass('inner-item')) {
		if($(e.target).hasClass('active')) {
			$('.accordeon_item_title.inner-item').removeClass('active');
			$('.accordeon_item_title.inner-item').next('.accordeon_item_content').slideUp(300);
		}
		else {
			$('.accordeon_item_title.inner-item').removeClass('active');
			$('.accordeon_item_title.inner-item').next('.accordeon_item_content').slideUp(300);
			$(this).addClass('active');
			$(this).next('.accordeon_item_content').slideDown(300);
		}
	}
	else {
		if($(this).hasClass('active')) {
			$('.accordeon_item:not(.active) .accordeon_item_title').removeClass('active');
			$('.accordeon_item:not(.active) .accordeon_item_content').slideUp(300);
		} else {				
			$('.accordeon_item_title').removeClass('active');
			$(this).addClass('active');
			$('.accordeon_item_content').slideUp(300);
			$(this).next('.accordeon_item_content').slideToggle(300);
			setTimeout(()=>{
				$('html, body').animate({ scrollTop: $(this).offset().top - 200}, 500);
			}, 310)
		}
	}
});

$('.product').on('click', '.prod_sample_btns, .product_info' ,function (e) {
	if(!e.target.hasAttribute('download')) {
		e.preventDefault(); 
	}
})

$(document).on('click', function (e) {
	if (!$(e.target).closest('.accordeon.absolute').length) {
		$('.accordeon.absolute .accordeon_item_content').slideUp(300);
		$('.accordeon.absolute .accordeon_item_title').removeClass('active');
	}
	e.stopPropagation();
});

// Filter
$('.filter').on('click', function(){
	$(this).toggleClass('active');
	if ($(this).closest('.filter_item').find('.filter.active').length == 0) {
		$(this).closest('.filter_item').removeClass('active');
	} else {
		$(this).closest('.filter_item').addClass('active');
	}
});
$('.reset_filters').on('click', function(){
	$('.filter_item').removeClass('active');
	$('.filter').removeClass('active');
});

$('.filter').each(function() {
	var get_param = $(this).attr('data-get');
	if(window.location.search.substr(1).search(get_param) > 0) {
		$(this).addClass('active');
		$(this).closest('.filter_item').addClass('active');
	}
})

// Favorite btn
$('.moodwall_btn, .favorite_btn').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('active');
});

// Slider
if ($('.slider-pro').length) {
	$('.prew-btn').on('click', function(){
		$(this).closest('.slider-pro').sliderPro( 'previousSlide' );
	});
	$('.next-btn').on('click', function(){
		$(this).closest('.slider-pro').sliderPro( 'nextSlide' );
	});
}
if ($('.project_slider').length) {
	$('.project_slider').sliderPro({
		width: '100%',
		height: 520,
		arrows: false,
		buttons: false,
		autoplay: false,
		fullScreen: true,
		fadeFullScreen: true,
		imageScaleMode: 'contain',
		keyboard: false,
		thumbnailArrows: true,
		thumbnailHeight: 60,
		fadeThumbnailArrows: false,
		slideAnimationDuration: 500,
		breakpoints: {
			991: {
				height: 520
			},
			767: {
				height: 300
			}
		}
	});
}

if ($('.prod_slider').length) {
	$('.prod_slider').sliderPro({
		width: '100%',
		height: 300,
		arrows: false,
		buttons: true,
		autoplay: true,
		touchSwipe: false,
		autoplayOnHover: 'pause',
		fadeFullScreen: false,
		keyboard: false,
		slideAnimationDuration: 500
	});
}

if ($('.prod_tab_slider').length) {
	$('.prod_tab_slider').owlCarousel({
		loop:true,
		margin:10,
		nav: false,
		dots: true,
		mouseDrag: false,
		items: 1
	});
}

// Share btn
$('.share_btn').on('click', function(){
	$(this).closest('.share_btn_wrap').find('.share_btn_items').toggleClass('active');
});
$(document).on('click', function (e) {
	if (!$(e.target).closest('.share_btn_wrap').length) {
		$('.share_btn_items').removeClass('active');
	}
	e.stopPropagation();
});


$('#Afwerking .prod_sample_item').on('click', function(){
	var sample = $(this);
	$('.prod_sample_item').removeClass('active');
	sample.addClass('active');
	sample.find('.product_img').attr('src');
	$('.prod_sample_img_r').removeClass('active');
	$('.prod_sample_img_r').removeClass('thin');
	$('.prod_sample_img_r').removeClass('medium');
	setTimeout(function() {
		$('.prod_sample_img_r').attr('src', sample.find('.product_img').attr('src')).addClass('active');
		if (sample.hasClass('thin_sample')) {
			$('.prod_sample_img_r').addClass('thin');
		}
		else if(sample.hasClass('medium_sample')) {
			$('.prod_sample_img_r').addClass('medium');
		}
	}, 300);

	// Sapmple mob Scroll
	if ($(window).width() < 992) {
		var scroll_el = $('#' + sample.data('id'));
		if ($(scroll_el).length) {		
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
		}
		return false;
	}
});

$('.prod_options .nav-link').on('click', function(){
	$('.prod_sample_img_r').removeClass('active');
});

$('.xpandable-block').showMore({
	minheight: 0,
	animationspeed: 300,
	buttontxtmore: "+",
  	buttontxtless: "-"
});

$(document).ready(function() {
	var SITE = location.origin;
	var HOST = location.host;

	$(document).on('click', '.ajax-color', function(e) {
		e.preventDefault();

		var parent_id = $(this).attr('id');

		// get variation_id from url
		var href = $(this).attr('href');
		var params = href
		    .replace('?','')
		    .split('&')
		    .reduce(
		        function(p,e){
		            var a = e.split('=');
		            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
		            return p;
		        },
		        {}
		    );

		$.ajax({
		    type: 'POST',
		    url: SITE + '/wp-content/themes/besouw/popup.php',
		    data: {id: params['variation_id']},
		    dataType: 'json',
		    beforeSend: function() {
		    	$('#ajax-' + parent_id).parent().find('a img').animate({opacity: 0.2}, 300);
		    },
		    success: function(response){
		    	$('#ajax-' + parent_id).parent().find('a img').animate({opacity: 1}, 300);
		    	$('#ajax-' + parent_id).find('.ajax-collection').text(response.collection);
		    	$('#ajax-' + parent_id).find('.ajax-kleur').text(response.kleur);
		    	$('#ajax-' + parent_id).find('.ajax-soort').html(response.soorten);
		    	$('#ajax-' + parent_id).prev().find('.ajax-tags').html(response.soorten_white);
		    	$('#ajax-' + parent_id).find('.ajax-werelden').text(response.werelden);
		    	$('#ajax-' + parent_id).find('.ajax-url').attr('href', response.url);

		    	if(response.class_active.length > 0) {
		    		$('#ajax-' + parent_id).find('.moodwall_btn').addClass('active');
		    	} else {
		    		$('#ajax-' + parent_id).find('.moodwall_btn').removeClass('active');
		    	}

		    	$('#ajax-' + parent_id).find('.moodwall_btn').attr('href', response.url);

		    	$('#ajax-' + parent_id).prev().find('.attachment-woocommerce_thumbnail').attr('src', response.image);
		    	$('#ajax-' + parent_id).prev().find('.attachment-woocommerce_thumbnail').attr('srcset', response.image);

		    	$('#ajax-' + parent_id).prev().find('.ajax-title').text(response.collection + ' - ' + response.kleur);

		    	$('#ajax-' + parent_id).find('.ajax-cart-button').removeData('collection', null);
		    	$('#ajax-' + parent_id).find('.ajax-cart-button').removeAttr('data-collection');
		    	$('#ajax-' + parent_id).find('.ajax-cart-button').attr('data-collection', response.kleur);

		    	$('#ajax-' + parent_id).find('.ajax-moodwall').removeData('moodwall', null);
		    	$('#ajax-' + parent_id).find('.ajax-moodwall').removeAttr('data-moodwall');
		    	$('#ajax-' + parent_id).find('.ajax-moodwall').attr('data-moodwall', response.image);

		    	if ($('[data-toggle="tooltip"]').length) {
					$('[data-toggle="tooltip"]').tooltip({
						animation: false
					});
				}
		    }
		});
	});

	// moodwall heart on elementor's pages
	var active_url = document.cookie;
	active_url = active_url.split('%3A').join(':');
	active_url = active_url.split('%2F').join('/');
	$('.elementor-header-image').each(function () {
	    var active_mood = $(this).data('moodwall');
	    if(active_url.indexOf(active_mood) + 1) {
  			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});

	// moodwall drag & drop
	var $grid = $('.draggable').packery({
	    itemSelector: '.draggable-item',
		// gutter: 10
		columnWidth: '.grid-sizer'
	});

	if (getDeviceType() !== 'mobile') {
		$grid.find('.draggable-item').each( function( i, gridItem ) {
			var draggie = new Draggabilly( gridItem );
			$grid.packery( 'bindDraggabillyEvents', draggie );
		});
	}

	// $grid.find('.draggable-item').each( function( i, gridItem ) {
	//     var draggie = new Draggabilly( gridItem );
	//     $grid.packery( 'bindDraggabillyEvents', draggie );
	// });

	$('.moodwall_h').on('click', function() {
		$(this).closest('.product').find('.product_img').toggleClass('tall');
		gridUpdate ();
	});
	$('.moodwall_w').on('click', function() {
		$(this).closest('.grid-item').toggleClass('item_50');
		gridUpdate ();
	});

	function gridUpdate () {
		$grid.packery('shiftLayout');
		// setTimeout(function() {
		// }, 300);
	}

	// add image to moodwall
	$(document).on('click', '.favorite_btn, .moodwall_btn', function() {
		var mood_url = $(this).attr('data-moodwall');
		var mood_isset = $(this).data('isset');
		var title = $(this).data('title');
		$.ajax({
		    type: 'POST',
		    url: SITE + '/wp-content/themes/besouw/moodwall.php',
		    data: {url: mood_url, isset: mood_isset, title: title},
		    dataType: 'json',
		    success: function(response){
		    	$('.label_moodwall').attr('data-count', response.count);
		    	$('.moodwall-message').attr('data-htooltip', response.mess);
		    	$('.moodwall-message').addClass('active');
		    	setTimeout(function() {
		    		// fade message after 5 sec
				    $('.moodwall-message').removeClass('active');
					}, 5000);

					if($('main').hasClass('moodwall-page')) {
						location.reload();
					}
		    }
		});

		var value = $.cookie('cross-domain');console.log(value);
		var i = 0;
		$.ajax({
		    type: 'POST',
		    url: 'https://therdex.nl/wp-content/themes/besouw/cross-domain/cross-domain-besouw.php',
		    xhrFields: { withCredentials: true },
		    crossDomain: true,
		    data: {url: mood_url, isset: mood_isset, title: title, value: value, site: 'besouw'},
		    dataType: 'json',
		    success: function(response){
		    	if(response.val === null) {
		    		i = 1;
		    	} else {
		    		console.log(response);
		    	}
		    }
		});

		setTimeout(function() {
			if(i > 0) {
				$.ajax({
				    type: 'POST',
				    url: 'https://therdex.nl/wp-content/themes/besouw/cross-domain/cross-domain-besouw.php',
				    xhrFields: { withCredentials: true },
				    crossDomain: true,
				    data: {url: mood_url, isset: mood_isset, title: title, value: value, site: 'besouw'},
				    dataType: 'json',
				    success: function(response){
			    		console.log(response);
				    }
				});
			}
		}, 1500);
		

		var j = 0;
		$.ajax({
		    type: 'POST',
		    url: 'https://jabo-carpets.nl/wp-content/themes/besouw/cross-domain/cross-domain-besouw.php',
		    xhrFields: { withCredentials: true },
		    crossDomain: true,
		    data: {url: mood_url, isset: mood_isset, title: title, value: value, site: 'besouw'},
		    dataType: 'json',
		    success: function(response){
		    	if(response.val < 1) {
		    		j = 1;
		    	} else {
		    		console.log(response);
		    	}
		    }
		});

		setTimeout(function() {
			if(j > 0) {
				$.ajax({
				    type: 'POST',
				    url: 'https://jabo-carpets.nl/wp-content/themes/besouw/cross-domain/cross-domain-besouw.php',
				    xhrFields: { withCredentials: true },
				    crossDomain: true,
				    data: {url: mood_url, isset: mood_isset, title: title, value: value, site: 'besouw'},
				    dataType: 'json',
				    success: function(response){
			    		console.log(response);
				    }
				});
			}
		}, 1500);

		return false;
	});

	// download moodwall pdf
	$('.moodwall-pdf').click(function() {
		var mood_html = $('.container-draggable').html();
		$.ajax({
		    type: 'POST',
		    url: SITE + '/wp-content/themes/besouw/moodwall-pdf.php',
		    data: {html: mood_html},
		    dataType: 'json',
		    beforeSend: function() {
		    	$('.container-draggable').css({'opacity': '0.5'});
		    },
		    success: function(response){
		    	$('.container-draggable').css({'opacity': '1'});
		    	window.open(
				  'http://' + HOST + '/wp-content/themes/besouw/temp/pdf/my-moodwall-' + response.count + '.pdf',
				  '_blank' // <- This is what makes it open in a new window.
				);
		    }
		});
		return false;
	});

	// send moodwall pdf to email
	$('.moodwall-form').submit(function() {
		var elem = document.getElementById('screen');

		$('body').addClass('hide_el');
		$(window).scrollTop(0);

		html2canvas(elem, {
			height: elem.offsetHeight
		}).then(function(canvas) {
			var a = document.createElement('a');
			// toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
			a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");

			$('.moodwall-code').val(a.href);
			var data = $('.moodwall-form').serialize();
			$.ajax({
			    type: 'POST',
			    url: SITE + '/wp-content/themes/besouw/moodwall-pdf.php',
			    data: data,
			    dataType: 'html',
			    beforeSend: function() {
			    	$('body').css({'opacity': '0.5'});
			    },
			    success: function(){
			    	$('body').css({'opacity': '1'});
			    	$('.moodwall-form').hide();
			    	$('.modal_title').text('PDF sent to email');
			    }
			});

			setTimeout(function() {
				$('body').removeClass('hide_el');
			}, 1500);
		});
		return false;
	});

	// get zip archive
	$('.moodwall_btn').attr('data-moodwall', $('.prod_sample_item').find('.product_img').filter(':first').attr('src'));

	$('.zip-button').click(function() {
		var zip_id = $(this).data('zip');
		var post = $(this).data('post');
		var url = $('.woocommerce-product-gallery__image a').filter(':first').attr('href');
		$.ajax({
		    type: 'POST',
		    url: SITE + '/wp-content/themes/besouw/zip.php',
		    data: {id: zip_id, post: post, url: url},
		    dataType: 'json',
		    beforeSend: function() {
		    	$('body').css({'opacity': '0.5'});
		    },
		    success: function(response){
		    	$('body').css({'opacity': '1'});
		    	// location.href = SITE + '/wp-content/themes/besouw/zip/' + response.href;
		    	location.href = 'https://' + HOST + '/wp-content/themes/besouw/zip/' + response.href;
		    }
		});
		return false;
	});

	// get products
	$('.get_products').click(function() {
		var id = $(this).data('post');
		$.ajax({
		    type: 'POST',
		    url: SITE + '/wp-content/themes/besouw/get_products.php',
		    data: {id: id},
		    dataType: 'json',
		    beforeSend: function() {
		    	$('body').css({'opacity': '0.5'});
		    },
		    success: function(response){
		    	$('body').css({'opacity': '1'});
		    	$('.cart-message').attr('data-htooltip', response.mess);
		    	$('.cart-message').addClass('active');
		    	$('.cart-label').attr('data-count', response.count);
		    	setTimeout(function() {
		    		// fade message after 5 sec
				    $('.cart-message').removeClass('active');
				}, 5000);
		    }
		});
		return false;
	});

	// custom add to cart
	$(document).on('click', '.custom-add', function() {
		var id = $(this).data('product_id');
		var collection = $(this).data('collection');
		var type = $(this).data('type');
		$.ajax({
		    type: 'POST',
		    url: SITE + '/wp-content/themes/besouw/add-to-cart-custom.php',
		    data: {id: id, collection: collection, type: type},
		    dataType: 'json',
		    success: function(response){
		    	$('.cart-message').attr('data-htooltip', response.mess);
		    	$('.cart-message').addClass('active');
		    	$('.cart-label').attr('data-count', response.count);
		    	setTimeout(function() {
		    		// fade message after 5 sec
				    $('.cart-message').removeClass('active');
				}, 5000);
		    }
		});
		return false;
	});

	// add src to data-moodwall on product page
	var current_url = location.pathname;
	if((current_url.indexOf('/product/') + 1) > 0) {
		setTimeout(function() {
			var img_url = $('.wp-post-image').attr('src');
			$('.moodwall_btn').attr('data-moodwall', img_url);
			// $.ajax({
			//     type: 'POST',
			//     url: SITE + '/wp-content/themes/besouw/check-moodwall.php',
			//     data: {url: img_url},
			//     dataType: 'json',
			//     success: function(response){
			//     	if(response.active == 'active') {
			//     		$('.moodwall_btn ').addClass(response.active);
			//     	} else {
			//     		$('.moodwall_btn ').removeClass('active');
			//     	}
			//     }
			// });
		}, 1000);
	}

	// anchor
	var get_param = window.location.search;
	var anchor = get_param.indexOf('&go') + 1;
	if(anchor > 0) {	
		$("html,body").animate({scrollTop: $(".anchor-product").offset().top - 120}, 500);
	}

	$('.toegepaste-anchor').on('click', function() {
		$("html,body").animate({scrollTop: $("#toegepaste-anchor").offset().top - 110}, 500);
	});

	// Screenshot
	HTMLElement.prototype.click = function() {
		var evt = this.ownerDocument.createEvent('MouseEvents');
		evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
		this.dispatchEvent(evt);
	};

	$('.screenshot').on('click', function(){
		var elem = document.getElementById('screen');

		$('body').addClass('hide_el');
		$(window).scrollTop(0);

		html2canvas(elem, {
			height: elem.offsetHeight
		}).then(function(canvas) {
			var a = document.createElement('a');
			// toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
			a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
			a.download = 'Moodwall - Van Besouw.jpg';
			a.click();
			setTimeout(function() {
				$('body').removeClass('hide_el');
			}, 1500);
		});
	});

	// Mob top menu
	$('.mob_top_menu .menu-item-has-children').on('click', function(){
		console.log('sdf');
		$(this).find('.sub-menu').slideToggle(300);
		$(this).toggleClass('active');
	});

	// remove link from main product img
	setTimeout(function() {
		$('.woocommerce-product-gallery__image a').removeAttr('href');
	}, 1000)

	// $(document).on('click', '.test', function(e) {
	// 	e.preventDefault();

	// 	var value = $.cookie('cross-domain');
	// 	$.ajax({
	// 	    type: 'POST',
	// 	    url: 'https://therdex.nl/wp-content/themes/besouw/cross-domain/cross-domain-therdex.php',
	// 	    xhrFields: { withCredentials: true },
	// 	    crossDomain: true,
	// 	    data: {value: value},
	// 	    dataType: 'json',
	// 	    success: function(response){
	// 	    	console.log(response);
	// 	    }
	// 	});

	// 	$.ajax({
	// 	    type: 'POST',
	// 	    url: 'https://jabo-carpets.nl/wp-content/themes/besouw/cross-domain/cross-domain-jabo.php',
	// 	    xhrFields: { withCredentials: true },
	// 	    crossDomain: true,
	// 	    data: {value: value},
	// 	    dataType: 'json',
	// 	    success: function(response){
	// 	    	console.log(response);
	// 	    }
	// 	});
	// })

	$(document).on('click', '.btn-filter', function(e) {
		e.preventDefault();
		$(this).toggleClass('active-btn');
		$('.accordeon_wrap').toggleClass('active');
	})

	$(document).on('click', '.btn-view', function(e) {
		e.preventDefault();
		$('.product_descr').show();

		if($(this).nextAll('.product_descr').first().hasClass('active')) {
			$(this).nextAll('.product_descr').first().toggleClass('active');
		} else {
			$('.product_descr').removeClass('active');
			$(this).nextAll('.product_descr').first().toggleClass('active');
		}
	})

	$(this).nextAll('.product_descr').first();



	$(document).on('click', '.info-btn', function(e) {
		e.preventDefault();
		$('.product_descr').show();

		if($(this).next('.product_descr').hasClass('active')) {
			$(this).next('.product_descr').removeClass('active');
		} else {
			$('.product_descr').addClass('active');
			// $(this).nextAll('.product_descr').first().toggleClass('active');
		}
	})

});

$(document).mouseup(function (e) {
    var container = $('.product_descr');
    if(container.hasClass('active')) {
    	if (container.has(e.target).length === 0){
	        container.hide();
	    }
    }
    
});

jQuery(document).ready(function(c) {
	$('#menu-item-413, #menu-item-414').addClass('header_top_menu_item');
    var d = c('[name="radio"]'),
        b = c('[name="radio2"]'),
        a = c("#pa_collection");
    $attribute_pa_razmer = c("#pa_color");
    $(".prod_sample_title_span").text($('.attr-name').filter(':first').text());
    d.on("click", function() {

        var f = c(this),
            e = f.val();
        a.val(e).change();
        $(".prod_sample_title_span").text(e);
    });
    b.on("click", function() {
        var f = c(this),
            e = f.val();
        $attribute_pa_razmer.val(e).change();
        console.info(e);
    });
});

// Custom select
$('.current_option').on('click', function(){
	$('.select').toggleClass('active');
});
$('.option').on('click', function(){
	$('.current_option').text($(this).text());
	$('.select_input').val($(this).text());
	$('.select').removeClass('active');
});
$(document).on('click', function(e) {
	if (!$(e.target).closest('.select').length) {
		$('.select').removeClass('active');
	}
	e.stopPropagation();
});


// STIKY FOOTER
var position = 0,
	scroll = $(window).scrollTop();

$(window).scroll(function() {
	scroll = $(window).scrollTop();
	$('.footer').css('padding-bottom', $('.footer_sticky').outerHeight());

	if (scroll > position) {
		// console.log('scrollDown');
		$('.footer_sticky').addClass('active');
	} else {
		// console.log('scrollUp');
		if (position <= $('.footer').offset().top) {
			$('.footer_sticky').removeClass('active');
		}
	}
	position = scroll;
});

$('.footer_sticky_switcher').on('click', function (){
	$('.footer_sticky_list').removeClass('active');
	if ($('.footer_sticky_switcher > input').prop('checked')) {
		$('.footer_sticky_list_two').addClass('active');
	} else {
		$('.footer_sticky_list_one').addClass('active');
	}
	$('.footer').css('padding-bottom', $('.footer_sticky').outerHeight());
});
$('.footer_sticky').on('click','.footer_sticky-close', function (){
	if($('.footer_sticky').hasClass('close')) {
		$('.footer_sticky').removeClass('close').addClass('active');
	}
	else {
		$('.footer_sticky').addClass('close');
	}
});

$(document).ready(function(){
	if(window.innerWidth < 786) {
		$('.footer_sticky').addClass('close');
	}
	else {
		$('.footer_sticky').removeClass('close');
	}
});

$(window).resize(function () {
	if(window.innerWidth < 786) {
		$('.footer_sticky').addClass('close');
	}
	else {
		$('.footer_sticky').removeClass('close');
	}
});

// $(document).ready(function () {
// 	$('.search-block').on('click', '.search-icon', function () {
// 		if($('.search-block').hasClass('active')) {
// 			$(this).closest('.search-block').removeClass('active');
// 		}
// 		else {
// 			$(this).closest('.search-block').addClass('active');
// 		}
// 	});
// 	$('.search-block').on('click', '.search-close', function () {
// 		$(this).closest('.search-block').removeClass('active');
// 	});
// });

jQuery(document).ready(function () {
	initFancybox();
});


// // lightbox init
// function initFancybox() {
// 	jQuery('a.lightbox-link, [data-fancybox]').fancybox({
// 		parentEl: 'body',
// 		margin: [50, 0]
// 	});
// }