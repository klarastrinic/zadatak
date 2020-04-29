       
  var scrambled = ["akmsuzija","avakr","orme","ašklo","mijaz","žnea","saec", "Ašklo ej odasdan", "Lkara ej xetra"];
  var answers = ["maksuzija","krava","more","škola","zmija","žena","case", "Škola je dosadna", "Klara je extra"];

  var random = Math.floor((Math.random() * 9));
  $(".scrambled").text(scrambled[random]);
  $("#joke-form").on("submit", function(event){
      event.preventDefault();
      var $answer = $(this).find('[type=text]');  
      var answer = $answer.val();           
      if (answer === answers[random]) {
          $('.correct').css("display", "block").fadeOut(2500);
          $answer.val("");
          random = Math.floor((Math.random() * 5));
          $(".scrambled").text(scrambled[random]);
      } else {
          $(".incorrect").css("display", "block").fadeOut(2500);
      }
  });
  
            
    
