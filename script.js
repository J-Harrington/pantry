let ingredientSubmit = document.getElementById("ingr-submit");
let ingredientInput = document.getElementById("ingr-input");
let ingredientStack = document.getElementById("ingr-stack");

ingredientSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  let ingredient = ingredientInput.value;
  console.log(ingredient);

  let ingredientLi = document.createElement("li");
  ingredientLi.textContent = ingredient;
  ingredientStack.appendChild(ingredientLi);
});
