$(document).ready(function() {

  var do_search = function(){

    $(".getartist").click(function (e){

      e.preventDefault();

      var SEARCHTERM = $(".takeartist").val();

      var search = $.get("https://api.spotify.com/v1/search?type=artist&query="+SEARCHTERM, function(artists){
        
        var result_search = artists.artists.items;
        
        show_search(result_search);

      });

    });

  }();
 
  var show_search = function (result_search){

    $('.artists_list').empty();

    result_search.forEach(function imagesli (artist){

      if (artist.images.length !== 0){
        var img = artist.images[0].url;
      } else {
        var img = 'img/no-image.jpg';
      }

      var html = '<li class="artist_container">' + artist.name +'</br> <img src='+img+'  /> <button id='+artist.id+' type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">SHOW ME THE ALBUMS</button> </li>';
      $('.artists_list').append(html);

      });
      search_albums();

  };

   var search_albums = function(){

    $('[data-toggle="modal"]').click(function (){


      var id_artist = this.id;

        var search = $.get("https://api.spotify.com/v1/artists/"+id_artist+"/albums", function(albums){
          
          var result_albums = albums.items;

          show_album_search(result_albums);

        });

      });

    };  

   var show_album_search = function (result_albums){

      result_albums.forEach(function albumsli (album){

        if (album.length !== 0){
          var alb_name = album.name;
        } else {
          var alb_name = '';
        }

          var html = '<li><a href="#" id="'+album.id+'" class="show_tracks">'+ alb_name +'</a></li>';
          $('.modal-content').append(html);
          // $('.modal').append(html);
          search_tracks();
       });

    };

    var search_tracks = function(){

    $('.show_tracks').click(function (){


      var id_album = this.id;

        var search = $.get("https://api.spotify.com/v1/albums/"+id_album+"/tracks", function(tracks){
          
          
          var result_tracks = tracks.items;

          show_tracks_search(result_tracks);

        });

      });

    };

    var show_tracks_search = function (result_tracks){

      $('.modal-content').empty();

      result_tracks.forEach(function tracksli (track){

// <a href="#" id="'+album.id+'" class="show_tracks">'+ alb_name +'</a>
          var html = '<li><a href="#" class"listen_track" target_preview='+track.preview_url+' >'+ track.name +'</a></li>';
     
          $('.modal-content').append(html);
    
       });

      listen_preview();

    };

    var listen_preview = function (){

console.log("jsandj");

      $('.listen_track').click(function (){

        $('.modal-content').empty();

        var preview = this.target_preview;

        var html = '<audio controls autoplay> <source src='+preview+' type="audio/ogg">Your browser does not support the audio element.</audio>';
          $('.modal-content').append(html);

      });
    };
 


});

   