let inputForm = document.querySelector("#userForm");
let input = document.querySelector("#userInput");
let table = document.querySelector(".result");


inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableOf = input.value;

  table.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const message = `${tableOf} x ${i} = ${tableOf * i}`;

    table.innerHTML += `${message} <br>`;
  }
});
