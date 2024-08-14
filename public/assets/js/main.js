/**
 * Template Name: Yummy
 * Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
 * Updated: Jun 29 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function ($) {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const $body = $("body");
    const $header = $("#header");
    if (
      !$header.hasClass("scroll-up-sticky") &&
      !$header.hasClass("sticky-top") &&
      !$header.hasClass("fixed-top")
    )
      return;
    $(window).scrollTop() > 100
      ? $body.addClass("scrolled")
      : $body.removeClass("scrolled");
  }

  $(document).on("scroll", toggleScrolled);
  $(window).on("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const $mobileNavToggleBtn = $(".mobile-nav-toggle");

  function mobileNavToggle() {
    $("body").toggleClass("mobile-nav-active");
    $mobileNavToggleBtn.toggleClass("bi-list bi-x");
  }

  $(document).on("click", ".mobile-nav-toggle", function () {
    $("body").toggleClass("mobile-nav-active");
    $(this).toggleClass("bi-list bi-x");
  });
  /**
   * Hide mobile nav on same-page/hash links
   */
  $(document).on("click", "#navmenu a", function () {
    if ($("body").hasClass("mobile-nav-active")) {
      mobileNavToggle();
    }
  });

  /**
   * Toggle mobile nav dropdowns
   */
  $(document).on("click", ".navmenu .toggle-dropdown", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).parent().next().toggleClass("dropdown-active");
    e.stopImmediatePropagation();
  });

  /**
   * Preloader
   */
  const $preloader = $("#preloader");
  if ($preloader.length) {
    $(window).on("load", function () {
      $preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  const $scrollTop = $(".scroll-top");

  function toggleScrollTop() {
    if ($scrollTop.length) {
      $(window).scrollTop() > 100
        ? $scrollTop.addClass("active")
        : $scrollTop.removeClass("active");
    }
  }
  $scrollTop.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });

  $(window).on("load", toggleScrollTop);
  $(document).on("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  $(window).on("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  $(document).ready(function () {
    $(".init-swiper").each(function () {
      let swiperConfigElement = $(this).find(".swiper-config");

      // Check if the element exists before calling trim()
      if (swiperConfigElement.length > 0) {
        let config = JSON.parse(swiperConfigElement.html().trim());

        // Your swiper initialization code here
      } else {
        console.log("Swiper config element not found!");
      }
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  $(window).on("load", function () {
    if (window.location.hash) {
      const $section = $(window.location.hash);
      if ($section.length) {
        setTimeout(() => {
          const scrollMarginTop = parseInt($section.css("scrollMarginTop"), 10);
          $("html, body").animate(
            {
              scrollTop: $section.offset().top - scrollMarginTop,
            },
            "smooth"
          );
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  const $navmenulinks = $(".navmenu a");

  function navmenuScrollspy() {
    $navmenulinks.each(function () {
      const $navmenulink = $(this);
      if (!$navmenulink.attr("href").startsWith("#")) return;
      const $section = $($navmenulink.attr("href"));
      if (!$section.length) return;
      const position = $(window).scrollTop() + 200;
      if (
        position >= $section.offset().top &&
        position <= $section.offset().top + $section.outerHeight()
      ) {
        $(".navmenu a.active").removeClass("active");
        $navmenulink.addClass("active");
      } else {
        $navmenulink.removeClass("active");
      }
    });
  }
  $(window).on("load", navmenuScrollspy);
  $(document).on("scroll", navmenuScrollspy);
})(jQuery);
