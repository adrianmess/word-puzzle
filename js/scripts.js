$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentence = $("#inputSent").val();
    // var result = sentence.removeWord('e');
    // var wordArray = sentence.split(" ");
     var res = sentence.split("a").join('-');
    //  var resA= res.join("");
     var resB = res.split("e").join('-');
    //  var resC = resB.join("");
     var resC = resB.split("i").join('-');
    //  var resE = resD.join("");
     var resD = resC.split("o").join('-');
    //  var resG = resF.join("");
     var resE = resD.split("u").join('-');
    //  var resI = resH.join("");

    console.log(resE);
    // var res1 = res.split("e");
    // var res2 = res1.split("i");
    // console.log(res);


    //  wordArray.forEach(function(word){
    //    if
    //  });
    //
    //
    // = ["a", "e","i", "o", "u"];
    // vowels.forEach(function(element) {
    //
    // vowels.
    // var wordFuck = sentence.replace(vowels, "-");

    // console.log(wordFuck);

    // alert(wordFuck);
    // ["a", "e","i", "o", "u"];
    //
    // wordFuck.forEach(function(vowel){
    //   if(vowel)


  });
});
