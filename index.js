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



  