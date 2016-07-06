// // ex1
// var newdate = function(){
//   var x = new Date()
//   console.log(x)
// }
//
// newdate()
//


// var a = "나는열정적인스트링ㅇㅇㅇㅇㅇㅇ";
// var b = function(){
//   $('#output').append(a);
// }
//
// b()

//side effet없이 value return 하는 function
// var greeter = function(){
//   return 'Hello'
// }
// var greeting = greeter()
//
// console.log(greeting + ", nice to meet you" )
// console.log(greeter() + ", nice to meet you.")

// var saying_gennerator = function(){
//   var phrase = "Heey," + "it's the " + "Fonz."
//   return phrase;
// }
// var saying = saying_gennerator();
//
//
// var broken_saying_generator = function(){
//   var phrase = "Heey," + "it's the" + "Fonz";
//   phrase
// }
// var broken_saying = broken_saying_generator;

// var str1 = "5이하";
// var str2 = "5이상";
// var getSentence = function(){
//
//   var a = Math.floor((Math.random()*10)+1);
//   console.log(a);
//   if(a>5){
//      return str2;
//   }
//   return str1;
// }
//
// var a = 0;
// while ( a <= 10 ) {
//
//   var newSentence = getSentence();
//   $('#output').append('<p>'+ newSentence + '</p>');
//   a++;
// }


// var inspector = function(){
//   console.log(arguments);
// }
// inspector('sss');
// inspector(3+7);
// inspector("hello", 7, true, undefined, null, 3 + 12, "nice to" + " meet you")


// var log_and_return = function(){
//   console.log(arguments);
//   return arguments;
// }
//  var returned_values = log_and_return(10);
//  log_and_return(returned_values);


// var value_logeer = function(value,value1){
//     console.log(value,value1);
// }
// value_logeer("Howdy ho, neighborino!");
//
// value_logeer(3+7);
// value_logeer(3,7);
//
// var doubler = function (num){
//   return num * 2
// }
// var should_be_ten = doubler(5)
// var doubler_value_logger = function (value1, value2){
//   console.log(value1,value2)
// }
//
// doubler_value_logger("hello","how are you");
// doubler_value_logger("hello");
//
// var add = function(num1,num2){
//   return num1 + num2;
// }
// var sum = add(7,12);


// 숫자 3배 값을 return해주는 tripler
// var tripler = function(input){
//   return input*3;
// }
//
// //숫자 두개를 곱해주는
// var times = function(input,input1){
//   return input*input1;
// }
//
//
// // 숫자 두번째 숫자로 나눠주는
// var divide = function(input,input1){
//   return input/input1;
// }
//
// var remainder = function(input,input1){
//   return input % input1;
// }
//
//
// var ex5 = function(){
//   var a = tripler(1);
//   var b = times(a,12);
//   var c = divide(b,2);
//   var d = remainder(c,3);
//   return d;
// }

// string_printer는 #output div를 바꾸는 sideeffect
var string_printer = function(string){
    $('#output').text(string);
}

var funny_sentence = function(noun,adj,verb,adv){
  var funny_sentence = noun + adj + verb + adv ;
  $('#output').append(funny_sentence)
}
