//// ------------- Last modified section------------
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

//// CLICK////

const hamButton = document.querySelector("#menu-icon");
const navigation = document.querySelector(".navigation");
const title = document.querySelector(".title");

hamButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    title.classList.toggle("close");
})