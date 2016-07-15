// HTML
// <div id="current-sound"></div>

// SoundCloud를 사용할 수 있도록 권한을 받습니다.
SC.initialize({ client_id: "d29ad0142b2cd0a47ad2e561334c8e0f" });

// "word"를 검색 후 나오는 album의 첫 번째 음악을 실행합니다.
var search = function(word){
  SC.get('/tracks', { q: word }, function(tracks) {

    SC.oEmbed(
      tracks[0].uri,
      { auto_play: true },
      document.querySelector('#current-sound')
    );

  });
  // 검색결과 음악들을 보여줍니다.
  SC.get('/tracks', { q: word }, function(tracks) {
    tracks.forEach(function(track) {
      $('body')
        .append($('<p></p>')
        .text(track.artwork_url + track.title + track.uri));
    });
  });


}

// user-search text 검색을 받아 
$('#user-search').click(function(){
 var text = $('input').val()
  search(text);
});
