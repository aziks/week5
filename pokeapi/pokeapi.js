$( document ).ready(function() {

  $(".getpoke").click(function(){

    var min = 1;
    var max = 151;

    function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $.get('http://pokeapi.co/api/v2/pokemon/'+ getRandomInt(min,max) +'/', function(data){
      
      console.log(data)
      var pokemon = data;
      handlePokemon(pokemon);
    
    });

  });

  function handlePokemon (pokemon) { 
    
        var html = '<li>'+ pokemon.id + '</li>' + '<li>'+ pokemon.name + '</li>';
        $('.js-pokemon-list').append(html);

  };

});



