'use strict';
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
    h1.innerHTML = "To jest nowa zawartość h1";
});