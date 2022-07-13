let cityName = prompt("Enter city:");
cityName = cityName.toLowerCase();
let cities = [
    {
        name: "kiev",
        temperature: "11",
        humidity: "12"
    },
    {
        name: "lviv",
        temperature: "13",
        humidity: "22"
    },
    {
        name: "oslo",
        temperature: "12",
        humidity: "70"
    },
    {
        name: "paris",
        temperature: "12",
        humidity: "70"
    }

]
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

if (cities.some(e => e.name === cityName)) {
    let yourCity = cities.find(city => city.name == cityName);
    let capitalized = capitalizeFirstLetter(yourCity.name);
    alert(`It is currently ${yourCity.temperature}°C in ${capitalized} with a humidity of ${yourCity.humidity}%`)
  }
else {
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}"`)
}