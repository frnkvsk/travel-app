import React, { useContext } from 'react';

import NavContext from '../context/NavContext';
import {NAV_TOGGLE} from '../context/Types/NavTypes';

const Toggle = () => {
   const {state, dispatch} = useContext(NavContext);
   
   return (
         <div 
            className={`toggle toggle-${!state ? 'open' : 'close'}`} 
            onClick={() => dispatch({type: NAV_TOGGLE})}>
            <span></span>
            <span></span>
            <span></span>
         </div>         
      );
};

export default Toggle;