//// ------------- Last modified section------------
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

//// CLICK MENU////

const hamButton = document.querySelector("#menu-icon");
const navigation = document.querySelector(".navigation");
const title = document.querySelector(".title");

hamButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    title.classList.toggle("close");
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Durban South Africa",
        location: "Umhlanga, KwaZulu-Natal, South Africa",
        dedicated: "2011, 1 October",
        area: 19860,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka-shi, Fukuoka Japan",
        dedicated: "1998, 7 May",
        area: 10700,
        imageUrl: 
            "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618-main.jpg"
    },
    {
        templeName: "Quito Ecuador",
        location: " Cumbayá, Quito Ecuador",
        dedicated: "2016, 3 April",
        area: 36780,
        imageUrl: 
            "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
    }
];

// EVENT LISTENERS
createTempleCard(); // default all temples

// old click
const oldTempleClick = document.getElementById("old-temples");
oldTempleClick.addEventListener("click", () => {
    let templeArray = getOldTemples();
    createTempleCard(templeArray);
})

// new click
const newTempleClick = document.getElementById("new-temples");
newTempleClick.addEventListener("click", () => {
    const templeArray = getNewTemples();
    createTempleCard(templeArray);
});

// large click 
const largeTempleClick = document.getElementById("large-temples");
largeTempleClick.addEventListener("click", () => {
    const templeArray = getLargeTemples();
    createTempleCard(templeArray);
})

// small click
const smallTempleClick = document.getElementById("small-temples");
smallTempleClick.addEventListener("click", () => {
    const templeArray = getSmallTemples();
    createTempleCard(templeArray);
})

// menu click
const menuClick = document.getElementById("menu");
menuClick.addEventListener("click", () => {
    createTempleCard()
}) // there is no need of a function


// get old temples function
function getOldTemples() {
  return temples.filter((temple) => {
    const year = new Date(temple.dedicated).getFullYear();
    return year < 1900;
  });
}

// get new temples function
function getNewTemples() {
    return temples.filter((temple) => {
        const year = new Date(temple.dedicated).getFullYear();
        return year > 2000;
    });
}

// get large temples function
function getLargeTemples()
{
    return temples.filter((temple) => {
        return parseFloat(temple.area) > 90000;
    })
}

// get small temples function
function getSmallTemples()
{
    return temples.filter((temple) => {
        return temple.area < 10000;
    })
}



// Create Temple Card
function createTempleCard(filteredTemples=temples)
{
    const container = document.querySelector(".container");
    container.innerHTML = "";

    const fragment = document.createDocumentFragment();

    filteredTemples.forEach(temple => {

        // Creating tags for every image object container
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");
        img.setAttribute("loading", "lazy");
        
        // Appendig everything
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}