// This is the initial call out of the variable
const currentdate = document.querySelector("#currentyear");

// Variable for the current date
const today = new Date();

/* The green text is a string that is deployed in the element with currentyear ID
by the "innerHTML" property. */
currentdate.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)} </span>`;


// Last modify
const pattern = /last_modif\s*=\s*([^;]*)/;

const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
    document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname
        }`;

    if (isFinite(lastVisit)) {
        
        // Replaced the alert to the innerHTML property to insert a span with the date of change
        const currentModify = document.querySelector("#lastModified");
        const dateModify = new Date();
        currentModify.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(dateModify)} </span>`;
    }
}
