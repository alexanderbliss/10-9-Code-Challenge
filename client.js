$(document).ready(readyNow);

function readyNow(){
  console.log('script and jquery sourced');
  $('#gennerate').on('click' , generateClick);

}

function generateClick(){
  console.log('click');
  $('.container').append('<div class=clicks></div>');
  $('.clicks').append('<button class="swap">Swap</button>');
  $('.clicks').append('<button class="delete">Delete</button>');
  $('.swap').on('click', swapColor);
  $('.delete').on('click' , deleteBtn);

}
function swapColor(){

  $(this).parent().css('background-color', 'yellow');

  console.log('swap');
}
function deleteBtn(){
  $(this).parent().remove();
  console.log('delete');
}
