const https = require('https')

const url =
  "https://api.darksky.net/forecast/75eba5b5a9e416e571688bc0e937d5a5/40,-75?units=us"



const request = https.request(url, (response)=>{
    let data = ""

    response.on("data", (chunk) =>{
        data = data + chunk.toString()
    })

    response.on("end", () =>{
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on("error", (error)=>{
    console.log("an error" , error)
})
request.end()

