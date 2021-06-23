// imported modules
import {
   ShoppingCartIcon,
   SearchIcon,
   MenuIcon
} from '@heroicons/react/outline'

// create component
const NavTop = () => {

   // render
   return (
      <div className="fixed top-0 w-full md:h-20 h-16 shadow z-50 bg-default">
         <div
            className="max-w-screen-lg mx-auto h-full w-full flex items-center
            space-x-2 px-2"
         >
            {/* menu button */}
            <div className="md:hidden button hover-active-gray p-2 rounded-full">
               <MenuIcon className="h-5 text-icon" />
            </div>

            {/* logo */}
            <p className="md:flex hidden w-1/4 text-lg">Tech Commerce</p>

            {/* search */}
            <div className="md:w-2/4 w-full">
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
            <div className="md:w-1/4 flex items-center justify-end md:space-x-3">
               <p className="md:flex hidden">home</p>
               <div className="relative button hover-active-gray p-2 rounded-full">
                  <ShoppingCartIcon className="md:h-6 h-5 text-icon" />
                  <p
                     className="absolute -top-0.5 right-0 flex items-center justify-center
                     rounded-full bg-blue-500 text-white md:h-5 md:w-5 h-4 w-4
                     pb-1 font-medium"
                  >
                     3
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

// export component
export default NavTop
