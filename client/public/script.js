const resultDiv = document.getElementById('result');
const dateInput = document.getElementById("calendarInput");
const initialUrlAdress = 'https://api.nasa.gov/planetary/apod?api_key=SpJ4pHiKU76pqFPeEE7Uyxe3PDK1O3owKlyC9Z0n';

resultDiv.insertAdjacentElement("beforebegin", dateInput);

const displayInfos = (myData) => {
    return myData.media_type === "image" ? resultDiv.innerHTML = `
                                            <h1>${myData.title}</h1>
                                            <p>${myData.explanation}</p>
                                            <img src="${myData.url}"/>`
                                         :  resultDiv.innerHTML = `
                                            <h1>${myData.title}</h1>
                                            <p>${myData.explanation}</p>
                                            <iframe src="${myData.url}" frameborder="0" allowfullscreen></iframe>`
    
}

const fetchFunction = (url) => {
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {displayInfos(data)
        console.log(data)}
        )
        .catch(error => console.log('ERROR'))
}
fetchFunction(initialUrlAdress);


dateInput.addEventListener('input', () => {
    const selectedDate = dateInput.value;
    const newUrlAdress = `https://api.nasa.gov/planetary/apod?api_key=C8qZBJqYA6fygr6G8UJ0OJx3NeWI6tFzuLqNvzMX&date=${selectedDate}`;
    fetchFunction(newUrlAdress);
})


