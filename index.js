const Data = "https://fakestoreapi.com/products"
const imgElement = document.getElementById("imgElement")
const title = document.getElementById('title')
const description = document.getElementById('description')
const price = document.getElementById('price')
const strikePrice = document.getElementById('s-price')
const category = document.getElementById('category')


fetch(Data)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        //get the image 
        imgElement.src = data[0].image;
        imgElement.style.display = 'block';

        //get the title
        title.innerHTML = data[0].title

        //get the discription
        description.innerHTML += ' ' + data[0].description;

        //get the price 
        price.innerHTML = '$'+ data[0].price;

        //get the category 
        category.innerHTML += ' ' + data[0].category;


        //get the strike price
        let percent = 29/100;
        strikePrice.innerHTML = '$' + `${ (data[0].price * percent) + data[0].price }` 

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


//mini bar codes 
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




// Set the date and time for the countdown (in UTC format)
const countdownDate = new Date('2024-04-26T23:59:59').getTime();

// Update the countdown every second
const countdown = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining until the countdown date
  const distance = countdownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the element with id="countdown"
  document.getElementById('countdown').innerHTML = 'Time Left: ' + days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'Countdown expired';
  }
}, 1000); // Update the countdown every 1 second (1000 milliseconds)





//get the item bar 
const itemsLeft = document.getElementById('itemsLeft')
const barContainer =  document.getElementById('barContainer')
const bar = document.getElementById('bar')

async function fetchData(){
    const response = await fetch(Data);
    const data = await response.json()
    const count  = data[0].rating.count;
    
    itemsLeft.innerHTML = count + ' items left'
}

fetchData();





//get other products 
let Product = document.getElementById('Product');
let others = document.getElementById ('others')
let otherProducts = document.getElementById ('other-products')

async function fetchProduct(){
    const response = await fetch(Data);
    let productData = await response.json();
    console.log(productData);
    let i = 1;
    
    for (i = 0 ; i <= productData.length;  i++ ) {
        otherProducts.innerHTML = '<p>' + `${ productData[i].title}` + '</p>';
        otherProducts.innerHTML += '<p>' + `${ productData[i].category}` + '</p>';
        otherProducts.innerHTML += '<p>' + '$'+ `${ productData[i].price}` + '</p>';
        otherProducts.innerHTML += ' <button>View product</button>';


        let moreNodes = others.cloneNode(true)
        Product.appendChild(moreNodes);
     
    }

}

fetchProduct();


//search products

async function searchProduct(){
    try{
        const search = document.getElementById('search').value;
        let firstChild = document.querySelector('#products div:nth-child(1)')
        const response = await fetch(Data)

      

        for (let i = 0 ; i <= response.length; i++ ){
            if (search == response[i].title) {
                otherProducts.innerHTML = '<p>' + `${ response[i].title}` + '</p>';
                otherProducts.innerHTML += '<p>' + `${ response[i].category}` + '</p>';
                otherProducts.innerHTML += '<p>' + '$'+ `${ response[i].price}` + '</p>';
                otherProducts.innerHTML += ' <button>View product</button>';

                Product.insertBefore(others, firstChild);
            }
        }
        
    }
    catch(error){
        console.error(error);
    }
}

