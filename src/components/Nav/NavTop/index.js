// imported modules
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import cartActions from 'redux/cart/cartActions';
import {
   ShoppingCartIcon, SearchIcon, MenuIcon,
   UserCircleIcon
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
      <div className="fixed top-0 w-full md:h-20 h-16 shadow z-40 bg-paper">
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
            <p
               onClick={() => router.push('/')}
               className="button md:flex hidden w-1/4 text-lg"
            >
               Tech Commerce
            </p>

            {/* search */}
            <div className="md:w-2/4 w-full sm:px-8 md:px-0">
               <div className="w-full md:h-10 h-8 flex items-center space-x-2 py-1 px-2 shadow rounded-md">
                  <SearchIcon className="md:h-5 h-4 text-gray-500" />
                  <input
                     type="text"
                     placeholder="Search"
                     className="w-full h-full bg-transparent focus:outline-none placeholder-gray-500
                     focus:placeholder-opacity-0"
                  />
               </div>
            </div>

            {/* tools */}
            <div className="md:w-1/4 flex items-center justify-end md:space-x-2">

               {/* user */}
               <UserCircleIcon
                  className="md:h-10 h-9 p-2 rounded-full button hover-active-gray text-icon"
               />

               {/* cart */}
               <div
                  onClick={() => router.push('/cart')}
                  className="relative button hover-active-gray p-2 rounded-full"
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
