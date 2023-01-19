export const fetchAdvice = () =>{
    const url = "https://api.adviceslip.com/advice";
    const promise = fetch(url);
    return promise.then(response =>{return response.json();})
    .then(data =>{
        return Promise.resolve(data)
    }).catch(error => {
        console.error(`Something went wrong with the request: ${error.message}`);
    })
}
    