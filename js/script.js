"use strict";

let adviceEL = document.querySelector("#adNum");
let quoteEl = document.querySelector(".adviser p");
let diceBtnEL = document.querySelector("button");

diceBtnEL.addEventListener("click", async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceEL.textContent = `#${data.slip.id}`;
    quoteEl.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.log(error);
    alert('Please Connect To Your Internet')
  }
});
