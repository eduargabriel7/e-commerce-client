// imported modules
import { useState, useEffect } from 'react';

// create component
const ClientSideRendering = ({ children }) => {

   // state component
   const [hasMounted, setHasMounted] = useState(false);

   // effect after rendering
   useEffect(() => {
      setHasMounted(true);
   }, []);

   // server side
   if (!hasMounted) {
      return null;
   }

   // render
   return (
      <>
         {children}
      </>
   )
}

// export component
export default ClientSideRendering;
