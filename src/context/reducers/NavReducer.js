
import { NAV_TOGGLE } from '../Types/NavTypes';

const NavReducer = (state, action) => {
   switch(action.type){
      case NAV_TOGGLE:
         return !state;
      default:
         return state
   }
}

export default NavReducer;