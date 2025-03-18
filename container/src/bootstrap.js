import { mount as productsMount } from 'products/ProductsIndex'; // './ProductsIndex': './src/index'
import 'cart/CartShow'; // './CartShow': './src/index'

productsMount(document.querySelector('#dev-products-host'));

console.log('Container');