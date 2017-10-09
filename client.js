 $(document).ready(readyNow);

 function readyNow(){
   console.log('script and jquery sourced');
  $('#gennerate').on('click' , generateClick);
}

function generateClick(){
  console.log('click');
  $('.container').append('<div class=clicks>' + "Button Clicked" + '</div>');
}
