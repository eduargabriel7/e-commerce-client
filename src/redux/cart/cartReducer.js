// imported modules
import cartState from './cartState';

// create cart reducer
const cartReducer = (state = cartState, { type, payload }) => {
   switch (type) {

      case 'LOAD_PRODUCTS':
         return {
            ...state, products: payload
         }

      case 'LOAD_QUANTITY_PRODUCTS':
         return {
            ...state, quantityProducts: payload
         }

      case 'LOAD_TOTAL_AMOUNT':
         return {
            ...state, totalAmount: payload
         }

      case 'ADD_TO_CART':
         const inTheCart = state.products.filter(product => {
            return product.id === payload.id
         })
         if (inTheCart.length > 0) { return state }
         // add quantity
         payload.quantity = 1;
         // add to localStorage
         localStorage.setItem('cartProducts', JSON.stringify(
            [...state.products, payload]
         ))
         return {
            ...state,
            products: [...state.products, payload],
            quantityProducts: state.quantityProducts + 1
         }

      case 'REMOVE_TO_CART':
         // remove in localStorage
         localStorage.setItem('cartProducts', JSON.stringify(
            state.products.filter(product => {
               return product.id !== payload.id;
            })
         ))
         return {
            ...state,
            products: state.products.filter(product => {
               return product.id !== payload.id;
            }),
            totalAmount: state.totalAmount - Math.round(payload.price),
            quantityProducts: state.quantityProducts - payload.quantity
         }

      default:
         return state;
   }
}

// export module
export default cartReducer;