/*Animacion para la vista splash*/
var splashView = $(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});

/*Funcion para pintar la comida*/
function paintFood() {
  var $insertImage = $("<div />", {"class": "img-col"});
  $insertImage.append("photo");
}

/*Funcion para filtrar los tipos de comida*/

function searchFood() {
  var food = $('#searcher').val().toLowerCase();

  if ($("#searcher")) {

  }

}


$(document).ready();
