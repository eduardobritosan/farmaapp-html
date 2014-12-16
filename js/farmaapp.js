
// jQuery for page scrolling feature - requires jQuery Easing plugin
  jQuery(document).ready(function($) {
    $(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
    } );
  } );


