// imported modules
import store from '../store';

// actions
const cartActions = {
   loadProducts: () => {
      let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
      store.dispatch({
         type: 'LOAD_PRODUCTS',
         payload: cartProducts ? cartProducts : []
      })
   },

   loadQuantityProducts: () => {
      let quantityProducts = 0;
      JSON.parse(localStorage.getItem('cartProducts'))?.map(product => {
         quantityProducts = quantityProducts + product.quantity;
      })
      store.dispatch({
         type: 'LOAD_QUANTITY_PRODUCTS',
         payload: quantityProducts
      })
   },

   loadTotalAmount: () => {
      let totalAmount = 0;
      JSON.parse(localStorage.getItem('cartProducts'))?.forEach(product => {
         totalAmount = totalAmount + (product.price * product.quantity);
      })
      store.dispatch({
         type: 'LOAD_TOTAL_AMOUNT',
         payload: totalAmount
      })
   },

   addToCart: (product) => {
      store.dispatch({
         type: 'ADD_TO_CART',
         payload: product
      })
   },

   removeToCart: (product) => {
      store.dispatch({
         type: 'REMOVE_TO_CART',
         payload: product
      })
   },

   increaseQuantity: (product) => {
      store.dispatch({
         type: 'INCREASE_QUANTITY',
         payload: product
      })
   },

   decreaseQuantity: (product) => {
      store.dispatch({
         type: 'DECREASE_QUANTITY',
         payload: product
      })
   }
}

// export module
export default cartActions;