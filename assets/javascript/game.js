
  

  var randNumber = "";

  var randNumber = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
// computer generates a random number from 30 to 60)

// console.log(randNumber);

$("#number-to-guess").text(randNumber);


  var counter = 0;

//   // Now for the hard part. Creating multiple crystals each with their own unique number value.

//   // We begin by expanding creating an array to hold the number value of crystals.
  var numberOptions = [];
var numberofCrystals =4;

//   // Next we create a function and for loop to create crystals for every numberOption.
 

for (var i = 0; i < numberofCrystals; i++) {
    var crystalNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// console.log(crystalNumber);
numberOptions.push(crystalNumber);
//assign crystalNumber to numberOptions array

// console.log(numberOptions);
//     // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");


//     // First each crystal will be given the class ".crystal-image".
//     // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

//     // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//     // Each imageCrystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

//   // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === randNumber) {
      alert("You win!");
    }

    else if (counter > randNumber) {
      alert("You lose!!");
    }

  });

//   </script>


