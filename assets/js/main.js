$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...");

})

$('.card-title').click(function() {

  $(".card-text").toggle();
});

$(document).ready(function() {
  $("h6").on({
    dblclick:function() {
      $(this).css("color","red");
    },
  });
});
