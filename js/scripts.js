$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
    var sentence = $("#inputSent").val();
    var sentenceArray = sentence.split('');
    for (var i = 0; i < sentenceArray.length; i++) {
        sentenceArray[i] = sentenceArray[i].replace('e', '-').replace('a','-').replace('i','-').replace('o','-').replace('u','-')
        };
        newSentence = sentenceArray.join(' ');
  });
});




//********* without for loop**********
//
// $(document).ready(function(){
//   $("#formOne").submit(function(event){
//     event.preventDefault();
//     var sentence = $("#inputSent").val();
//
//     var res = sentence.split("a").join('-');
//     var resB = res.split("e").join('-');
//     var resC = resB.split("i").join('-');
//     var resD = resC.split("o").join('-');
//     var resE = resD.split("u").join('-');
//
//
//     console.log(resE);
//   });
// });
