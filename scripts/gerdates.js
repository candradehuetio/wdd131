// This is the initial call out of the variable
const currentdate = document.querySelector("#currentyear");

// Variable for the current date
const today = new Date();

/* The green text is a string that is deployed in the element with currentyear ID
by the "innerHTML" property. */

currentdate.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)} </span>`;


alert(document.lastModified);

let oLastModif = new Date(document.lastModified);




