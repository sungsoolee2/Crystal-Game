//set our initial variabes//
var counter = 0;
var wins = 0;
var loses = 0;
var randNumber = "";
var numberOptions = [];
var crystalNumber = 0;

$(document).ready(function () {
  function generateNum() {
    var compNumber = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
    // computer generates a random number from 30 to 60)

    // console.log(randNumber);

    $("#number-to-guess").text(compNumber);
    randNumber = compNumber;
    return (randNumber);
  }

  //inital game //

  generateNum();
  // console.log(randNumber);
  generateCrystal();
  //generated rand numbers for crystal and display crystals//





  // }
  function generateCrystal() {
    //   // Now for the hard part. Creating multiple crystals each with their own unique number value.

    //   // We begin by expanding creating an array to hold the number value of crystals.

    var numberofCrystals = 4;

    //   // Next we create a function and for loop to create crystals for every numberOption.


    for (var i = 0; i < numberofCrystals; i++) {
      crystalNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      // console.log(crystalNumber);
      numberOptions.push(crystalNumber);
      //assign crystalNumber to numberOptions array
      // console.log (numberOptions+"this is no.opt");
      // console.log(numberOptions);




      //     // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");


      //     // First each crystal will be given the class ".crystal-image".
      //     // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");

      //     // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", "./assets/images/crystal.jpg");

      //     // Each imageCrystal will be given a data attribute called data-crystalValue.
      //     // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);

      //     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
    }


  }




  //   // This time, our click event applies to every single crystal on the page. Not just one.
  $(document).on("click", ".crystal-image", function () {
    // console.log("we are clicking");

    //     // Determining the crystal's value requires us to extract the value from the data attribute.
    //     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    //     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    //     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    //     // We then add the crystalValue to the user's "counter" which is a global variable.
    //     // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    //update counter on screen//
    $("#counter").text(counter);





    //     game logic and play game again//
    if (counter === randNumber) {
      alert("You win!");

      wins++;
      $("#wins").text(wins);
      $("#crystals").empty();
      // console.log(numberOptions);
      numberOptions = [];
      counter = 0;
      $("#counter").text(counter);
      generateNum();
      generateCrystal();
    }

    else if (counter > randNumber) {
      alert("You lose!!");

      loses++;
      $("#loses").text(loses);
      $("#crystals").empty();
      // console.log(numberOptions);
      numberOptions = [];
      counter = 0;
      $("#counter").text(counter);
      generateNum();
      generateCrystal();

    }



  });

});





