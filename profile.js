// In profile.js, create event listeners that check for a click on each of these buttons.
// If a user clicks on “My Favorite Color”, it should alert the user of your favorite color, and so on.
// Add a class to each button element from the previous section. Then, add CSS to
// styles.css that makes the buttons larger and yellow.

const favColor = document.querySelector(".color");
const favPlace = document.querySelector(".place");
const favRitual = document.querySelector(".ritual");

favColor.addEventListener("click", function () {
  alert("My Favorite Color is Teal");
});

favPlace.addEventListener("click", function () {
  alert(
    "My favorite place is either camping in Southern Utah or Relaxing on a warm beach"
  );
});

favRitual.addEventListener("click", function () {
  alert(
    "My favorite ritual is waking up and letting my pets place outside while I water my garden"
  );
});
