export default function apiProducts() {
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
      const { title, price, description, images } = item;
       const templateProduct = document.querySelector('#template-product').content.cloneNode(true);
       templateProduct.querySelector('#title-product').textContent = title;
       templateProduct.querySelector('#price-product').textContent = `${price + '$'}`;
       templateProduct.querySelector('#description').textContent = description;
       templateProduct.querySelector('#image-prduct').src = images[0];
      

       place.appendChild(templateProduct);
    })
  })
  .catch(error => console.log('Ошибка:', error));
}

