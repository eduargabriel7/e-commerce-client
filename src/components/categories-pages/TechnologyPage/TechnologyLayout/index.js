// imported modules
import OptionsPanel from '../OptionsPanel';
import OptionsBar from '../OptionsBar';

// create component
const TechnologyLayout = ({ children }) => {

   // render
   return (
      <div
         className="min-h-screen max-w-screen-xl mx-auto md:pt-28 pt-20 md:pb-72 pb-56 px-4
         flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-2"
      >
         {/* panel */}
         <OptionsPanel />

         {/* responsive bar */}
         <OptionsBar />

         {/* products */}
         {children}

      </div>
   )
}

// export component
export default TechnologyLayout;
