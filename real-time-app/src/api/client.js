const axios = require('axios');

export const api = axios.create ({
    baseURL: "https://dev.livemes.com/node-api/metaverso/dashboard",
    headers: {
        get: {
            ApiKey: "D6557086B36A4F959F7C305681E810FC",
        }
    }
})
