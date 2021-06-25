// imported modules
import { useEffect } from 'react';
import { connect } from 'react-redux';
import cartActions from 'redux/cart/cartActions';
import CartProduct from './CartProduct'

// create component
const CartPage = ({ cartProducts, totalAmount }) => {

   // effect after rendering
   useEffect(() => {
      cartActions.loadTotalAmount();
   }, [])

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-12 pt-6 pb-10 md:px-4 px-2"
      >
         <div
            className="w-full rounded-md flex lg:flex-row lg:space-x-4 lg:space-y-0
            flex-col space-y-6"
         >

            {/* products */}
            <div className="lg:w-3/4 w-full flex flex-col space-y-4">
               {
                  cartProducts.map(product => (
                     <CartProduct key={product.id} product={product} />
                  ))
               }
            </div>

            {/* purchase panel */}
            <div
               className="lg:w-1/4 w-full flex flex-col 
               space-y-6 p-2 rounded-md lg:items-start items-end"
            >
               {/* total amount */}
               <div
                  className="flex items-center lg:justify-start justify-end
                  space-x-6 font-roboto text-icon w-full"
               >
                  <p className="md:text-xl text-base">TOTAL:</p>
                  <p className="md:text-xl text-base truncate">$ {totalAmount}</p>
               </div>

               {/* divider */}
               <div className="border-b border-gray-500 border-opacity-40 w-full"></div>

               {/* button to buy */}
               <button className="button button-blue md:w-28 w-24 md:h-10 h-8 rounded-md">
                  Buy Now
               </button>
            </div>

         </div>
      </div>
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   cartProducts: state.cartState.products,
   totalAmount: state.cartState.totalAmount
})

// export component
export default connect(mapStateToProps)(CartPage);
