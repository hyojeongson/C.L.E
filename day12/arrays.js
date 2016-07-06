// Arrays (배열)
//recipe

var recipes = [] ;

recipes[0] = "rice";
recipes[1] = "beer";
recipes[2] = "carry";
recipes[3] = "soup";

var first = recipes[0];
var last_step = recipes[3];


//Array는 수집된 값을 효율적으로 다루기 위해,
//.length 와 같은 property와 .push() 와 같은 method를 가지고 있습니다.

// exercise_2 Bucket List
//
// var bucket_list = [];
//
// bucket_list[0] = "paragliding" ;
// bucket_list[1] = "africa";
//
// bucket_list.push("세계여행");
// bucket_list.push("세계여행2");
//
// bucket_list.unshift("맛집탐방");
// bucket_list.unshift("맛집탐방2");
//
// var dying_wish = bucket_list.pop();
// var do_it_now = bucket_list.shift();


//exercise_3
// var words = ['a', 'b', 'c', 'd']
// var i = 0
// while (i < words.length) {
//   console.log(words[i])
//   i++
// }


var bucket_lists = ["paragliding", "세계여행", "맛집탐방" ];
  var i=0;
  while (i < bucket_lists.length) {
      $('#bucket-list').append("<p>"+ bucket_lists[i]+"</p>");

      i++;
  }


  //exercise 4
  // var str = "one two three";
  // var arr = str.split('');
  // var new_str = arr.join(' and a ');

// 1. scrambled_poem variable에 .split(' ')을 사용하여 결과값을 scrambled_array 라는 array에 저장하세요.
// 2. unscrambled_array라는 이름의 새로운 array를 만드세요.
// 3. scrambled_array의 length가 0이 될때까지, 첫 번째 값과 마지막 값을 빼서 unscrambled_array 라는 array에 저장하세요.

// var scrambled_pome = "roses red are bacon crispy i bacon love and is blue violets are";
//
// var scrambled_array = scrambled_pome.split(' ');
//
// var unscrambled_array=[];
//
//   unscrambled_array.push(scrambled_array[0]);
//   unscrambled_array.push(scrambled_array.pop());
//
// console.log(unscrambled_array);
//
// unscrambled_array.join(' ');


//For loop
// var words = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// for (var i = 0; i < words.length; i++) {
//   console.log(words[i])
// }

var words = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

var reverser = function(arr){
  var reversedArr = [];

  for(var i = arr.length-1; i >= 0 ; i--){
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

//.forEach

var words = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var log_me = function(word){
  console.log(word)
}
words.forEach(log_me);

// exercise_7
var array_duplicator = function(inputArray){
  var outputArray = []
  return outputArray
};

var original = [1, 2, 3, 4]
var duplicated = array_duplicator(original)

duplicated.pop();
