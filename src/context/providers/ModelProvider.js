import React, {useReducer, } from 'react';

import ModelContext from '../ModelContext';
import ModelReducer from '../reducers/ModelReducer';

const ModelProvider = ({children}) => {   

    const [state, dispatch] = useReducer(ModelReducer, {
      modelStatus: false,
      current: ''
    });

    return (
      <ModelContext.Provider value={{state, dispatch}}>
         {children}
      </ModelContext.Provider>
    )
}

export default ModelProvider;