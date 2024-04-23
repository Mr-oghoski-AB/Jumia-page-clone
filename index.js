const Data = "https://fakestoreapi.com/products"
const imgElement = document.getElementById("imgElement")
const title = document.getElementById('title')
const description = document.getElementById('description')

//fecht
fetch(Data)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        imgElement.src = data[0].image;
        imgElement.style.display = 'block';
        title.innerHTML = data[0].title
        description.innerHTML += data[0].description

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

const list = document.getElementById('list')
const btn = document.getElementById('line-container')

btn.addEventListener ('click', toggleMiniBar) 

function toggleMiniBar() {
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

// document.addEventListener ('click', (e) => {
//     if (list.style.display === "block"){
//         list.style.display = "none";
//         console.log('it worked');
//     }
// })


    