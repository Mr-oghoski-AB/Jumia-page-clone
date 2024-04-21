const Data = "https://fakestoreapi.com/products"
const imgElement = document.getElementById("imgElement")
const title = document.getElementById('title')
const description = document.getElementById('description')

fetch(Data)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        imgElement.src = data[0].image;
        imgElement.style.display = 'block';
        title.innerHTML = data[0].title
        description.innerHTML = data[0].description

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })


    