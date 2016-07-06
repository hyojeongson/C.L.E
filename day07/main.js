var hero, bad_guy;

hero = prompt('are you strong?');

if( hero === "strong"){
  bad_guy = prompt("are you weak?");
  if( bad_guy === "weak"){
    console.log('적이 약하군, 아주 쉬운 싸움이겠어');
  } else {
    console.log('만만한 상대가 아니군, 끝까지 싸워보자!');

  }
}

    // var a = prompt("오늘 기분이 어떤가요? 기분이 좋으면 0, 별로면 1")
    //
    // if( a === '1' ) {
    //   alert("힘내세요")
    // }
    // else {
    //   alert("기분 좋은데로 더 힘내세요")
    // }

    // var a = prompt("비밀번호를 적어주세요")
    //
    // if( a === '123456'){
    //   alert("환영합니다")
    // }
    // else {
    //   window.location = "http://www.google.com"
    // }


    // 데이트신청이 들어오면 허락할거야 만약
    // 괜찮은 사람이면
    //
    // 만약(if) 괜찮은 사람이 아니라면, 이번주에 데이트잡힌게 3개 이하이거나 주말에 계획이 없으면
    // 그래 한번 만나보지 뭐.
    //
    // 이도저도 아니라면 정중이 거절해야지.

    // var person = prompt("그사람이 어때요?")
    // if (person === '괜찮은 사람'){
    //   console.log ("시간되요, 일요일에 뵈요!")
    // }
    // else if ( dates_this_week < 3 || !weekend_plans) {
    //   console.log('뭐, 안될거야 없죠');
    // }
    // else {
    //   console.log("생각해 주셔서 감사해요, 근데 이번에 미국에 제 친구가 있어서요");
    // }

    // var name, age, gender, is_member, thirsty, drink_of_choice;
    // var name = prompt("이름을 적어주세요");
    // var age = prompt ("나이를 입력해주세요");
    // var gender = prompt ("성별을 입력하세요(M,W)");
    // var genderText;
    //
    // if( is_member === false || age <= 21 ){
    //   if(gender === "M"){
    //     genderText = "사장님";
    //   }else{
    //     genderText = "사모님";
    //   }
    //   alert( genderText + " 죄송합니다 가입 할 수 없습니다");
    // }else {
    //   if(gender === "M"){
    //     genderText = "미스터";
    //   }else {
    //     genderText = "미스";
    //   }
    //   alert( genderText + "웹사이트에 온 것을 환영합니다. ");
    //   var thirsty = prompt( "목이마르신가요? 무슨 음료를 원하세요?")
    // }
    //
    // if (thirsty === "우유"){
    //   window.location = "http://www.google.com"
    // }else {
    //   alert( name +"님" + "지금즉시" + thirsty +"드리겠습니다." )
    // }
