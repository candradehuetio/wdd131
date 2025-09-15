const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");

button.addEventListener("click", function () {


    if (input.value.trim() != "") {

        /// creating li and delete button elements
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        /// what the user types in the input will be text in the li
        li.textContent = input.value;

        /// delete button created and set to the right side of the li element
        deleteButton.textContent = "❌";
        li.appendChild(deleteButton);

        /// append everything to the list <ul> element
        list.append(li);


        /// click event to remove the 
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
        });


        input.value = "";
        input.focus();
    }

});