"use strict";

// const form = document.querySelector("form");

// form.addEventListener("submit", submitHandler);
// function submitHandler(e) {
//   e.preventDefault();

//   //валідація first name під час відправки форми
//   const [nameInput] = document.querySelectorAll("input");

//   if (/^[A-Z][a-z]{2,19}$/.test(nameInput.value)) {
//     nameInput.classList.add("valid");
//     nameInput.classList.remove("invalid");
//   } else {
//     nameInput.classList.remove("valid");
//     nameInput.classList.add("invalid");
//   }
// }
//-------------------------------------------------------------------
//   //валідація first name під час заповнення форми
//   const [nameInput] = document.querySelectorAll("input");
//   nameInput.addEventListener('input', inputHandler)

//    function inputHandler(e){
//     if (/^[A-Z][a-z]{2,19}$/.test(e.target.value)) {
//         nameInput.classList.add("valid");
//         nameInput.classList.remove("invalid");
//       } else {
//         nameInput.classList.remove("valid");
//         nameInput.classList.add("invalid");
//       }
//    }
//-----------------------------------------------------------------------------------

// валідація на всі  inputs
const INPUTS_REG_EXP = {
  "first-name": /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  "last-name": /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  email: /^.+@.+$/,
  phone: /^\+380\d{9}$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*_].*).{8,32}$/,
  "password-confirmation":
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*_].*).{8,32}$/,
};

const inputs = document.querySelectorAll("input");

inputs.forEach((i) => {
  i.addEventListener("input", inputHandler);
});

function inputHandler(e) {
      console.dir(e.target);
  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
}
