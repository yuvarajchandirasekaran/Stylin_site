// for footer link toggle function
$(document).ready(function() {
  $(".ftr-link-btn").click(function () {
    if ($(window).width() <= 1024) {
      var target = $(this).data("target");
      $('.ftr-links[data-target="' + target + '"]').slideToggle();
      if ($('.plus-icon[data-target="' + target + '"]').text() === 'add') {
        $('.plus-icon[data-target="' + target + '"]').text('remove');
      }
      else {
        $('.plus-icon[data-target="' + target + '"]').text('add');
      }
    }
  });
});
  // mobile menu
  $('.hamburg-icon').click(function () {
    if ($('.hamburg-icon').text() === 'menu') {
      $('.hamburg-icon').text('close');
      $('.nav-links').show()
    }
    else if($('.hamburg-icon').text() === 'close') {
      $('.hamburg-icon').text('menu');
      $('.nav-links').hide()
    }
  })
  // model-pop-up
  $(document).ready(function() {
    if ($(window).width() > 1000) {
    $('.modal-pop-up').css('display', 'block');
    document.body.style.overflow = 'hidden';
    $('.form-close-btn').click(function(e) {
        $('.modal-pop-up').css('display', 'none');
        document.body.style.overflow = 'auto';
    });
  }
});
// carousel-1
$(document).ready(function(){
  $('.carousel-wrapper').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    draggable:false,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});
// featured products tab view carousel
$(document).ready(function(){
  $('.featured-carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    draggable:false,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.featured-carousel-2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    draggable:false,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});