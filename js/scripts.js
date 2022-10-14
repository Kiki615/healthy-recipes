//$(function() {
  //  $(".carousel").carousel( { interval: 2000 } );
   // $("#carouselButton").click(function(){
     //   if ($("#carouselButton").children("i").hasClass("fa-pause")) {
       //     $(".carousel").carousel("pause");
        //    $("#carouselButton").children("i").removeClass("fa-pause");
        //    $("#carouselButton").children("i").addClass("fa-play");
       // } else {
      //      $(".carousel").carousel("cycle");
      //      $("#carouselButton").children("i").removeClass("fa-play");
     //       $("#carouselButton").children("i").addClass("fa-pause"); 
   //     }
 //   });
//});

$(function() {
    $(".carousel").carousel( {interval: 2000, pause: "hover"} );
    $("#carouselButton").on("click",function(){
       if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
       } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
       }
    });


     // Open card 1 button Modal
     $("#card1Button").on("click",function(){
      $("#card1Modal").modal('show');
      });

      // Open card 2 button Modal
     $("#card2Button").on("click",function(){
      $("#card2Modal").modal('show');
      });

      // Open card 3 button Modal
     $("#card3Button").on("click",function(){
      $("#card3Modal").modal('show');
      });

      // Print Recipe Card
      $("#printCard").on("click",function(){
        window.print();
        });
});
