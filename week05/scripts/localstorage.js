const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");

// Load from local storage
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});



function displayList(item) {
    // Create li and delete button
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');

    // Add text and classes
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');

    // Append to DOM
    li.append(deletebutton);
    list.append(li);

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    return localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // remove ❌
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}



button.addEventListener("click", function () {

    if (input.value.trim() != "") {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(chaptersArray);

        input.value = "";
        input.focus();
    }

});

