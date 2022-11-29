const productsEll = document.querySelector(".slider2");
const cartItemsEll = document.querySelector(".cart-body-shop2");
const subtotalEll = document.querySelector(".cart-subtotal");
const totalpriceEl = document.querySelector(".total-price");
const totalItemsInCartEl = document.querySelector(".cart-nav2");

function renderProductz(){
  productx.forEach( (productz) => {
    productsEll.innerHTML += `
    <div class="card">
    <div class="card-content">
        <img src="${productz.imgSrc}" alt="" class="card-img">
        <h1 class="card-title">${productz.name}</h1>
        <div class="card-body">
            <div class="card-star">
                <span class="rating-value">4.5</span>
                <span class="star">&#9733;</span>
            </div>
            <p class="card-price"><small>$</small>${productz.price}</p>
        </div>
        <div class="card-footer">
            <button class="btnn btn-success" onclick="currentSlide(6);addTobag(${productz.id})">Buy Now</button>
            <button class="btnn btn-border add-to-cart addd" onclick="addTobag(${productz.id})">Add To Cart</button>
        </div>
    </div>
</div>
    `;
  });
}
renderProductz();



// cart array 
let cartz = JSON.parse(localStorage.getItem("CARTZ")) || [];
updateCartz();

// ADD TO CART
function addTobag(id) {
    //check if product already exist in cart
    if (cartz.some((itemz) => itemz.id === id)) {
      changeNumberOfUnitz("plus", id);
    } else {
        const itemz = productx.find((productz) => productz.id === id);

        cartz.push({
          ...itemz,
          numberOfUnitss : 1,
        });
       
    }

    updateCartz();
}

// update cart
function updateCartz() {
  renderCartItemz();
  renderSubtotalz();

  // save cartz to local storage
  localStorage.setItem("CARTZ", JSON.stringify(cartz))
}

// calculate and render subtotalz
function renderSubtotalz(){
  let totalPricez = 0, 
  totalItemz = 0;

  cartz.forEach((itemz) => {
    totalPricez += itemz.price * itemz.numberOfUnitss;
    totalItemz += itemz.numberOfUnitss;
    
  });
  subtotalEll.innerHTML = ` ${totalItemz}`
  totalpriceEl.innerHTML = `${totalPricez.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItemz;
}

// render cart items 
function renderCartItemz(){
  cartItemsEll.innerHTML = "" // clear cartz element
  cartz.forEach((itemz) =>{
    cartItemsEll.innerHTML += `
    <tr>
    <td><a onclick="removeItemFromCartz(${itemz.id})"><i class="far fa-times-circle"></i></a></td>
    <td><img src="${itemz.imgSrc}" alt="${itemz.name}"></td>
    <td>${itemz.name}</td>
    <td>$${itemz.price}</td>
    <td class="addsub">
      <i class="fa-solid fa-square-plus" onclick="changeNumberOfUnitz('plus', ${itemz.id})"></i>
      <div class="numberofunits">${itemz.numberOfUnitss}</div>
      <i class="fa-solid fa-square-minus" onclick="changeNumberOfUnitz('minus', ${itemz.id})"></i>
    </td>
    <td><select name="" id="">
      <option value="">XXL</option>
      <option value="">XL</option>
      <option value="">Large</option>
      <option value="">Medium</option>
      <option value="">Small</option>
      <option value="">XS</option>
    </select></td>
  </tr>
    `
  });
}

// remove item from cartz
function removeItemFromCartz(id) {
  cartz = cartz.filter((itemz) => itemz.id !== id);

  updateCartz();
}


// change number of units for an item
function changeNumberOfUnitz(actionz, id) {
  cartz = cartz.map((itemz) => {
    let numberOfUnitss = itemz.numberOfUnitss;

    if (itemz.id === id) {
      if (actionz === "minus" && numberOfUnitss > 1) {
        numberOfUnitss--;
      } else if (actionz === "plus" && numberOfUnitss < itemz.instock) {
        numberOfUnitss++;
      }
    }

    return {
      ...itemz,
      numberOfUnitss,
    };
  });

  updateCartz();
}