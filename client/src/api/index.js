const locationApiKey = "at_rDZ2sUAIQMUH01oazla7xAPR7ZuoY"

export async function getExactLocation() {
    const data = await fetch(`https://geoipify.whoisxmlapi.com/api/v1?apiKey=${locationApiKey}`)
        .then(response => response.json())
    return data
}


// const browserApiKey = "ba436186ef4dfc58d00c7e064f953370"
// export function getBrowserData() {

// }

// fetch("https://api.whatismybrowser.com/api/v2/user_agent_parse", {
//     header: {
//         "API-Key": `${browserApiKey}`,
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// })


