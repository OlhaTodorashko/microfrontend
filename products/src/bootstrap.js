import faker from 'faker';

const mount = (el) => {
  let products= '';

  for (let i =1; i <= 5; i++) {
    const name = faker.commerce.productName();

    products += `<div>${i}: ${name}</div>`;
  }

  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products-remote-dev-only'); // unique id should be;

  if (el) mount(el); // we are running in isolation
}

export { mount };
