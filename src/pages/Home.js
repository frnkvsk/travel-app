import React, { useContext, useState } from 'react';

import Header from '../components/Header';
import Model from '../components/Model';
import ModelContext from '../context/ModelContext';
import { OPEN_MODEL } from '../context/Types/ModelTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';

const Home = () => {
   const { dispatch } = useContext(ModelContext);

   const [state] = useState({
      heading: 'We are travel friends',
      paragraph: 'Come and join us we travel the most famous and beautiful places in the world'
   });
   
   const [registerModel] = useState('registerModel');
   const [loginModel] = useState('loginModel');

   return (
      <>          
         <Header heading={state.heading} paragraph={state.paragraph}>
            <button 
               className='btn-default'
               onClick={() => dispatch({type: OPEN_MODEL, payload: registerModel})}>Get Started</button>
         </Header>
         <Model current={registerModel}>
            <Register current={loginModel}/>            
         </Model>
         <Model current={loginModel}>
            <Login current={registerModel}/>            
         </Model>
      </>
   );
}

export default Home;