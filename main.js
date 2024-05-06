window.addEventListener('scroll', function() {
    var element = document.querySelector('.hidden-div');
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (position<windowHeight) {
      element.classList.add('visible');
    }
  });


  $(document).ready(function() {
    $('.picture img').click(function() {
      $(this).siblings('.details').slideToggle();
    });
  });