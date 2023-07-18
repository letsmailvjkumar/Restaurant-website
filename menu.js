let selectedItems = [];

const data = [
  {
  id: 1,
  name: "Cheeseburger",
  price: 5.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?cheeseburger"
  },
  {
  id: 2,
  name: "Pizza",
  price: 8.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?pizza"
  },
  {
  id: 3,
  name: "Tacos",
  price: 3.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?tacos"
  },
  {
  id: 4,
  name: "Sushi",
  price: 11.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?sushi"
  },
  {
  id: 5,
  name: "Pasta",
  price: 9.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?pasta"
  },
  {
  id: 6,
  name: "Fried Chicken",
  price: 7.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?fried_chicken"
  },
  {
  id: 7,
  name: "Grilled Cheese Sandwich",
  price: 4.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
  },
  {
  id: 8,
  name: "Steak",
  price: 15.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?steak"
  },
  {
  id: 9,
  name: "Caesar Salad",
  price: 6.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?caesar_salad"
  },
  {
  id: 10,
  name: "Fish and Chips",
  price: 8.49,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
  },
  {
  id: 11,
  name: "Ramen",
  price: 9.49,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?ramen"
  },
  {
  id: 12,
  name: "Burrito",
  price: 7.49,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?burrito"
  },
  {
  id: 13,
  name: "Pho",
  price: 8.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?pho"
  },
  {
  id: 14,
  name: "Pad Thai",
  price: 9.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?pad_thai"
  },
  {
  id: 15,
  name: "Gyro",
  price: 6.49,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?gyro"
  },
  {
  id: 16,
  name: "Ice Cream",
  price: 3.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?ice_cream"
  },
  {
  id: 17,
  name: "Smoothie",
  price: 4.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?smoothie"
  },
  {
  id: "18",
  name: "Apple Pie",
  price: 4.49,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?apple_pie"
  },
  {
  id: 19,
  name: "Chocolate Cake",
  price: 5.49,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
  },
  {
  id: 20,
  name: "Pancakes",
  price: 4.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?pancakes"
  },
  {
  id: 21,
  name: "Cupcake",
  price: 2.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?cupcake"
  },
  {
  id: 22,
  name: "Crepes",
  price: 5.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?crepes"
  },
  {
  id: 23,
  name: "Club Sandwich",
  price: 6.99,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?club_sandwich"
  },
  {
  id: 24,
  name: "Falafel",
  price: 5.49,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?falafel"
  },
  {
  id: 25,
  name: "Curry",
  price: 9.49,
  imgSrc: "https://source.unsplash.com/random/1920x1080/?curry"
  }
  ];
//get menu function
/*async function getMenu(){
    try {
        const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
        const data = await response.json();
        renderData(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
}
getMenu()
*/

function renderData(data) {
    const menu = document.getElementsByClassName("menu")[0];
    for(let i = 0; i < 3; i++){
        let item = data[i];
  
        let elements = `
          <div class="menupart">
                          
              <div class="menu-img">
                  <img src="${item.imgSrc}" class="img1" alt="api image">
              </div>
              <div class="menu-bottom">
                  <div class="menu-text">
                      <p>${item.name}</p>
                      <b>${item.price}$</b>
                  </div>
                  <div class="menu-addcart">
                      <button class="btn1"><img src="./images/add-icon.png" alt=""></button>
                  </div>
              </div>
              
          </div>
        `
        menu.innerHTML += elements;
  }
}
getMenu();

// add an item to a cart
function addToCart(name, price, img){
    const cart = document.getElementById('cart');
    const item = document.createElement("div");
    item.innerHTML = `
    <img class="img5" src="${img}" alt="">
    <div class="item-name">${name}</div>
    <div class="item-price">$${price}</div>
    `;
    cart.appendChild(item);
    selectedItems.push({name, price});
}

// Take Order function
function TakeOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(selectedItems);
        },2500);
    })
}

// Order preparation
function orderPrep(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({order_status: true, paid: false});
        },1500);
    });
}

function placeOrder(){
    orderPrep()
    .then(order_Status => {
        console.log("Order status: ", order_Status);
    })
    .catch(error => {
        console.log("Error occurred during order preparation: ",error);
    });

    let popup= document.getElementsByClassName("model-container")[0];
    popup.style.transform = 'scale(1)';

    let status = document.getElementById('status');
    const message = 'Your Order is Placed. Please Click the Pay Button or Refresh page to Order again';

    status.innerText=message;

    document.getElementById("pay-button").innerText = "Pay Now"
}

// pay order function
function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({order_status: true, paid: true});
        }, 1000);
    });
}

function payment(){
    payOrder()
      .then(orderStatus => {
        console.log("Payment status:", orderStatus);
        
        let status = document.getElementById("status");
        const message = `Payment Successfull`;
        status.innerText = message;
    
        document.getElementById("pay-button").style.display = "none";
        document.getElementById("cancel").innerText = "close";
      })
      .catch(error => {
        console.error("Error occurred during payment:", error);
      });
      
}

const payButton = document.getElementById("pay-button");
  
  payButton.addEventListener("click", function() {
    
    payOrder()
      .then(orderStatus => {
        if (orderStatus.paid) {
          orderStatus.paid = true;
          console.log("Payment completed. Order status:", orderStatus);
          alert("Thank you for eating with us today!");
        } else {
          console.log("Payment not completed.");
        }
      })
      .catch(error => {
        console.error("Error occurred during payment:", error);
      });
  });
  
  //  thank you function
  function thankyouFnc() {
    payOrder()
      .then(orderStatus => {
        if (orderStatus.paid) {
          alert("Thank you for eating with us today!");
        } else {
          console.log("Payment not completed.");
        }
      })
      .catch(error => {
        console.error("Error occurred during payment:", error);
      });
  }
  
  function closePopup(){
  
    const popup = document.getElementsByClassName("model-container")[0];
  popup.style.transform = "scale(0)";

  selectedItems = [];
  const cart = document.getElementById("cart");
  cart.innerHTML = "";
  }
