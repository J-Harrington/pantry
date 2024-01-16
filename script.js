let ingredientSubmit = document.getElementById("ingr-submit");
let ingredientInput = document.getElementById("ingr-input");

ingredientSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  let ingredient = ingredientInput.value;
  console.log(ingredient);
});
