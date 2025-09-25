
// LAST MODIFIED SECTION
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// CALCULATE WINDCHILL FACTOR
const temperature = 30; //celcius
const windSpeed = 12; //km/h

function calculateWindChill(temp, speed) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.6) + 0.3965 * temp * Math.pow(speed, 0.16));
}

// calling the function and displaying the windchill factor
const windChillElement = document.querySelector(".weather .table_weather tr:nth-child(4) td:nth-child(2)");
windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
