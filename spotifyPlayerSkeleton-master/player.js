$(document).on("ready", function () {

  $(".getartist").on("click", function (event) {
    
    var SEARCHTERM = $(".js-takeartist").val();
    
    console.log("searching for:"+SEARCHTERM);

    var search = $.get("https://api.spotify.com/v1/search?type=track&query="+SEARCHTERM, function(tracks){
        
        var result_search = tracks.tracks.items[0];
        
        show_track_info(result_search);

     });
 
  });

  var show_track_info = function(result_search){

    var name_track = result_search.name;
    var artist_name = result_search.artists[0].name;
    var image = result_search.album.images[0].url;
    var song_preview = result_search.preview_url;

    $('.title').text(name_track);
    $('.author').text(artist_name);
    // $('.author').html("<a ")
    $('.author').html( '<a href="#" id="'+album.id+'" class="show_tracks">'+ alb_name +'</a>' );
    $('.cover_img').attr('src', image);
    $('.js-player').attr('src', song_preview);


  };

  var play_pause = function(){

    $(".btn-play").on("click", function (event){
     
        if ($('.btn-play').hasClass('disabled')){
          $('.js-player').trigger('play');
          $('.btn-play').removeClass('disabled');
          $('.btn-play').addClass('playing');

        }else{
          $('.js-player').trigger('pause');
          $('.btn-play').removeClass('playing');
          $('.btn-play').addClass('disabled');
        }

    });

  }();

    // Define a function to print the player's current time
  function printTime () {
    var current = $('.js-player').prop('currentTime');
    console.debug('Current time: ' + current);
    $('progress').attr('value', current)

    if (current >= 30) {
      $('.js-player').trigger('pause');
      $('.btn-play').removeClass('playing');
      $('.btn-play').addClass('disabled');
      $('progress').attr('value', 0);
    } 
  }
  // Have printTime be called when the time is updated
  $('.js-player').on('timeupdate', printTime);

});



