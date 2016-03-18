var phrases = [
  'i like tourtles',
  'yo bitch whadup',
  'did it for da lulz',
  'aaaaaaaa',
  'bbbbbbbbbb',
  'ccccccccccc',
  'kill me'
];




$(document).ready(function(){
  

  var randomNumber = Math.floor(Math.random() * phrases.length);

  $("p").text(phrases[randomNumber]);


    $(".changebutton").click(function(){

        var randomNumber = Math.floor(Math.random() * phrases.length);

        $("p").text(phrases[randomNumber]);

    });


    document.querySelector('.takephrase').addEventListener('keypress', function (eventTarget){
      
        var code = eventTarget.keyCode || eventTarget.which;
         
        if(code === 13) { 

              eventTarget.preventDefault();

              phrases.push($('.takephrase').val()); 

              document.getElementById('phrase').value = ''; 
            
         }
    });


    var showList = function(){

      $(".showlist").click(function(){
        $('.mylist').empty();
        $(phrases).each(function (i){
          $('.mylist').append('<li>'+phrases[i]+'<a href="#" class="del_phrase" value="'+i+'">X</a></li>');       
        });
      });
    }();

    var hideList = function(){
      $(".hidelist").click(function(){
        $('.mylist li').remove();
      })
    }();

    var removePhrase = function(){
      
    }
      
});

