// imported modules
import { useEffect } from 'react';
import { connect } from 'react-redux';
import cartActions from 'redux/cart/cartActions';
import Image from 'next/image';
import { XIcon } from '@heroicons/react/outline';
import store from 'redux/store';

// create component
const CartPage = ({ cartProducts, totalAmount }) => {

   // effect after rendering
   useEffect(() => {
      cartActions.loadProducts();
      cartActions.loadTotalAmount();
   }, [])

   // render
   return (
      <div
         className="max-w-screen-xl mx-auto md:pt-28 pt-20 md:px-4 px-2"
      >
         <div
            className="w-full rounded-md flex lg:flex-row lg:space-x-4 lg:space-y-0
            flex-col space-y-4 p-2"
         >
            {/* products */}
            <div className="lg:w-3/4 w-full flex flex-col space-y-4">
               {
                  cartProducts.map(product => (
                     <div
                        key={product.id}
                        className="relative sm:h-32 h-52 flex sm:flex-row sm:space-x-2 sm:space-y-0
                        flex-col space-y-2 shadow rounded-md p-2"
                     >
                        {/* image */}
                        <div className="relative sm:h-full h-2/5 sm:w-1/5 w-full">
                           <Image
                              src={product.image} alt="product-image"
                              layout="fill" objectFit="contain"
                           />
                        </div>

                        {/* title */}
                        <div
                           className="sm:w-2/5 sm:h-full w-full md:text-lg text-sm overflow-auto
                           overscroll-contain flex items-center sm:justify-start justify-center"
                        >
                           {product.title}
                        </div>

                        {/* remove button */}
                        <XIcon
                           onClick={() => cartActions.removeToCart(product)}
                           className="absolute sm:top-2 right-2 top-0
                           button h-8 p-2 hover-active-gray rounded-full text-icon"
                        />

                     </div>
                  ))
               }
            </div>

            {/* purchase panel */}
            <div
               className="lg:w-1/4 w-full lg:h-96 flex flex-col items-center
               space-y-4 shadow lg:p-4 p-2 rounded-md"
            >
               {/* total amount */}
               <p className="md:text-xl text-base font-sans font-medium lg:flex-grow">
                  Total: $ {totalAmount}
               </p>
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
