 $(document).ready(readyNow);

 function readyNow(){
   console.log('script and jquery sourced');
  $('#gennerate').on('click' , generateClick);
}

function generateClick(){
  console.log('click');
  $('.container').append('<div class=clicks>' + "Button Clicked" + '</div>');
  genButton();
}

function genButton(){
  $('.clicks').append('<button class=swap>Swap</button>');
  $('.clicks').append('<button class=delete>Delete</button>');
}
