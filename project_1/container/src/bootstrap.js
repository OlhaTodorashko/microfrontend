import { mount as productsMount } from 'products/ProductsIndex'; // './ProductsIndex': './src/index'
import { mount as cartMount } from 'cart/CartShow'; // './CartShow': './src/index'

productsMount(document.querySelector('#dev-products-host'));
cartMount(document.querySelector('#dev-cart-host'));

console.log('Container');