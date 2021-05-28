$(document).ready(function() {
	var SITE = location.origin;

	var $grid = $('.grid').masonry({
	 	itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});

	$(document).on('click', '.filter, .reset-project', function() {
		var get_param = $(this).attr('data-get');

		if(!$(this).hasClass('filter-home')) {

			if(!$(this).hasClass('filter-project')) {
				if(window.location.search.substr(1).length > 0) {
					if(window.location.search.substr(1).search(get_param) > 0) {
						window.history.replaceState(null, null, '?' + window.location.search.substr(1).replace(get_param, ''));
					} else {
						window.history.replaceState(null, null, '?' + window.location.search.substr(1) + $(this).data('get'));
					}
				} else {
					window.history.replaceState(null, null, '?filter-param=' + $(this).data('get'));
				}
			}

			var post = $('.filter').data('single');
			
			// soort
			if($('.tapijt-filter').hasClass('active')) {
				var tapijt_filter = 1;
			} else {
				var tapijt_filter = 0;
			}

			if($('.karpet-filter').hasClass('active')) {
				var karpet_filter = 1;
			} else {
				var karpet_filter = 0;
			}

			if($('.tegels-filter').hasClass('active')) {
				var tegels_filter = 1;
			} else {
				var tegels_filter = 0;
			}

			// colors
			var geel = ($('.geel-filter').hasClass('active')) ? '1' : '0';
			var ivoor = ($('.ivoor-filter').hasClass('active')) ? '1' : '0';
			var beige = ($('.beige-filter').hasClass('active')) ? '1' : '0';
			var taupe = ($('.taupe-filter').hasClass('active')) ? '1' : '0';
			var oker = ($('.oker-filter').hasClass('active')) ? '1' : '0';
			var orange = ($('.orange-filter').hasClass('active')) ? '1' : '0';
			var bordeaux = ($('.bordeaux-filter').hasClass('active')) ? '1' : '0';
			var rood = ($('.rood-filter').hasClass('active')) ? '1' : '0';
			var groen = ($('.groen-filter').hasClass('active')) ? '1' : '0';
			var wit = ($('.wit-filter').hasClass('active')) ? '1' : '0';
			var alu = ($('.alu-filter').hasClass('active')) ? '1' : '0';
			var grijs = ($('.grijs-filter').hasClass('active')) ? '1' : '0';
			var antraciet = ($('.antraciet-filter').hasClass('active')) ? '1' : '0';
			var zwart = ($('.zwart-filter').hasClass('active')) ? '1' : '0';
			var ijsblauw = ($('.ijsblauw-filter').hasClass('active')) ? '1' : '0';
			var blauw = ($('.blauw-filter').hasClass('active')) ? '1' : '0';
			var rose = ($('.rose-filter').hasClass('active')) ? '1' : '0';
			var paars = ($('.paars-filter').hasClass('active')) ? '1' : '0';

			//materiaal
			var katoen = ($('.katoen-filter').hasClass('active')) ? '1' : '0';
			var wol = ($('.wol-filter').hasClass('active')) ? '1' : '0';
			var soft = ($('.soft-filter').hasClass('active')) ? '1' : '0';
			var project = ($('.project-filter').hasClass('active')) ? '1' : '0';

			// sector
			var zorg = ($('.zorg-filter').hasClass('active')) ? '1' : '0';
			var kantoor = ($('.kantoor-filter').hasClass('active')) ? '1' : '0';
			var onderwijs = ($('.onderwijs-filter').hasClass('active')) ? '1' : '0';
			var overheid = ($('.overheid-filter').hasClass('active')) ? '1' : '0';
			var wonen = ($('.wonen-filter').hasClass('active')) ? '1' : '0';
			var inspiratie = ($('.inspiratie-filter').hasClass('active')) ? '1' : '0';

			// dessin
			var uni = ($('.uni-filter').hasClass('active')) ? '1' : '0';
			var gemeleerd = ($('.gemeleerd-filter').hasClass('active')) ? '1' : '0';
			var effect = ($('.effect-filter').hasClass('active')) ? '1' : '0';
			var streep = ($('.streep-filter').hasClass('active')) ? '1' : '0';
			var stip = ($('.stip-filter').hasClass('active')) ? '1' : '0';
			var notk = ($('.notk-filter').hasClass('active')) ? '1' : '0';

			// gebruiksklasse
			var gebruiksklasse_21 = ($('.21-filter').hasClass('active')) ? '1' : '0';
			var gebruiksklasse_22 = ($('.22-filter').hasClass('active')) ? '1' : '0';
			var gebruiksklasse_22p = ($('.22p-filter').hasClass('active')) ? '1' : '0';
			var gebruiksklasse_23 = ($('.23-filter').hasClass('active')) ? '1' : '0';
			var gebruiksklasse_31 = ($('.31-filter').hasClass('active')) ? '1' : '0';
			var gebruiksklasse_32 = ($('.32-filter').hasClass('active')) ? '1' : '0';
			var gebruiksklasse_33 = ($('.33-filter').hasClass('active')) ? '1' : '0';

			// collectie
			var col_1406 = ($('.1406-filter').hasClass('active')) ? '1' : '0';
			var col_1803 = ($('.1803-filter').hasClass('active')) ? '1' : '0';
			var col_1805 = ($('.1805-filter').hasClass('active')) ? '1' : '0';
			var col_1806 = ($('.1806-filter').hasClass('active')) ? '1' : '0';
			var col_1808 = ($('.1808-filter').hasClass('active')) ? '1' : '0';
			var col_2301 = ($('.2301-filter').hasClass('active')) ? '1' : '0';
			var col_2302 = ($('.2302-filter').hasClass('active')) ? '1' : '0';
			var col_2401 = ($('.2401-filter').hasClass('active')) ? '1' : '0';
			var col_2402 = ($('.2402-filter').hasClass('active')) ? '1' : '0';
			var col_2403 = ($('.2403-filter').hasClass('active')) ? '1' : '0';
			var col_2404 = ($('.2404-filter').hasClass('active')) ? '1' : '0';
			var col_2405 = ($('.2405-filter').hasClass('active')) ? '1' : '0';
			var col_2601 = ($('.2601-filter').hasClass('active')) ? '1' : '0';
			var col_2602 = ($('.2602-filter').hasClass('active')) ? '1' : '0';
			var col_2605 = ($('.2605-filter').hasClass('active')) ? '1' : '0';
			var col_2606 = ($('.2606-filter').hasClass('active')) ? '1' : '0';
			var col_2607 = ($('.2607-filter').hasClass('active')) ? '1' : '0';
			var col_2608 = ($('.2608-filter').hasClass('active')) ? '1' : '0';
			var col_2609 = ($('.2609-filter').hasClass('active')) ? '1' : '0';
			var col_2610 = ($('.2610-filter').hasClass('active')) ? '1' : '0';
			var col_2611 = ($('.2611-filter').hasClass('active')) ? '1' : '0';
			var col_2612 = ($('.2612-filter').hasClass('active')) ? '1' : '0';
			var col_2613 = ($('.2613-filter').hasClass('active')) ? '1' : '0';
			var col_2615 = ($('.2615-filter').hasClass('active')) ? '1' : '0';
			var col_2808 = ($('.2808-filter').hasClass('active')) ? '1' : '0';
			var col_3801 = ($('.3801-filter').hasClass('active')) ? '1' : '0';
			var col_3802 = ($('.3802-filter').hasClass('active')) ? '1' : '0';
			var col_3805 = ($('.3805-filter').hasClass('active')) ? '1' : '0';
			var col_3808 = ($('.3808-filter').hasClass('active')) ? '1' : '0';
			var col_3809 = ($('.3809-filter').hasClass('active')) ? '1' : '0';
			var col_3810 = ($('.3810-filter').hasClass('active')) ? '1' : '0';
			var col_3820 = ($('.3820-filter').hasClass('active')) ? '1' : '0';
			var col_4403 = ($('.4403-filter').hasClass('active')) ? '1' : '0';
			var col_4404 = ($('.4404-filter').hasClass('active')) ? '1' : '0';
			var col_7401 = ($('.7401-filter').hasClass('active')) ? '1' : '0';
			var col_7402 = ($('.7402-filter').hasClass('active')) ? '1' : '0';
			var col_26001 = ($('.26001-filter').hasClass('active')) ? '1' : '0';
			var col_26002 = ($('.26002-filter').hasClass('active')) ? '1' : '0';
			var col_26010 = ($('.26010-filter').hasClass('active')) ? '1' : '0';

			$.ajax({
			    type: 'POST',
			    url: SITE + '/wp-content/themes/besouw/filters/filter-' + post + '.php',
			    data: {post: post, tapijt_filter: tapijt_filter, karpet_filter: karpet_filter, tegels_filter: tegels_filter, geel: geel, ivoor: ivoor, beige: beige, taupe: taupe, oker: oker, orange: orange,
			    	bordeaux: bordeaux, rood: rood, groen: groen, wit: wit, alu: alu, grijs: grijs, antraciet: antraciet, zwart: zwart, ijsblauw: ijsblauw, blauw: blauw, rose: rose, paars: paars,
			    	katoen: katoen, wol: wol, soft: soft, project: project, zorg: zorg, kantoor: kantoor, onderwijs: onderwijs, overheid: overheid, wonen: wonen, inspiratie: inspiratie, uni: uni, gemeleerd: gemeleerd,
			    	effect: effect, streep: streep, stip: stip, notk: notk, gebruiksklasse_21: gebruiksklasse_21, gebruiksklasse_22: gebruiksklasse_22, gebruiksklasse_22p: gebruiksklasse_22p,
			    	gebruiksklasse_23: gebruiksklasse_23, gebruiksklasse_31: gebruiksklasse_31, gebruiksklasse_32: gebruiksklasse_32, gebruiksklasse_33: gebruiksklasse_33, col_1406: col_1406,
			    	col_1803: col_1803, col_1805: col_1805, col_1806: col_1806, col_1808: col_1808, col_2301: col_2301, col_2302: col_2302, col_2401: col_2401, col_2402: col_2402, col_2403: col_2403, col_2404: col_2404, col_2405: col_2405,
			    	col_2601: col_2601, col_2602: col_2602, col_2605: col_2605, col_2606: col_2606, col_2607: col_2607, col_2608: col_2608, col_2609: col_2609, col_2610: col_2610, col_2611: col_2611, col_2612: col_2612, col_2613: col_2613, col_2615: col_2615, col_2808: col_2808,
			    	col_3801: col_3801, col_3802: col_3802, col_3805: col_3805, col_3808: col_3808, col_3809: col_3809, col_3810: col_3810, col_3820: col_3820, col_4403: col_4403, col_4404: col_4404,
			    	col_7401: col_7401, col_7402: col_7402, col_26001: col_26001, col_26002: col_26002, col_26010: col_26010},
			    dataType: 'json',
			    beforeSend: function() {
			    	if(post == 'project') {
			    		$('.grid').css({'opacity': '0.5'});
			    	} else if(post == 'product') {
			    		$('.wrap-product').css({'opacity': '0.5'});
			    		$('.accordeon_wrap').removeClass('active');
			    	}

			    	$('.filter-besouw').removeClass('filter');
			    	$('.filter-opacity').css({'opacity': '0.5'});


			    },
			    success: function(response){
			    	if(post == 'project') {
			    		$('.grid').css({'opacity': '1'});
				    	$('.grid').html('');
						var $moreBlocks = $(response.html);
					    // Append new blocks
					    $grid.append($moreBlocks);
					    // Have Masonry position new blocks
					    $grid.masonry('appended', $moreBlocks);
					    $grid.masonry('layout');
			    	} else if(post == 'product') {
			    		$('.accordeon_wrap').addClass('active');
			    		$('.woocommerce-pagination').hide();
			    		$('.page-numbers').remove();
			    		$('.wrap-product').css({'opacity': '1'});
			    		$('.wrap-product').html(response.html);
			    		if ($('[data-toggle="tooltip"]').length) {
								$('[data-toggle="tooltip"]').tooltip({
									animation: false
								});
							}
			    	}

			    	$('.filter-besouw').addClass('filter');
			    	$('.filter-opacity').css({'opacity': ''});

			    }
			});
		}
		return false;
	})

	$('.filter-home').click(function(e) {
		e.preventDefault();

		var button_href = $('.filter-button-home').attr('href');
		var get_param = $(this).attr('data-get');
		if($('.filter-button-home').attr('href').search(get_param) > 0) {
			var string = $('.filter-button-home').attr('href').replace(get_param, '');
			$('.filter-button-home').attr('href', string);
		} else {
			$('.filter-button-home').attr('href', button_href + $(this).data('get'));
		}
		
		
	})

})