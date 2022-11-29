const productsEl = document.querySelector(".slider");


function renderProducts(){
  products.forEach( (product) => {
    productsEl.innerHTML += `
    <div class="card" onclick="currentSlide(2)">
    <div class="card-content">
        <img src="${product.imgSrc}" alt="" class="card-img">
        <h1 class="card-title">${product.name}</h1>
        <div class="card-body">
            <div class="card-star">
                <span class="rating-value">4.5</span>
                <span class="star">&#9733;</span>
            </div>
            <p class="card-price"><small>$</small>${product.price}</p>
        </div>
        <div class="card-footer">
            <button class="btnn btn-border add-to-cart" onclick="currentSlide(2)">Shop Now!</button>
        </div>
    </div>
</div>
    `;
  });
}
renderProducts();
