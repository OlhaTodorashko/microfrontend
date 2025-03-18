import faker from 'faker';

let products= '';

for (let i =1; i <= 5; i++) {
  const name = faker.commerce.productName();

  products += `<div>${i}: ${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;