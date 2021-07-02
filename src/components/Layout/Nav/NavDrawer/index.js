// imported modules
import { useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import themeActions from 'redux/theme/themeActions';
import Categories from './Categories';
import {
   ChevronLeftIcon, HomeIcon, ShoppingCartIcon,
   MoonIcon, SunIcon, TableIcon
} from '@heroicons/react/outline';

// create component
const NavDrawer = ({
   openDrawer,
   setOpenDrawer,
   theme
}) => {

   // state component
   const [drawerAnimation, setDrawerAnimation] = useState('open');
   const [openCategories, setOpenCategories] = useState(false);
   const [menuAnimation, setMenuAnimation] = useState(false);

   // next hooks
   const router = useRouter();

   // on drawer close
   const onDrawerClose = () => {
      setDrawerAnimation('close');
      setMenuAnimation(false);
      setTimeout(() => {
         setOpenDrawer(false);
         setDrawerAnimation('open');
      }, 400);
   }

   // on categories click
   const onCategoriesClick = () => {
      if (openCategories) {
         setMenuAnimation('close');
         setTimeout(() => {
            setOpenCategories(false);
         }, 400);
      }
      else {
         setMenuAnimation('open');
         setOpenCategories(true);
      }
   }

   // render
   return (
      <>
         {
            openDrawer &&
            <>
               {/* menu */}
               <div
                  className={`${drawerAnimation === 'open' ? 'animate-open-drawer' : 'animate-close-drawer'}
                  h-screen xl:w-96 md:w-80 sm:w-72 w-56 flex flex-col fixed z-50 bg-paper`}
               >

                  {/* header */}
                  <div
                     className="py-2 px-4 flex items-center justify-end divider-gray bg-default"
                  >
                     {/* close button */}
                     <ChevronLeftIcon
                        onClick={onDrawerClose}
                        className="button sm:h-10 h-9 p-2 rounded-full hover-active-gray"
                     />
                  </div>

                  {/* home */}
                  <button
                     onClick={() => {
                        router.push('/');
                        onDrawerClose();
                     }}
                     className="flex items-center space-x-2 py-3 sm:px-4 px-2 button hover-active-gray"
                  >
                     <HomeIcon className="button sm:h-10 h-9 p-2 text-icon" />
                     <p className="sm:text-base font-medium">Home</p>
                  </button>

                  {/* cart */}
                  <button
                     onClick={() => {
                        router.push('/cart');
                        onDrawerClose();
                     }}
                     className="flex items-center space-x-2 py-3 sm:px-4 px-2 button hover-active-gray"
                  >
                     <ShoppingCartIcon className="button sm:h-10 h-9 p-2 text-icon" />
                     <p className="sm:text-base font-medium">Shopping Cart</p>
                  </button>

                  {/* categories */}
                  <Categories
                     onCategoriesClick={onCategoriesClick}
                     openCategories={openCategories}
                     menuAnimation={menuAnimation}
                     onDrawerClose={onDrawerClose}
                  />

                  {/* theme */}
                  <button
                     onClick={theme === 'light' ? themeActions.darkTheme : themeActions.lightTheme}
                     className="flex items-center space-x-2 py-3 sm:px-4 px-2 button hover-active-gray"
                  >
                     {
                        theme === 'light'
                           ?
                           <>
                              <MoonIcon className="button sm:h-10 h-9 p-2 text-icon" />
                              <p className="sm:text-base font-medium">Dark Theme</p>
                           </>
                           :
                           <>
                              <SunIcon className="button sm:h-10 h-9 p-2 text-icon" />
                              <p className="sm:text-base font-medium">Light Theme</p>
                           </>
                     }
                  </button>

               </div>

               {/* background shadow */}
               <div
                  onClick={onDrawerClose}
                  className={`${drawerAnimation === 'open' ? 'animate-open-bg-shadow' : 'animate-close-bg-shadow'}
                  fixed h-screen w-full bg-shadow z-40`}
               >
               </div>
            </>
         }
      </>
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   theme: state.themeState.theme
})

// export component
export default connect(mapStateToProps)(NavDrawer);
