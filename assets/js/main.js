  (function ($) {
    "use strict";
  
    /*=========== Preloader JS
  =============================================================================*/
    $(window).on("load", function () {
      aosAnimation();
    });

    preloader();
    /*=============================================
      =    		 Preloader			      =
    =============================================*/
    function preloader() {
      // Code to run when the document is ready.
      $(window).on('load', function () {
        var target = $('#avs-preloader');
        if(target.length){
          target.addClass('loaded');
          $("#loading").fadeOut(500);
    
          if (target.hasClass('loaded')) {
            $('#preloader').delay(900).queue(function () {
              $(this).remove();
            });
          }
        }
      });
      }

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 20) {
        $(".header-area").removeClass("sticky-menu");
  
      } else {
        $(".header-area").addClass("sticky-menu");
      }
    });
  
  // OffCanvas
	var cb_stack_offcanvas_toggler = $('.header-area-toggler');
  if (cb_stack_offcanvas_toggler.length) { 
    cb_stack_offcanvas_toggler.on('click', function() {
      $('body').toggleClass('open-offcanvas');
    });
  }
  
    // Nice Select
	var cb_nice_select = $('[nice-select]');
  if (cb_nice_select.length) { 
    cb_nice_select.niceSelect();
  }

	/*=============================================
		=    		 Swiper Slider			      =
	=============================================*/
	var cb_slider = $('[cb-slider]');
    if (cb_slider.length) {
		cb_slider.each(function () {
			var SwiperCarousel = $(this),
            // Slides SpaceBetween
			slidesSpaceBetween = SwiperCarousel.data('spaceBetween'),
			slidesSpaceBetweenXl = SwiperCarousel.data('xl-spaceBetween'),
			slidesSpaceBetweenLg = SwiperCarousel.data('lg-spaceBetween'),
			slidesSpaceBetweenMd = SwiperCarousel.data('md-spaceBetween'),
			slidesSpaceBetweenSm = SwiperCarousel.data('sm-spaceBetween'),

            // Slides Autoplay
			slidesAutoplay = SwiperCarousel.data('autoplay'),
			slidesAutoplayXl = SwiperCarousel.data('xl-autoplay'),
			slidesAutoplayLg = SwiperCarousel.data('lg-autoplay'),
			slidesAutoplayMd = SwiperCarousel.data('md-autoplay'),
			slidesAutoplaySm = SwiperCarousel.data('sm-autoplay'),

            // Slides Loop
			slidesLoop = SwiperCarousel.data('loop'),
			slidesLoopXl = SwiperCarousel.data('xl-loop'),
			slidesLoopLg = SwiperCarousel.data('lg-loop'),
			slidesLoopMd = SwiperCarousel.data('md-loop'),
			slidesLoopSm = SwiperCarousel.data('sm-loop'),

            // Slides per View
			slidesPerView = SwiperCarousel.data('items'),
			slidesPerViewXl = SwiperCarousel.data('xl-items'),
			slidesPerViewLg = SwiperCarousel.data('lg-items'),
			slidesPerViewMd = SwiperCarousel.data('md-items'),
			slidesPerViewSm = SwiperCarousel.data('sm-items'),

			slidesSpeed = SwiperCarousel.data('speed'),
			slidesEffect = SwiperCarousel.data('effect'),
			slidesScrollbar = SwiperCarousel.data('scrollbar'),
			slidesLazy = SwiperCarousel.data('lazy'),
			slidesNextEl = SwiperCarousel.data('next'),
			slidesPrevEl = SwiperCarousel.data('prev'),
			slidesPagination = SwiperCarousel.data('pagination'),
			slidesCentered = SwiperCarousel.data('centered');			
			var swiper = new Swiper(SwiperCarousel[0], {
				slidesPerView: (slidesPerView ? slidesPerView : 1),
				loop: (slidesLoop ? slidesLoop : true),
				speed: (slidesSpeed ? slidesSpeed : 600),
				lazy: (slidesLazy ? slidesLazy : true),
                spaceBetween: (slidesSpaceBetween ? slidesSpaceBetween : 30),
				navigation: {
					nextEl: slidesNextEl,
					prevEl: slidesPrevEl,
				},
        pagination: {
          el: (slidesPagination ? slidesPagination: null),
          clickable: true,
        },
        scrollbar: {
          el: slidesScrollbar,
          // hide: true,
          hide: false,
        },
        effect: (slidesEffect ? slidesEffect : null),
        centeredSlides: (slidesCentered ? slidesCentered : false),
				fadeEffect: {
					crossFade: true,
				},
				autoplay: (slidesAutoplay ? slidesAutoplay : true),
          breakpoints: {
              // when window width is >= 480px
              480: {
                  slidesPerView: (slidesPerViewSm ? slidesPerViewSm : 1),
                  loop: (slidesLoopSm ? slidesLoopSm : true),
                  autoplay: (slidesAutoplaySm ? slidesAutoplaySm : false),
                  spaceBetween: (slidesSpaceBetweenSm ? slidesSpaceBetweenSm : 30),
              },
              // when window width is >= 640px
              640: {
                  slidesPerView: (slidesPerViewMd ? slidesPerViewMd : 1),
                  loop: (slidesLoopMd ? slidesLoopMd : true),
                  autoplay: (slidesAutoplayMd ? slidesAutoplayMd : false),
                  spaceBetween: (slidesSpaceBetweenMd ? slidesSpaceBetweenMd : 30),
              },
              // when window width is >= 991px
              991: {
                  slidesPerView: (slidesPerViewLg ? slidesPerViewLg : 1),
                  loop: (slidesLoopLg ? slidesLoopLg : true),
                  autoplay: (slidesAutoplayLg ? slidesAutoplayLg : false),
                  spaceBetween: (slidesSpaceBetweenLg ? slidesSpaceBetweenLg : 30),
              },
              // when window width is >= 1199px
              1199: {
                  slidesPerView: (slidesPerViewXl ? slidesPerViewXl : 1),
                  loop: (slidesLoopXl ? slidesLoopXl : true),
                  autoplay: (slidesAutoplayXl ? slidesAutoplayXl : false),
                  spaceBetween: (slidesSpaceBetweenXl ? slidesSpaceBetweenXl : 30),
              },
          },
			});		
		});		
	}
      
    /*=============================================
    =    		 ViewPassword On Click      	  =
    =============================================*/
    var cb_hide_pass = $("[avs-hsp-id]");
    if(cb_hide_pass.length){
      cb_hide_pass.avsPassType();
    }

    /*=============================================
      =    		 Aos Active  	         =
    =============================================*/
    function aosAnimation() {
      AOS.init({
        duration: 1000,
        mirror: true,
        once: true,
        disable: 'mobile',
      });
    }


  })(jQuery);
  