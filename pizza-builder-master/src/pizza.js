$(document).ready(function(){
$(".btn").removeClass("active");
$(".pep").toggle();
$(".mushroom").toggle();
$(".green-pepper").toggle();
$(".sauce").toggleClass("sauce-white");
$(".crust").toggleClass("crust-gluten-free");

});

$(".btn-pepperonni").click(function(){

if($(".btn-pepperonni").hasClass("active")){
  $(".btn-pepperonni").removeClass("active");
}

else{
  $(".btn-pepperonni").addClass("active");
}

  $(".pep").toggle();
});

$(".btn-mushrooms").click(function(){
 if($(".btn-mushrooms").hasClass("active")){
   $(".btn-mushrooms").removeClass("active");
 }
 else{
   $(".btn-mushrooms").addClass("active");
 }
 $(".mushroom").toggle();

});

$(".btn-green-peppers").click(function(){
 if($(".btn-green-peppers").hasClass("active")){
   $(".btn-green-peppers").removeClass("active");
 }
 else{
   $(".btn-green-peppers").addClass("active");
 }
 $(".green-pepper").toggle();
});



$(".btn-sauce").click(function(){
 if($(".btn-sauce").hasClass("active")){
   $(".btn-sauce").removeClass("active");
 }
 else{
   $(".btn-sauce").addClass("active");
 }
 $(".sauce").toggleClass("sauce-white");
});

$(".btn-crust").click(function(){
 if($(".btn-crust").hasClass("active")){
   $(".btn-crust").removeClass("active");
 }
 else{
   $(".btn-crust").addClass("active");
 }
 $(".crust").toggleClass("crust-gluten-free");
});