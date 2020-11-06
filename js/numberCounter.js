

let nbr = 0;

$(() => {

  display();

$(document).ready(function() {
    $('#Plus').append(
      $(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'Plus',
        class: 'btn-styled'
      })
    );
  });

$(document).ready(function(){
    $("#myInput").val("0");
});

 $(document).ready(function() {
    $('#Minus').append(
      $(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'Minus',
        class: 'btn-styled'
      })
    );
  });

  $("#Minus").click(()=>{
    nbr--
    display()
  });


  $("#Plus").click(()=>{
  nbr++
  display()
});
});

const display =() => {
  $("#nbr").val(nbr);
  $("#nbr").css("color", "black").css("fontStyle", "normal").css("fontWeight", "normal");
          if (nbr % 2 == 0)
            $("#nbr").css("color", "red");
}
