var get_pictures = function(searchTerm){
  $.ajax({
    url: "https://api.imgur.com/3/gallery/search?q=" + encodeURI(searchTerm),
    headers: { "Authorization": "Client-ID e3776adbe9c5fb9" },
    success: function(response){
      console.log(response)
    }
  });
}
get_pictures("baba deer");

$('#user-search').click(function(){
 var text = $('input').val()
  get_pictures(text);
});
