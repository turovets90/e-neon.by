$(document).ready(function(){

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    $('.img_slider').each(function(){
        var slider=$(this);
        var slider_item=$(this).find('.item');
        if(slider_item.length > 1){
            $(slider).slick({
                autoplay: false,
                dots: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    });


    $(".main_menu a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 140;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        $('.main_menu ').removeClass('open');
        return false;
    });

    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('.wrapper').css({'padding-top': header_height+'px'});
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });

    });
    $(window).resize();

});


