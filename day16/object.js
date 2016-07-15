// var person = {
//   name : 'Bob',
//   location : 'Los Angeles',
//   age : 56,
//   hobbies : [ 'working', 'partying'],
//   cat : {
//     name : "mr fuszzles",
//     hobbies : [ "being inert", "nudging things off tables"]
//   },
//   party : function(){
//     console.log('dance, dance, cance!');
//   }
// }

//exercise_1

// var person = {
//   name : 'Rebecca',
//   location : 'seoul',
//   age : 25,
//   hobbies : [ 'working', 'running'],
//   cat : {
//     name : 'star',
//     hobbies : [ "being inert", "nudging things off tables"]
//
//   },
//
//   parth : function(){
//     console.log('Party Party!!');
//   }
// }
//
// person.work = function(){
//   console.log("맥도날드에 오신것을 환영합니다, 저는 " + this.name + ". 주문하시겠습니까?")
//   console.log(this.location + "의 날씨는 참좋지요?")
// }
// person.work()
//
// person.workout = function(){
//   console.log(this.name + "님 오늘의 운동은 " + this.hobbies[1] + "입니다.");
// }
// person.workout()
//
//
// person.float_through_life_on_autopilot = function(){
//   this.work()
//   this.workout()
// }


// exercise_4
var car = {
  type : "Honda civic",
  position : 1,
  speed : 10,
  move : function (){
    var prev = this.speed
    this.speed = this.speed +1
    console.log(this.type + " is moving from " + prev + "to" + this.speed)
  }
}

var eat_fn = function(){
  this.hungry = false;
  console.log( this.favorite_food )
}

var party_fn = function(){
  console.log( this.name +"가 미친듯이 춤을 춥니다");
}

var go_to_park_fn = function(){
  this.hungry = true;
  this.location = 'Park';
  console.log( this.location +"   "+ this.hungry)
}

var dog = {
  name : '별이',
  location : 'Tokoy',
  favorite_food : '육포',
  hungry : true,
  party : party_fn,
  eat : eat_fn,
  go_to_park : go_to_park_fn
}


var move_fn = function(){
  this.position++
}

var car1 = {
  type: "Hyundai Civic",
  speed: 5,
  position: 1,
  move: move_fn
}

var car2 = {
  type: "Toyota Corolla",
  speed: 3,
  position: 6,
  move: move_fn
}

// 오늘은 여기까지, Exercise_6해야함. 
