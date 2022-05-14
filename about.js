console.log("hello world");

//Add an event listener that listens for a mouseover event.
// When the user mouses over the picture on the page (cat or rubber duck)
//The page should alert give the user a compliment.

//const img = document.querySelector("cat");
//const img = document.getElementById("cat");
document.getElementById("cat").addEventListener("mouseover", compliment);

function compliment() {
  alert("Hello Beautiful!");
}

//Change the event listener that is listening for the Contact Us form to submit.
//Instead of doing a console.log message on submit, the form should alert the user that the form has been submitted successfully.
//Use the alert function in Javascript.
function handleSubmit(evt) {
  evt.preventDefault();
  //console.log("form submit");
  console.log(1);
  alert("Form Submitted Successfully!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);
