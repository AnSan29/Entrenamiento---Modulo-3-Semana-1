// constant for document
const d = document;

// input selection with let variable
let userName = d.getElementById("userName");
let userAge = d.getElementById("userAge");

//button selection
const boton = d.getElementById("button");

// span selection
const span = d.getElementById("response");

// add click listener to my button
boton.addEventListener("click", (e) => {
  e.preventDefault();

  // find value of inputs and parse if necessary
  let user_name = userName.value;
  let user_age = parseInt(userAge.value);

  // function to find messages by age
  let message = "";
  if (user_age < 18 && user_age > 0) {
    message = `Hola ${user_name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    console.log(message);
  }else if (user_age < 0){
    message = "no se aceptan numeros negativos";
    console.log(message);
  }else if (user_age >= 18) {
    message = `Hola ${user_name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    console.log(message);
  } else {
    message = "Error: Por favor, ingresa una edad válida en números.";
    console.error(message);
    alert(message);
  }
  //add a message variable dynamically to my span
  span.innerText = message;
  span.classList.add("response");
});
