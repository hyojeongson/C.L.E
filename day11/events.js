// // 이제 function expression을 만들 수 있습니다.
//
// var fu = function() {
//   console.log('son');
// }
//
// fu();
//
// document.querySelector('#target').addEventListener('click',fu)
// document.querySelector('#target').addEventListener('click',function(){
//   console.log('same deal');
// });

//exercise_1

// $('#button').on('click',function(){
//   $('#target').html('<p>beep</p>');
// });


//exercise_2

// $('div').on('click',function(){
//   console.log('a div has been clicked!');
// });
//
// $('#target').click(function(){
//   $('#target').show().css('color','red').text('boom goes the')
// });


// $('#show').on('click',function(){
//   $('#show').html('<img id="money" src="money.jpeg" alt="">');
//   $('#money').on('click',function(){
//     $('#show').hide();
//   });
// });
//
// $('#show1').on('click',function(){
//   $('#show1').html('<img src="Oprah.png" alt="">');
//
// });



//ecercise_3

// $('#target').on('mouseover',function(){
//   $('#target').addClass('highlighted')
// });
//
// $('#target').on('mouseleave',function(){
//   $('#target').removeClass('highlighted')
// });

// $('#magic').on('mouseover',function(){
//   $('#magic').html('<img id="img" src="img1.gif">');
//   $('#magic').on('mouseleave',function(){
//     $('#img').hide();
//   });
// });

// $('#magic').on('mouseover',function(){
//   $('#img').hide();
// });


//ecercise_4
// 마우스 움직일때 강아지 따라 움직이게하는 것.
// var mouse_tracker = function(event){
//   console.log(event.pageX, event.pageY, !!event.which)
//   $('#dog').css({
//     top: event.pageY - 200 + 'px',
//     left: event.pageX - 200 + 'px'
//   });
// };
// $('body').on('mousemove',mouse_tracker)

//ecercise_5
// this란?
// var el_finder = function(event){
//   console.log("calling el_finder for:", this, event.target);
//   $(this).attr('id','active');
// }
// $('#hi').click(el_finder);

// $('#output p').on('click',function(){
//   $(this).addClass('focus');
// });
