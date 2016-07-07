//Objects
//1.my_cat 이라는 variable을 만들고 빈 object를 assign하세요.
//
var my_cat = {
  "name" : "bell",
  "age" : 6,
  "alive" : false
}

my_cat.favorite_toy = ["a","b",];
my_cat.napping_spot = ["sleep","bad"] ;


// Exercise2

var my_dream_life = {};

my_dream_life.property_key = "job";

var another_property = {
  "salary" : "man"
}
my_dream_life.next_property = 'car';

// Exercise 3

var car = {
  make : "Toyota"
}

car ["mode1"] = "camry"
car ["mode1"]
car.mode1

car.mode1 = "Prius"
car ["mode1"]
car.mode1
var prop = 'year'

car.prop = "1992"

//Exercise 4

//Exercise 5

var obj = {
  greeting : 'howdy',
  direction : 'down',
  color : 'red',
  'spaces-and-dashes can be used': ' but need to have quotes'
}

for (var key in obj){
  if(key=='direction'){
    $('div').append(obj[key]);
  }

}

// for (var key1 in my_cat){
//   console.log(my_cat.key1)
// }

var target_key = {
  "greeting" : "..."
}

for(var key1 in target_key){
  $('div').append(target_key[key1]);
}


//exercise_7

var favorites = []
var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']

var obama_jobs = []
var politicos = {
  secretary_of_state : 'hillary clinton',
  potus : 'barack obama',
  flotus : 'micelle obame',
  vice_prez : 'joe biden',
  gov_of_california : 'jerry brown'

}


//famous array를 룹스루(loop through)하여 “a”로 시작하는 이름들만 찾아 favorites array에 넣으세요.
var log_me = function(famous){
  if(famous.charAt(0)==='a'){
    console.log(famous)
  }

  }
famous.forEach(log_me);

//politicos object을 loop through하여 사람들의 이름을 famous array안에 넣으세요. (Hint: .push)

for ( var key in politicos){
  famous.push(politicos[key]);
}

//politicos object을 loop through하여 이름에 ‘obama’라고 써있는 사람들의 직업이름을 obama_jobs array에 넣으세요.
