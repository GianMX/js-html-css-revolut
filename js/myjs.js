// MOUSE ENTER MOUSE LEAVE JS FUNCTION
$(document).ready(
  function() {
    $('li.main-drop').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('show');
      }
    );
    $('li.main-drop').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('show');
      }
    );
  }
);
