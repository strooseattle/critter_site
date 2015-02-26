$(window).load(function(){

        //makes border around top nav links when user hovers over them

        $('#topNav a').hover(
          function() {
        $(this).addClass('hover');
          }, function() {
        $(this).removeClass('hover');
        });





        //races critters when button is pressed.
        $('#startRace').on('click', function() {
          function Critter(name, speed, focus) {
            this.name = name;
            this.speed = speed;
            this.focus = focus;
            this.position = 0;
            this.race = function() {
              this.position += (Math.random() * this.speed * (this.focus/10)) ;
            }
          }

          var rabbit = new Critter("Peter the Rabbit", 9, 2.5);
          var cat = new Critter("Snowball the Cat", 7, 3.75);
          var fish = new Critter("Roger the Fish", 0.1, 9.5);
          var turtle = new Critter("Myrtle the Snapping-Turtle", 3, 9);

          while (rabbit.position <= 60 && cat.position <= 60 && fish.position <= 60 && turtle.position <= 60) {
            rabbit.race();
            cat.race();
            fish.race();
            turtle.race();
          }


          $('#turtleOutcome').html("Her position is " + turtle.position.toFixed(2));
          $('#rabbitOutcome').html("His position is " + rabbit.position.toFixed(2));
          $('#catOutcome').html("Her position is " + cat.position.toFixed(2));
          $('#fishOutcome').html("His position is " + fish.position.toFixed(2));


          if (rabbit.position > cat.position && rabbit.position > fish.position && rabbit.position > turtle.position) {
            console.log(rabbit.name + " won the big critter-race!")
            $('#rabbit').addClass('winner').append('<figcaption> WINNER </figcaption');

          }
          else if (cat.position > rabbit.position && cat.position > fish.position && cat.position > turtle.position) {
            console.log(cat.name + " won the big critter-race!")
            $('#cat').addClass('winner').append('<figcaption> WINNER </figcaption');
          }
          else if (fish.position > rabbit.position && fish.position > cat.position && fish.position > turtle.position) {
            $('#fish').addClass('winner').append('<figcaption> WINNER </figcaption');
          }
          else {
            $('#turtle').addClass('winner').append('<figcaption> WINNER </figcaption');

          };
        });


  // data visualization


});