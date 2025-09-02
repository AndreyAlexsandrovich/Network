export default function apiProducts() {
  const containerProduct = document.querySelector('.product');
  const place = document.querySelector('#places__list');

  fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(json => {
    json.forEach((item) => { 
      const {id, title, price, description, images } = item;
      place.innerHTML = ``

      const itemHTML = `
       <li class="product" id=${id}>
          <div class="product-container">
            <div class="title-wrapper">
              <h2 class="title-product" id="title-product">${title}</h2>
            </div>
            <div class="image-product-wrapper">
              <img src="${images[1]}"
              alt="Обложка товара" class="image-product">
            </div>
            <div class="description-product-wrapper">
                <p class="description-product" id="description">${description}</p>
                </div>
            <div class="price-product">
              <p class="price" id="price-product">${price}$</p>
            </div>
            <div class="buy-product">
              <button class="buy">Купить товар</button>
            </div>
          </div>
        </li>
      `

      place.insertAdjacentHTML('beforeend', itemHTML);
    })
  })
  .catch(error => console.log('Ошибка:', error));
}

