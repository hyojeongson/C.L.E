// //exercise_1
// var answer_logger = function(fn){
//   var answer = fn();
//   $('#answer').text(answer);
// }
//
// answer_logger(function(){
//   return "I should appear in div#answer!"
// });
//

// Advanced Functions

// var say_hi = function () {
//   console.log('h1');
// }
// var greeter = say_hi
// say_hi()
// greeter()
//
// say_hi = function (){
//   console.log('meh');
// }
//
// say_hi();
// greeter();
//
// var runner = function(fn){
//   console.log('Invoking a function now!');
//   fn()
// }
//
// runner( function(){ console.log('okay')})
// runner(say_hi)
// runner(greeter);
// runner(say_hi);



// var answer_collector = function(fns){
//   var result_array = []
//   fns.forEach(function(fn,i){
//     result_array[i] = fn();
//   });
//   return result_array;
// }
//
// var fn1 = function () {
//   return "1this should be the first value in results array"
// }
//
// var res = answer_collector([
//   fn1,
//   function(){
//     return "2this should be the second value in results array"
//   }
// ]);
//

//exercise_3
// var secret_keeper = function(str1,str2){
//
//   var secret = '사이 사이';
//   $('#str').append(str1 + secret + str2);
// }
// secret_keeper(22222, 222223);

// var returns_a_func = function (){
//   var word = 'I can see inside'
//   return function(){console.log('BOOP!' + word)}
// }
//
// var word = 'I can see outside' ;
//
// var new_booper = returns_a_func()
// new_booper()
//
// var returns_a_func = function (){
//   var number = 5;
//   return function(){ console.log("the number is :" + number)}
// }
// var number = 4;
// var fn = returns_a_func()
// fn()
//
// var func_runner = function(func){
//   var number = 3
//   func()
// }
// func_runner(fn)


//exercise__4

var multiplies_by = function(number){
return function(number2){
  console.log(number * number2);
  }
}



// Underscore

var products = [{
    name: "Go Set a Watchman",
    category: "books",
    selling_points: ["Controversial", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
    price: 25,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
}, {
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
}, {
    name: "How to Win Friends & Influence People",
    category: "books",
    selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
    price: 8,
    picture_url: "http://htmlgiant.com/wp-content/uploads/2013/11/HowtoWinFriendsandInfluencePeopleCover.jpg"
}, {
    name: "Dark Side of the Moon",
    category: "music",
    selling_points: ["Collector's Edition", "Trippy", "Good for late night existential crises"],
    price: 100,
    picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
}, {
    name: "Thriller",
    category: "music",
    selling_points: ["Classic MJ", "The 80's greatest contribution to human progress"],
    price: 19,
    picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
}, {
    name: "Ella & Luis",
    category: "music",
    selling_points: ["How could you not?", "Seriously, though..."],
    price: 110,
    picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
}]


var x = _.first(products)
console.log(x)
$('#featured').html(JSON.stringify(x));


var y = _.last(products)
$('#clearance').html(JSON.stringify(y));



var map = _.map(list, iteratee, [context])

//오늘은 여기까지 !
//nderscore를 사용한 Functional Programming!
//http://underscorejs.org/
