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
