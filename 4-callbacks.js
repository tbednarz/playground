const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined)
        callback(undefined, [1,4,7])
    }, 2000);
}

doWorkCallback((error,result) => {
    if(error){
        return console.log("Cant connect")
    }
    console.log(result)
})