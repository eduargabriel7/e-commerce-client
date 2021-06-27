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
         // clone payload
         const productToAdd = Object.assign({}, payload)
         // verify cart
         const inTheCart = state.products.filter(product => {
            return product.id === productToAdd.id
         })
         if (inTheCart.length > 0) { return state }
         // add quantity
         productToAdd.quantity = 1;
         // add to localStorage
         localStorage.setItem('cartProducts', JSON.stringify(
            [...state.products, productToAdd]
         ))
         return {
            ...state,
            products: [...state.products, productToAdd],
            quantityProducts: state.quantityProducts + 1
         }

      case 'REMOVE_TO_CART':
         // update products
         const productsWithFilter = state.products.filter(product => {
            return product.id !== payload.id;
         })
         // remove in localStorage
         localStorage.setItem('cartProducts', JSON.stringify(productsWithFilter))
         return {
            ...state,
            products: productsWithFilter,
            totalAmount: state.totalAmount - (payload.price * payload.quantity),
            quantityProducts: state.quantityProducts - payload.quantity
         }

      case 'INCREASE_QUANTITY':
         // update products
         const productsWithIncrease = state.products.map(product => {
            product.id === payload.id && product.quantity++;
            return product;
         })
         // increase quantity to localStorage
         localStorage.setItem('cartProducts', JSON.stringify(productsWithIncrease))
         return {
            ...state,
            products: productsWithIncrease,
            totalAmount: state.totalAmount + payload.price,
            quantityProducts: state.quantityProducts + 1
         }

      case 'DECREASE_QUANTITY':
         // update products
         const productsWithDecrease = state.products.map(product => {
            product.id === payload.id && product.quantity--;
            return product;
         })
         // decrease quantity to localStorage
         localStorage.setItem('cartProducts', JSON.stringify(productsWithDecrease))
         return {
            ...state,
            products: productsWithDecrease,
            totalAmount: state.totalAmount - payload.price,
            quantityProducts: state.quantityProducts - 1
         }

      default:
         return state;
   }
}

// export module
export default cartReducer;