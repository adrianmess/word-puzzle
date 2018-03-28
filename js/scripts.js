$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentence = $("#inputSent").val();

    var res = sentence.split("a").join('-');
    var resB = res.split("e").join('-');
    var resC = resB.split("i").join('-');
    var resD = resC.split("o").join('-');
    var resE = resD.split("u").join('-');


    console.log(resE);
  });
});
