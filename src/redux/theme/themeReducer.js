// imported modules
import themeState from './themeState';

// create theme reducer
const themeReducer = (state = themeState, { type, payload }) => {
   switch (type) {
      case 'LOAD_THEME':
         return {
            theme: payload
         }

      case 'LIGHT_THEME':
         return {
            theme: payload
         }
      case 'DARK_THEME':
         return {
            theme: payload
         }
         
      default:
         return state;
   }
}

// export module
export default themeReducer;