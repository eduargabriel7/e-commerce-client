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
      let quantityProducts = JSON.parse(localStorage.getItem('cartProducts'))?.length;
      store.dispatch({
         type: 'LOAD_QUANTITY_PRODUCTS',
         payload: quantityProducts ? quantityProducts : 0
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
   }
}

// export module
export default cartActions;