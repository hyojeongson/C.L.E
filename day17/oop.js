var posts = [] //post라는 Arrays
var post = {
  url : 'http://jsonplaceholder.typicode.com/posts/',
  $el : $('<div class="post">').appendTo($('body')), //el라는 jQuery, 다음 코드를 넣어라.

  initialize: function(id){ //initialize는 id라는 값을 받는 function
    this.$el.attr('id',id) // $el에 받은 id는 id를 추가한다.
    this.url = 'http://jsonplaceholder.typicode.com/posts/'
    this.url += id //url에다가 들어온 id를 추가로 넣어라.
    console.log(this.url)
    var thisPost = this //this = post
    $.get(this.url, function(data){ // get메소드 서버에 보내고 받아왔어 post.url
      console.log(this) // this=post console.log 찍기.
      thisPost.attributes = data //Post attributes : data를 넣어줘라.
      thisPost.render() //thispost = post
    });
    posts.push(this) // posts위에 선언된 array에 this(post)의 실행값을 넣어라.
  },
  render: function(){ //render 라는 function은
    this.$el.append([ // this = post $el에 아래 코드를 append해라
      $('<div>').addClass('title').text(this.attributes.title),
      $('<div>').addClass('body').text(this.attributes.body)
    ]);
  }
}

var post_factory = function(id) {
  post.initialize(id)
}
for(var i=75; i<= 90; i++){
  post_factory(i)
}
// post.initialize(1)
// post_factory(1)

post.highlight = function(){
  this.active = true
}
