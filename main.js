$(".slider").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 768,
    settings: {
        dots: true
    }
  }
  ]
});

$(".quotes__carousel").slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    adaptiveHeight: true,
});

$(".logos__carousel").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 6,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '10px',
      }
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '10px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '10px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '10px',
      }
    }
    ]

});

$(".testimonials__carousel").slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    adaptiveHeight: true,
});





 //ticking machine
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;

    $('.progressBarContainer .progressBar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.single-item').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 2) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine

    $('.progressBarContainer div').click(function () {
    	clearInterval(tick);
    	var goToThisIndex = $(this).find(".progressBar").data("slickIndex");
    	$('.single-item').slick('slickGoTo', goToThisIndex, false);
    	startProgressbar();
    });


$(function() {
    $(".facts").waypoint(function() {

        $(".stats_number").each(function() {
            var tcount = $(this).data("count");
            $(this).animateNumber({ number: tcount,
                easing: 'easeInQuad',

                },1000);
        });
    this.destroy();
    }, {
        offset: '80%'
    });
});

$('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins  mfp-fade', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: false// don't foget to change the duration also in CSS
        }
});


function openNav() {
    document.getElementById("search-wrap").style.width = "100%";
}

function closeNav() {
    document.getElementById("search-wrap").style.width = "0";
}

function openMenu() {
    document.getElementById("mobile-nav").style.width = "100%";
}

function closeMenu() {
    document.getElementById("mobile-nav").style.width = "0";
}

(function(window, document) {
  'use strict';
  var file = 'img/sprite.svg', // путь к файлу спрайта на сервере
      revision = 4;            // версия спрайта
      if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
      var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
      request,
      data,
      insertIT = function() {
          document.body.insertAdjacentHTML('afterbegin', data);
      },
      insert = function() {
          if (document.body) insertIT();
          else document.addEventListener('DOMContentLoaded', insertIT);
      };
      if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
        data = localStorage.getItem('inlineSVGdata');
        if (data) {
          insert();
          return true;
      }
  }
  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();
        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
      }
  }
}
request.send();
} catch (e) {}
}(window, document));


new WOW().init();




