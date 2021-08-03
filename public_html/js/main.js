$(document).ready(function () {
    if ($('.promo-code').length > 0) {
        $('.promo-code').validate({

            highlight: function (element) {
                $(element).closest('.form-group').addClass('has-danger').removeClass('has-success');
                $(element).addClass('form-control-danger').removeClass('form-control-success');
            },

            unhighlight: function (element) {
                $(element).closest('.form-group').addClass('has-success').removeClass('has-danger');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                element.closest(".form-group").find(".error-msg").html(error);
            },
            ignore: [],
            rules: {
                promo_code: {
                    required: true
                }
            },
            messages: {
                promo_code: {
                    required: 'Unesite validan Promo Kod'
                }
            }

        });
    }

    $('.log-in').click(function () {
        if ($(window).width() < 992) {
            $('.user-submenu').slideToggle();
            $('.user-submenu').addClass('active');
        }
    });
    $(window).on('scroll', function () {
        if ($(window).width() < 992) {
            $('.user-submenu').slideUp();
        }
    });



    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            if (position < scroll + windowHight - 50) {
                $(this).addClass(animation);
            }
        });
    }

    animation();
    $(window).scroll(function () {
        animation();
    });

    $('.navbar-toggle').click(function () {

        $(this).toggleClass('active');
        $('.main-nav').slideToggle();
    });

    $('.toggle-submenu').click(function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).parent().next('.submenu').slideToggle();
            $(this).parent().next('.submenu').toggleClass('actives');
        }
    });

    $('.toggle-filters').click(function (e) {
        $(this).next().slideToggle();
        $(this).toggleClass('filters-open');
    });

    $('.have-account-check').on('change', function () {
        if ($('.account-check').is(':checked')) {
            $('.have-account').slideDown();
        } else {
            $('.have-account').slideUp();
        }
    });

    $('.another-address-check').on('change', function () {
        if ($('.address-check').is(':checked')) {
            $('.another-address-form').slideDown();
        } else {
            $('.another-address-form').slideUp();
        }
    });


    $('.choose-order-form .form-group i').click(function () {
        $(this).next('.tooltiptext').show().delay(2000).fadeOut();
    });

    $('.decrement').click(function () {
        var value = $(this).next('.quantity-input').val();
        if (value > 1) {
            value--;
            $(this).next('.quantity-input').val(value);
        }
    });
    $('.increment').click(function () {
        var value = $(this).prev('.quantity-input').val();
        if (value < 100) {
            value++;
            $(this).prev('.quantity-input').val(value);
        }
    });

    $(".show-categories").click(function () {
        $('.all-categories').toggleClass('show');
        $(this).toggleClass('closehelp');
        $('.filter-overlay').fadeToggle();
        $('html').toggleClass('scrool-of');
    });

    $('.search').click(function (e) {
        e.preventDefault();
        $(this).next('.header-search-form').fadeToggle();
        $(this).toggleClass('open');
    });

    var swiper = new Swiper('.lead-slider', {
        pagination: {
            el: '.default-pagination',
            clickable: true
        }
    });

    var swiper = new Swiper('.new-products-slider', {
        slidesPerView: 2,
        spaceBetween: 15,
        pagination: {
            el: '.product-pagination',
            clickable: true
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 45,
            },
        },
    });

    var swiper = new Swiper('.action-products-slider', {
        slidesPerView: 2,
        spaceBetween: 15,
        pagination: {
            el: '.product-pagination',
            clickable: true
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 45,
            },
        },
    });


    $('.toggle-categories').click(function (e) {
        e.preventDefault();
        $(this).parent().next('.form-holder').slideToggle();
    });

    if ($('select').length > 0) {
        $('select').niceSelect();
    }



    $('input[name="order"]').click(function () {
        if ($(this).attr('id') == 'show-store') {
            $('.nice-select.choose-store').show();
        } else {
            $('.nice-select.choose-store').hide();
        }
    });

    $('input[name="order_way"]').click(function () {
        if ($(this).attr('id') == 'payment-slip') {
            $('.payment-slip').show();
        } else {
            $('.payment-slip').hide();
        }
    });


    var galleryThumbs = new Swiper('.swiper-gallery-thumbs', {
        slidesPerView: 'auto',
        touchRatio: 0.2,
        spaceBetween: 15,
        slidesPerView: 2,
        loop: true,
        slideToClickedSlide: true,
        loopedSlides: 50,
        direction: 'horizontal',
        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: 2
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3
            }
        },
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoHeight: true
    });
    var galleryTop = new Swiper('.swiper-gallery', {
        spaceBetween: 10,
        autoHeight: true,
        touchRatio: 0.2,
        thumbs: {
            swiper: galleryThumbs
        }
    });



    if ($('.single-product').length > 0) {
        $().fancybox({
            selector: '.swiper-gallery .swiper-slide:not(.swiper-slide-duplicate)',
            hash: false
        });
    }


    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.busket-quantity input');
    jQuery('.busket-quantity').each(function () {
        var spinner = jQuery(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');
        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });



    

});

