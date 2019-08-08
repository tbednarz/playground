const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1,4,7])
        reject("CANT CONNECT")
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log("success")
    console.log(result)
}).catch((error) => {
    console.log("ERROR: ", error)
})