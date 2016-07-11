//AJ

// var to_be_run_on_server_response = function(weather_data){
//   $('#container').append('<p>현재 기온: ' + weather_data.main.temp +'</p>');
//   $('#container').append('<p>오늘의 최대기온과 최저기온: ' + weather_data.main.temp_max +','+weather_data.main.temp_min+ '</p>')
//   $('#container').append('<p>현재 날씨 정보 : ' + weather_data.weather[0].description + '</p>');
//   $('#container').append('<p>바람 속도 : ' + weather_data.wind.speed + '</p>');
//   $('#container').append('<p>해돋이와 일몰시간 : ' + new Date(weather_data.sys.sunrise * 1000) + '</p>');
// }
//
// $.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b').success(to_be_run_on_server_response)
//
// $('#seoul').click(function (event){
//   event.preventDefault();
//   $('#container').empty();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b').success(to_be_run_on_server_response);
//   $('#container').append('<p>서울 날씨 입니다 </p>');
// });
//
//
// $('#tokyo').click(function (event){
//   event.preventDefault();
//   $('#container').empty();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b').success(to_be_run_on_server_response);
//   $('#container').append('<p>도쿄 날씨 입니다 </p>');
// });
//
// $('#sydney').click(function (event){
//   event.preventDefault();
//   $('#container').empty();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b').success(to_be_run_on_server_response);
//   $('#container').append('<p>시드니 날씨 입니다 </p>');
//
// });


//exercise_4
var root = 'http://jsonplaceholder.typicode.com';

// $.ajax({
//   url: root + '/posts/',
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });
//
// var place_post_on_page = function(data){
//   console.log(data);
//   $('#container1').append('<p>Data</p>');
//   $('#container1').append('<h1>'+ data.title + '</h1>');
//   $('#container1').append('<div id="' + data.id + '">' + '</div>');
//
// }


// for (var i = 1; i <=9; i++){
//   $.ajax({
//     url: root + '/posts/'+ i,
//     method: 'GET',
//     success : place_post_on_page
//   });
//
// }

$.ajax({
  url: root + '/posts/',
  method: 'GET'
}).then(function(data) {
  for(var i = 0; i < 10; i++){
    $('body').append('<div id="' + data[i].id + '" class="clickBind">' +  data[i].title + '</div>')
  }
  $('.clickBind').on('click', function(){
    var idis = $(this).attr('id');
    console.log(data[idis])
    $('body').html(data[idis].title + '<br>');
    $('body').append(data[idis].body + '<br>');
    $('body').append(data[idis].id + '<br>');
    $('body').append(data[idis].userId + '<br>');


  })

});



// for (var i = 1; i <=10; i++){
//
//   $.ajax({
//       url: root + '/posts/',
//       method: 'GET',
//       success : place_post_on_page
//     });
//
// }

// $('#post1').click(function (post_load){
//   event.preventDefault();
//   $('#container1').empty();
//   $.ajax({
//        url: root + '/posts/',
//        method: 'GET',
//        success : place_post_on_page
//      });
//   $('#container').html('<p>page1</p>');
//   $()
//
// });
