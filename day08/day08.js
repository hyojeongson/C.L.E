// Exercise 1
// var n = 0;
//
// console.log("아래 while loop은 흔히들 카우너라고 합니다 . 숫자를 세기 때문입니다");
//
// while (n <= 100 ) {
//   console.log(n, "ha-ha-ha");
//   n = n + 2;
// }
// console.log('끝');

// // Exercise 2
// var n = 100;
// var song = '<ul class=lyrics>';
//
// while ( n >= 0 ){
//   if (n  !== 0) {
//     song = song + '<li>' + n + "bottles" + (n === 1? '':'s')
//     + "of beer on the wall! chug, chug, chug</li>"
//   }else {
//     song += "<li>no bottles of beer stumble,</li>"
//   }
//   n --
// }
// song += "</ul>"
// document.querySelector('#lyrics').innerHTML = song;


// // Exercise 3
// 마지막 숫자에 ','가 찍히지 않도록 하는 로직.
// var i = 1;
// var n = 30;
// var result = '';
//
// while (i <= n) {
//    if(i === n){
//      result = result + i;
//    }else{
//      result = result + i + ',';
//    }
//
//     i = i + 1;
// }
// document.querySelector('#target').textContent = result;

// // Exercise 4
// p 태그 안에 구분해서 넣어라
// var i = 1;
// var n = 30;
// var result = '';
//
// while (i <= n) {
//     result = result + '<p>' + i + '</p><hr>';
//     i = i + 1;
// }
// document.querySelector('#target').innerHTML = result;


//홀수는 “odd” class를 주시고 짝수는 “even” class를 주세요.
//CSS규칙을 <style> tag에 넣어주시고 “odd” 와 “even”에 서로다른 스타일을 만들어주세요.
// var i = 1;
// var n = 30;
// var result = '';
//
// while (i <= n) {
//     if( i % 2 === 0 ){ // even
//       result = result + "<p class='even'>" + i + '</p>';
//     }else{
//       result = result + "<p class='odd'>" + i + '</p>';
//     }
//
//     i = i + 1;
// }
// document.querySelector('#target').innerHTML = result;


// // Exercise 5
// n개의 정수(integer)를 곱하는 while loop을 써보세요: 예) product= 1 * 2 * 3 * ... * n
// var n = 1, sum = 1;
// var product = 'product = ';
//
// // product = 1 *
// // product = 1 * 2 *
// // product = 1 * 2 * 3 *
//
// while (n <= 10) {
//     if (n === 10) {
//       product = product + n;
//       sum = sum * n;
//     }else{
//       product = product + n + '*';
//       sum = sum * n;
//     }
//   n = n + 1;
// }
//
// document.querySelector('#ex5').innerHTML = product + '<br>';
// document.querySelector('#ex5_1').innerHTML = 'result = ' + sum;


// Exercise 6
// var n = 0;
// var result = "";
//
// while (n <= 20) {
//   if ( n!== 13 && n % 2 === 0 ){
//     console.log("I like the number" + n + ", a nine even number.")
//     result = result + "<p>I like the number" + n + ", a nine even number.<p>";
//   } else if (n !== 13 && n % 2 !== 0) {
//     console.log("I like the number" + n + ", odd is okeay too!");
//     result = result + "<p>I like the number" + n + ", odd is okeay too!<p>";
//
//   } else {
//     console.log("la-la-la, nothing to say here");
//     result = result + "<p>la-la-la, nothing to say here<p>";
//
//   }
//   n++;
// }
// document.querySelector('#ex6').innerHTML = result;

// // Exercise 7
// var n = 0;
// var result = "";
//
// while (n <= 100) {
//   if ( n % 3 === 0 ){
//     console.log("I like the number" + n + ", a nine even number.")
//     result = result + "<p>Fizz" + n + "<p>";
//   } else if (n %5 === 0) {
//     console.log("I like the number" + n + ", odd is okeay too!");
//     result = result + "<p>Buzz" + n + "<p>";
//
//   } else if (n % 3 === 0 && n %5 === 0){
//     console.log("I like the number" + n + ", odd is okeay too!");
//     result = result + "<p>FizzBuzz" + n + "<p>";
//
//   }else {
//     console.log("la-la-la, nothing to say here");
//     result = result + "<p>|<p>";
//
//   }
//   n++;
// }
// document.querySelector('#ex6').innerHTML = result;


// // Exercise 8

// var n = 0;
// var result = "";
//
// while (n <= 100) {
//   if (n % 3 === 0 && n %5 === 0){
//     result = result + "<p class='fizzandbuzz'>Fizz,Buzz" + n + "<p>";
//   } else if ( n % 3 === 0) {
//     result = result + "<p class='fizz'>Fizz" + n + "<p>";
//   } else if (n %5 === 0){
//     result = result + "<p class='buzz'>Buzz" + n + "<p>";
//
//   }else {
//     result = result + "<p>|<p>";
//
//   }
//   n++;
// }
// document.querySelector('#ex6').innerHTML = result;


// // // Exercise 9
// var i = 0 ;
// var n = 10;
// var j ;
// var welcome = "welcome";
//
// while ( i < n ) {
//   j = 0
//   while (j < n ) {
//     welcome = "<p>" + i + "welcome" + n + j + "</p>";
//     j++;
//   }
//   i++;
// }
// document.querySelector('#ex9').innerHTML = welcome;

// Evercise 9
// 숫자파티

var i = 1;
var j = 1;
var n = 10;
var textString = '';

while (i <= n) {
  textString = 'welcome' + i;
  j = 1;
  while (j < i ) {
    if ( j === 1 ) {
      textString = textString + ', meet 1';
    }else if ( j === i-1) {
      textString = textString + ', and ' + j;
    }else {
      textString = textString + ', ' + j;
    }
    j += 1;
  }
  i = i + 1;
  document.querySelector('#ex9').innerHTML = textString;

}
