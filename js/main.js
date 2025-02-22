(function($) {
    "use strict";

    $('.menu>li').slice(-2).addClass('last-elements');

    /* sticky active */
    var win = $(window);
    var stickey = $(".header-sticky");
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 100) {
            stickey.removeClass("sticky");
        } else {
            stickey.addClass("sticky");
        }
    });

    /* main-menu active */
    $('.main-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });

    
    
    /* Isotope active */
    $('.grid').imagesLoaded(function() {
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });

    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /* slider active  */
    $('.slider-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: true,
        navText: ['prev', 'next'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* brand-logo-active */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        items: 5,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    /* portfolio active  */
    $('.portfolio-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        navText: ['prev', 'next'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    /* testimonial active  */
    $('.testimonial-active').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*--
    Magnific Popup
    ------------------------*/
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*--
    menu-toggle
    ------------------------*/
    $('.menu-toggle').on('click', function() {
        if ($('.menu-toggle').hasClass('is-active')) {
            $('.main-menu nav').removeClass('menu-open');
        } else {
            $('.main-menu nav').addClass('menu-open');
        }
    });


    /*--
    	Hamburger js
    -----------------------------------*/
    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }


    /*--------------------------
        scrollUp
    ---------------------------- */
    
    var totop = $("#toTop");
    
    win.on('scroll', function() {
        if (win.scrollTop() > 200) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    /*--------------------------
    counterUp
    ---------------------------- */
    $('.count').counterUp({
        delay: 10,
        time: 5000
    });


    /*----------------------------
    youtube video
    ------------------------------ */
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
    });




})(jQuery);