let selectedItems = [];

//get menu function
async function getMenu(){
    try {
        const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
        const data = await response.json();
        renderData(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
}
getMenu()

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
