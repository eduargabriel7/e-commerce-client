// imported modules
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import cartActions from 'redux/cart/cartActions';
import Searcher from './Searcher';
import {
   ShoppingCartIcon, MenuIcon
} from '@heroicons/react/outline'

// create component
const NavTop = ({
   quantityCartProducts,
   setOpenDrawer
}) => {

   // next hooks
   const router = useRouter();

   // effect after rendering
   useEffect(() => {
      cartActions.loadQuantityProducts();
   }, [])

   // render
   return (
      <div className="md:h-20 h-16 w-full top-0 fixed z-40 shadow bg-paper">
         <div
            className="max-w-screen-lg mx-auto h-full w-full flex items-center
            space-x-2 px-2"
         >
            {/* menu button */}
            <div
               onClick={() => setOpenDrawer(true)}
               className="button hover-active-gray p-2 rounded-full"
            >
               <MenuIcon className="h-5 text-icon" />
            </div>

            {/* logo */}
            <div className="w-1/4 md:flex hidden">
               <p
                  onClick={() => router.push('/')}
                  className="text-base font-medium button hover:underline"
               >
                  E-Commerce
               </p>
            </div>

            {/* searcher */}
            <div className="md:w-2/4 w-full sm:px-8 md:px-0">
               <Searcher />
            </div>

            {/* tools */}
            <div className="md:w-1/4 flex items-center justify-end">

               {/* cart */}
               <div
                  onClick={() => router.push('/cart')}
                  className="p-2 relative button hover-active-gray rounded-full"
               >
                  <ShoppingCartIcon
                     className="md:h-6 h-5 text-icon"
                  />
                  <p
                     className={`${quantityCartProducts < 1 && 'hidden'}
                     absolute -top-0.5 right-0 flex items-center justify-center
                     rounded-full bg-blue-500 text-white md:h-5 md:w-5 h-4 w-4
                     md:font-medium font-roboto md:text-xs text-xxs`}
                  >
                     {quantityCartProducts}
                  </p>
               </div>
               <p
                  onClick={() => router.push('/cart')}
                  className="md:flex text-base font-medium hidden button hover:underline"
               >
                  Cart
               </p>
            </div>
         </div>
      </div>
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   quantityCartProducts: state.cartState.quantityProducts
})

// export component
export default connect(mapStateToProps)(NavTop);
