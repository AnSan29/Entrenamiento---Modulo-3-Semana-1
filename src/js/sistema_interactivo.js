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
  let userNameValue = userName.value;
  let userAgeValue = parseInt(userAge.value);

  // function to find messages by age
  let message = "";
  if (userAgeValue < 18 && userAgeValue > 0) {
    message = `Hi ${userNameValue}, you are a minor. Keep learning and enjoying the code!`;
    console.log(message);
  }else if (userAgeValue < 0){
    message = "Negative numbers are not accepted";
    console.log(message);
  }else if (userAgeValue >= 18) {
    message = `Hi ${userNameValue}, You are of legal age. Get ready for great opportunities in the world of programming!`;
    console.log(message);
  } else {
    message = "Error: Please enter a valid age in numbers.";
    console.error(message);
    alert(message);
  }
  //add a message variable dynamically to my span
  span.innerText = message;
  span.classList.add("response");
});
