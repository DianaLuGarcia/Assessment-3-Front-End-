console.log("hello world");

const submitBtn = document.querySelector(#'')
function handleSubmit(evt) {
  evt.preventDefault();

  console.log("form submit");
};

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);
