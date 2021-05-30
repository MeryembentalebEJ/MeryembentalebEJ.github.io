// when we write on the keyboard
$(".text-note").on("keyup", function(e){
    // 13 == enter button on the keyboard
   if(e.keyCode == 13 && $(".text-note").val() != ""){
      var task = $("<div class='task'></div>").text($(".text-note").val()); // the div that we have in the html 
      // give the funtion click to the font-awsome when completed (delete)
      var del = $("<i class='fa fa-trash'></i>").click(function(){
         var p = $(this).parent();
         p.fadeOut(function(){
            p.remove();
         });
      });
      // give the funtion click to the font-awsome when completed (check)
      var check = $("<i class='fa fa-check'></i>").click(function(){
          var p = $(this).parent();
          p.fadeOut(function(){
             $(".completed").append(p);
             p.fadeIn(); // only trash font-awsome appears 
          });
          $(this).remove(); //once it appears you can remove it!
      });

      task.append(del, check);
      $(".notCompleted").append(task);
    //   To clear the completed tasks
      $(".text-note").val("");
   }
});

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const containerOne = document.querySelector(".containerOne");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      containerOne.classList.add("fadeIn");
    });
  };
  startGame();