(function($) {
  "use strict";

  let tabs = document.querySelectorAll('[data-tab-target]');
  let tabContents = document.querySelectorAll('[data-tab-content]');

  if (tabs.length && tabContents.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        if (target) {
          tabContents.forEach(tabContent => tabContent.classList.remove('active'));
          tabs.forEach(tab => tab.classList.remove('active'));
          tab.classList.add('active');
          target.classList.add('active');
        }
      });
    });
  }

  const tabContainer = document.querySelector('.tab-container');
  const tabContentContainer = document.querySelector('.tab-content-container');
  if (tabContainer && tabContentContainer) {
    const newTabButton = document.createElement('button');
    newTabButton.setAttribute('data-tab-target', '#new-tab');
    newTabButton.textContent = 'New Tab';
    tabContainer.appendChild(newTabButton);
    const newTabContent = document.createElement('div');
    newTabContent.setAttribute('data-tab-content', '');
    newTabContent.setAttribute('id', 'new-tab');
    newTabContent.textContent = 'This is the new tab content.';
    tabContentContainer.appendChild(newTabContent);
    tabs = document.querySelectorAll('[data-tab-target]');
    tabContents = document.querySelectorAll('[data-tab-content]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        if (target) {
          tabContents.forEach(tabContent => tabContent.classList.remove('active'));
          tabs.forEach(tab => tab.classList.remove('active'));
          tab.classList.add('active');
          target.classList.add('active');
        }
      });
    });
  }

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu-list");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("responsive");
      navMenu.style.backgroundColor = navMenu.classList.contains("responsive") ? '#333' : '';
    }

    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("responsive");
      navMenu.style.backgroundColor = '';
    }
  }

  var initScrollNav = function() {
    if (typeof $ !== 'undefined' && $('#header').length && $('#header-wrap').length) {
      var scroll = $(window).scrollTop();
      if (scroll >= 200) {
        $('#header').css('display', 'none'); // Hide the main header
        $('#header-wrap').css('display', 'none'); // Hide the top bar
      } else {
        $('#header').css('display', ''); // Show the main header
        $('#header-wrap').css('display', ''); // Show the top bar
      }
    }
  };

  if (typeof $ !== 'undefined') {
    $(window).scroll(function() { initScrollNav(); });
    $(document).ready(function() {
      initScrollNav();

      if (typeof Chocolat !== 'undefined') {
        Chocolat(document.querySelectorAll('.image-link'), {
          imageSize: 'contain',
          loop: true,
        });
      }

      $('#header-wrap').on('click', '.search-toggle', function(e) {
        var selector = $(this).data('selector');
        $(selector).toggleClass('show').find('.search-input').focus();
        $(this).toggleClass('active');
        e.preventDefault();
      });

      $(document).on('click touchstart', function(e) {
        if (!$(e.target).is('.search-toggle, .search-toggle *, #header-wrap, #header-wrap *')) {
          $('.search-toggle').removeClass('active');
          $('#header-wrap').removeClass('show');
        }
      });

      if (typeof $.fn.slick !== 'undefined' && $('.main-slider').length) {
        $('.main-slider').slick({
          autoplay: true,
          autoplaySpeed: 4000,
          fade: true,
          dots: true,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),
        });
      }

      if (typeof $.fn.slick !== 'undefined' && $('.product-grid').length) {
        $('.product-grid').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: true,
          arrows: false,
          responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 999, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 660, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ],
        });
      }

      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 1200,
          once: true,
        });
      }

      if (typeof jQuery.fn.stellarNav !== 'undefined' && $('.stellarnav').length) {
        jQuery('.stellarnav').stellarNav({
          theme: 'plain',
          closingDelay: 250,
        });
      }
    });
  }
})(jQuery);