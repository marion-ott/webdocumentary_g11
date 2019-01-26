const locationApiKey = "at_rDZ2sUAIQMUH01oazla7xAPR7ZuoY"
const weatherApiKey = "b07bf4b63a33687ac037fbb7d40a59d7"

export async function getUserLocation() {
    const data = await fetch(`https://geoipify.whoisxmlapi.com/api/v1?apiKey=${locationApiKey}`)
        .then(response => response.json())
    return data
}

export async function getWeather(zip, country) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${weatherApiKey}&units=metric`)
        .then(response => response.json())
    return data
}



