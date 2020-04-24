$(document).on('ready',function(){
    "use strict";

    /* Tabs Sec */
    $('.tab-sec li a').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-sec li a').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });


    $('.toggle-widget .content').hide();
   // $('.toggle-widget h2:first').addClass('active').next().slideDown('fast');
    $('.toggle-widget h2').on("click", function(){
    if($(this).next().is(':hidden')) {
        $('.toggle-widget h2').removeClass('active').next().slideUp('fast');
        $(this).toggleClass('active').next().slideDown('fast');
        $(window).scrollTop(700);
    }
    else{
        $('.toggle-widget h2').removeClass('active').next().slideUp('fast');
        $(window).scrollTop(700);
       // $(this).toggleClass('active').next().slideDown('fast');
    }
    });

    $('.faq-box > h2').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    $('.scroll-to a, .scrollup, .back-top, .tree_widget-sec > ul > li > ul > li a, .cand-extralink a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
 

});


