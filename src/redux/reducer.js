// imported modules
import { combineReducers } from 'redux';
import themeReducer from './theme/themeReducer';

// create root reducer
const reducer = combineReducers({
     themeState: themeReducer
})

// export root reducer
export default reducer;