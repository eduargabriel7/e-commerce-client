// imported modules
import { combineReducers } from 'redux';
import themeReducer from './theme/themeReducer';
import cartReducer from './cart/cartReducer';

// create root reducer
const reducer = combineReducers({
     themeState: themeReducer,
     cartState: cartReducer
})

// export root reducer
export default reducer;