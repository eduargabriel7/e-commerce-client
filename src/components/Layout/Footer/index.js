// imported modules
import GithubIcon from 'assets/GithubIcon';
import LinkedinIcon from 'assets/LinkedinIcon';
import TwitterIcon from 'assets/TwitterIcon';

// create component
const Footer = () => {

   // render
   return (
      <div
         className="absolute bottom-0 md:h-48 h-28 w-full
         flex sm:flex-row flex-col items-center justify-center 
         sm:space-x-4 sm:space-y-0 space-y-2 bg-footer"
      >
         {/* paragraph */}
         <p className="md:text-xl font-semibold text-gray-600 text-opacity-80 text-center">
            Developed by Gabriel Sarmiento
         </p>

         {/* links */}
         <div className="flex items-center md:space-x-4 space-x-2">
            <a
               href="https://github.com/eduargabriel7"
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-full button hover-active-gray"
            >
               <GithubIcon
                  className="md:h-12 h-9 p-2 text-gray-600 text-opacity-80"
               />
            </a>
            <a
               href="https://www.linkedin.com/in/eduardo-gabriel-sarmiento/"
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-full button hover-active-gray"
            >
               <LinkedinIcon
                  className="md:h-12 h-9 p-2 px-2.5 text-gray-600 text-opacity-80"
               />
            </a>
            <a
               href="https://twitter.com/Eduardo26882144"
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-full button hover-active-gray"
            >
               <TwitterIcon
                  className="md:h-12 h-9 p-2 text-gray-600 text-opacity-80"
               />
            </a>
         </div>
      </div>
   )
}

// export component
export default Footer;
