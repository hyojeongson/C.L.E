var book1 = {
    id : '#book1',
    name : "프란츠카프카",
    category : "category1",
    price : 13000,
    picture_url :"img/book1.jpg",
    selling_points : "good"
}

var book2 = {
    id : '#book2',
    name : "비톨트",
    category : "category2",
    price : 12000,
    picture_url :"img/book2.jpg",
    selling_points : "좋아요"
}

var album1 = {
  id : '#album1',
  name : "album1",
  category : "category1",
  price : 8000,
  picture_url :"img/album1.jpg",
  selling_points : "good"
}

var album2 = {
  id : '#album2',
  name : "album2",
  category : "category2",
  price : 9000,
  picture_url :"img/album2.jpg",
  selling_points : "좋아요"
}

// var add_to_page = function(obj) {
//
//       $(obj.id + ' .picture_url img').attr('src',obj.picture_url);
//       $(obj.id + ' .name').append( 'Name : ' + obj.name);
//       $(obj.id + ' .category').append( 'Category : ' + obj.category);
//       $(obj.id + ' .price').append('price : $' + obj.price);
//       $(obj.id + ' .selling_points').append( 'Selling point : ' + obj.selling_points);
// }
//
// add_to_page(book1);
// add_to_page(book2);
// add_to_page(album1);
// add_to_page(album2);

var add_to_page = function(obj){
  $('#content').append(
                '<div id="' + obj.id + '">' +
                  '<div class="name">' +
                      obj.name +
                  '</div>' +
                  '<div class="category">' +
                      obj.category +
                  '</div>' +
                  '<div class="price">' +
                      obj.price +
                  '</div>' +
                  '<img src=' +
                      obj.picture_url +
                  '>'+
                '</div>'
  );
}
add_to_page(book1);
add_to_page(book2);
add_to_page(album1);
add_to_page(album2);
