import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import NavContext from '../context/NavContext';
import { NAV_TOGGLE } from '../context/Types/NavTypes';

export default function Nav() {
   const {state, dispatch} = useContext(NavContext);   

   return (        
      <>
         {state ? <div className='navLayer' /> : ''}
         
         <div className={`nav nav-${state ? 'open' : 'close'}`}>
            <div className='nav__content'>
               <li>
                  <Link 
                     to='/' 
                     onClick={() => dispatch(NAV_TOGGLE)}
                     >Home</Link>               
               </li>
               <li>
                  <Link 
                     to='/about'
                     onClick={() => dispatch(NAV_TOGGLE)}
                     >About</Link>               
               </li>
            </div>
         </div>
      </>
   );
}

