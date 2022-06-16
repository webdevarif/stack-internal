(function ($) {

	/*=============================================
		= 01.    	Password-Hide-Show 	         =
	=============================================*/
	$.fn.avsPassType = function (options) {
        var passType_config = $.extend({
            data: null,
            pass_icon: '[avs-hsp-pass]',
            text_icon: '[avs-hsp-text]',
        }, options);
        return this.each(function () {
            $(this).on('click', function () {
                avs_hps_button = $(this);
				if(passType_config.data){
					avs_hps_Feild = avs_hps_button.attr(passType_config.data);
					passwordFeild = $("input[id='"+ avs_hps_Feild +"']");
					passwordFeildType = passwordFeild.attr('type');
					if (passwordFeildType == 'password') {
						passwordFeild.attr('type', 'text');
						avs_hps_button.parent().find(passType_config.pass_icon).css("display", "none");
						avs_hps_button.parent().find(passType_config.text_icon).css("display", "");
					}
					else {
						passwordFeild.attr('type', 'password');
						avs_hps_button.parent().find(passType_config.pass_icon).css("display", "");
						avs_hps_button.parent().find(passType_config.text_icon).css("display", "none");
					}
				} else{}
            });
        });
    }

	/*=============================================
		=    		TAB A ACTIVE 		         =
	=============================================*/
	$.fn.avsTabA = function (options) {
        var avsTabsA_config = $.extend({
            target: "[avs-tab]",
            pass_icon: '[avs-hsp-pass]',
            text_icon: '[avs-hsp-text]',
        }, options);
		var avs_el = $(this);
		$(".tab[avs-tab]").css({
			"display": "none",
		});
		avs_el.on("click", function () {
			$(avsTabsA_config.target).removeClass('tab-active').slideUp(400);
			$(".tab[avs-tab='" + $(this).attr('avs-tab') + "']").addClass("tab-active").slideDown(400);
		});
		avs_el.on("click", function () {
			$(".tab-a").removeClass('active-a');
			$(this).addClass("active-a");
		});


        // return this.each(function () {
        //     $(this).on('click', function () {
        //         avs_hps_button = $(this);
		// 		if(avsTabsA_config.data){
		// 			avs_hps_Feild = avs_hps_button.attr(avsTabsA_config.data);
		// 			passwordFeild = $("input[id='"+ avs_hps_Feild +"']");
		// 			passwordFeildType = passwordFeild.attr('type');
		// 			if (passwordFeildType == 'password') {
		// 				passwordFeild.attr('type', 'text');
		// 				avs_hps_button.parent().find(avsTabsA_config.pass_icon).css("display", "none");
		// 				avs_hps_button.parent().find(avsTabsA_config.text_icon).css("display", "");
		// 			}
		// 			else {
		// 				passwordFeild.attr('type', 'password');
		// 				avs_hps_button.parent().find(avsTabsA_config.pass_icon).css("display", "");
		// 				avs_hps_button.parent().find(avsTabsA_config.text_icon).css("display", "none");
		// 			}
		// 		} else{}
        //     });
        // });
		// $('.tab-a').on("click", function () {
		// 	$(".tab").removeClass('tab-active');
		// 	$(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
		// });
		// $('.tab-a').on("click", function () {
		// 	$(".tab-a").removeClass('active-a');
		// 	$(this).addClass("active-a");
		// });


    }

	/*=============================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$.fn.avsScrollTop = function (options) {
        var scrollTop_config = $.extend({
            scrollClass: "open",
            // scrollCount: 245,
            // scrollTarget: ".scroll-to-target",
            // scrollTargetAttr: "data-target",
        }, options);
		var avs_el = $(this);
		avs_el.each(function () {
			// Click
            avs_el.on('click', function (e) {
				e.preventDefault();				
				var target = $(this).attr('avs-target');
				// animate
				$('html, body').animate({
					scrollTop: $(target).offset()
				}, {
					duration: $(this).attr('avs-duration'),
					queue: false
				});
            });
        });
		
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
				avs_el.each(function () {
					scrollClass = $(this).attr("avs-class");
					if($(this).attr("avs-scroll")){
						if ( scroll < $(this).attr("avs-scroll") ) {
							if(scrollClass){
								$(this).removeClass(scrollClass ? scrollClass : scrollTop_config.scrollClass);
							}
						} else {
							$(this).addClass(scrollClass ? scrollClass : scrollTop_config.scrollClass);
						}
					}
			});
		});
    }

	/*=============================================
	=    		 CopyData Data On Click      	  =
	=============================================*/
	$.fn.copyText = function (options) {
        var copyText_config = $.extend({
            attribute: "avs-copy-data",
            avs_element: "div",
            msg: "You'v copied link",
            class: "copy-success-message",
        }, options);
        return this.each(function () {
			// Click
            $(this).on('click', function () {
				var avs_target = $(this);
				setTimeout(() => avs_target.addClass("disable"), 100);
				setTimeout(() => avs_target.removeClass("disable"), 3000);

				
				if (!($(this).hasClass("disable"))) {
					let copyText = avs_target.attr(copyText_config.attribute);
					/* Copy the text inside the text field */
					navigator.clipboard.writeText(copyText);
					/* Alert the copied text */
					let avs_copy = document.createElement(copyText_config.avs_element);
					avs_copy.className = copyText_config.class;
					avs_copy.innerHTML = copyText_config.msg;
					setTimeout(() => avs_target.append(avs_copy), 100);
					setTimeout(() => avs_copy.remove(), 3000);
				}
            });
        });
    }

	/*=============================================
		=    		 SHOW DATA ON FOCUS        =
	=============================================*/
	$.fn.showOnFocusInput = function (options) {
        var showOnFocusInput_config = $.extend({
            data: "[avs-focus-target]",
        }, options);
        return this.each(function () {
			// Click
            $(this).on('click', function () {
				var avs_target = $(this);
				
				$(this).find('input').focus(function () {
					$(this).parent().find(showOnFocusInput_config.data).first().stop(true, true).slideDown();
				}).blur(function () {
					if ($(this).val() === '') {
						$(this).parent().find(showOnFocusInput_config.data).first().stop(true, true).slideUp();
					}
				});
			});
        });
    }

	/*=============================================
	=    		 Select2 Data On Click    	  =
	=============================================*/
	$.fn.avsSelect = function (options) {
        var select2_config = $.extend({
            imgAttribute: "avs-thumb",
            selected: "avs-selected",
        }, options);
		var avs_el = $(this);
		avs_el.each(function () {

			let avs_target = $(this),
				avs_heading = avs_target.attr("avs-title"),
				avs_selectedVal = '',
				avs_selectedText = '',
				items = '';
				avs_target.css('display', 'none');

			avs_target.find('option').each(function() {
				var imgAttr = $(this).attr(select2_config.imgAttribute);
				var text = this.innerText;
				var value = $(this).val();
				if($(this).attr("selected")){
					avs_selectedVal = value;
					avs_selectedText = this.innerText;
				}
				items += '<li class="'+ (avs_selectedVal && avs_selectedVal === value ? 'selected' : '' ) +'" value="'+value+'">'+ (imgAttr ? '<img src="'+ imgAttr +'" />' : '') +'<span>'+ text +'</span></li>';
			});
			let selectHtml = '<div class="avs-select">' + 
								'<div class="avs-select__heading">'+ ( avs_selectedText !== '' ? avs_selectedText : '<span class="text-muted">'+ (avs_heading ? avs_heading : 'Select an option') +'</span>' ) +'</div>' + 
								'<ul class="avs-select__menu">' + items + '</ul>'+
							'</div>';
			avs_target.before(selectHtml);

			// offsetTop = $(this).offset().top+$(this).height()-$(window).scrollTop();
			// offsetTop = avs_el.parent().find(".avs-select__menu").height();  
			// avsSelectPostition = avs_el.parent().position();
				// console.log(offsetBottom)
				// console.log(ulHeight)

				// if ((offsetBottom < ulHeight) && (offsetTop > ulHeight)) {
				// parent.addClass('dropup');
				// } else {
				// parent.removeClass('dropup');
				// }

		});

		/* Select Value Change Function*/ 
		$('body').on('click','.avs-select',function(){ 
			// var offsetTop = $(this).offset().top+$(this).height()-$(window).scrollTop();
			// avsSelectPostition = avs_el.parent().offset().top+$(this).height();
			avsSelectPostition = $(window).scrollTop();
			avsSelectHeight = avs_el.parent().height()+avs_el.parent().find(".avs-select__menu").height();
			offsetBottom =$(window).height()-$(this).height()-$(this).offset().top+$(window).scrollTop();

				// console.log(avsSelectPostition)
				// console.log(avsSelectHeight)
			// console.log(offsetTop);
			$(this).find(".avs-select__menu").slideToggle(400);
		});
		$('body').on('click','.avs-select .avs-select__menu li',function(){ 
			
			$(this).parent().parent().find("div.avs-select__heading").text($(this).text());
			$(this).parent().find("li").removeClass('selected');
			$(this).addClass('selected');
			avs_el.find("option:selected").removeAttr("selected");
			avs_el.find("option[value='"+ $(this).attr("value") +"']").attr('selected', true);
		});
    }

	/*=============================================
	=    		 Add Class On Elements    	  =
	=============================================*/
	$.fn.avsAddClass = function (options) {
        var addClassBody_config = $.extend({
            addClassTarget: "avs-addClassTarget",
            addClassName: "avs-addClassName",
        }, options);
		var avs_el = $(this);
		avs_el.each(function () {
			let avs_target = $(this);
			$(document).ready(function() {
				avs_target.parent().find(avs_target.attr(addClassBody_config.addClassTarget)).addClass(avs_target.attr(addClassBody_config.addClassName))
			});
		});
    }

}(jQuery));

