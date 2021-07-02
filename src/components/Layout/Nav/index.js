// imported modules
import { useState } from 'react';
import NavTop from './NavTop';
import NavDrawer from './NavDrawer';

// create component
const Nav = () => {

   // state component
   const [openDrawer, setOpenDrawer] = useState(false);

   // render
   return (
      <>
         <NavTop
            setOpenDrawer={setOpenDrawer}
         />
         <NavDrawer
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
         />
      </>
   )
}

// export component
export default Nav
