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
$('.swap').on('click', swapColor);
$('.delete').on('click' , deleteBtn);

}
function swapColor(){
  $('.clicks').css('background-color', 'yellow');
  console.log('swap');
}
function deleteBtn(){
$(this).parent().remove();
console.log('delete');
}
