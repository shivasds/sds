jQuery(document).ready(function($) {
    jQuery('.lcmenu-mobile-hook, .lcmenupro-site-overlay, .lcmenu-mobile-close-hook').on('click', function(event) {
        var mobileNavigation = $(this).closest(".dslc-module-front").eq(0).find('.lcmenupro-mobile-navigation');
        var siteOverlay = $(this).closest(".dslc-module-front").eq(0).find('.lcmenupro-site-overlay');
        if (mobileNavigation.hasClass('open')) {
            mobileNavigation.removeClass('open');
            siteOverlay.hide();
        } else {
            mobileNavigation.addClass('open');
            siteOverlay.show();
        }
    });
    jQuery('.lcmenupro-navigation .menu-width-full').each(function(index, el) {
        setLeftMenuOffset(el);
    });
    jQuery('.lcmenupro-navigation .menu-width-full').on('hover', function(event) {
        event.preventDefault();
        if (jQuery(event.target).hasClass('menu-width-full')) {
            setLeftMenuOffset(event.target);
        }
    });
    jQuery('.lcmenupro-mobile-navigation .lcmenupro-mobile-menu li a[href*=#]:not([href=#])').on('click', function(event) {
        var mobileNavigation = jQuery('.lcmenupro-mobile-navigation');
        var siteOverlay = jQuery('.lcmenupro-site-overlay');
        if (mobileNavigation.hasClass('open')) {
            mobileNavigation.removeClass('open');
            siteOverlay.hide();
        } else {
            mobileNavigation.addClass('open');
            siteOverlay.show();
        }
    });
    jQuery(".lcmenupro-navigation .menu > li.menu-item-has-children").mouseenter(function() {
        jQuery(this).closest(".dslc-sticky-row").css("z-index", "5");
    }).mouseleave(function() {
        jQuery(this).closest(".dslc-sticky-row").css("z-index", "");
    });
    setResFullMenuClass();
    jQuery(window).resize(function() {
        setResFullMenuClass();
    });
});

function setLeftMenuOffset(element) {
    if (element === undefined) {
        return;
    }
    var parentItemRect = element.getBoundingClientRect();
    var parentSection = jQuery(element).closest('.dslc-modules-section-wrapper')[0];
    var parentSectionRect = parentSection.getBoundingClientRect();
    var offset = parseInt(parentItemRect.left) - parseInt(parentSectionRect.left);
    jQuery(element).children('.sub-menu').first().css('left', '-' + offset + 'px');
}

function setResFullMenuClass() {
    if (jQuery("body").hasClass("dslc-res-phone") || jQuery("body").hasClass("dslc-res-tablet")) {
        jQuery(".lcmenupro-navigation ul.menu").addClass('dslc-res-full-menu');
    } else {
        jQuery(".lcmenupro-navigation ul.menu").removeClass('dslc-res-full-menu');
    }
};