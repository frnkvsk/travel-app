import React, {useReducer} from 'react';

import DestinationsContext from '../DestinationsContext';
import DestinationsReducer from '../reducers/DestinationsReducer';
import { destinations } from '../../data/destinations';


const DestinationsProvider = ({children}) => {   

    const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
      destinations
    });

    return (
      <DestinationsContext.Provider value={{destinationsData, dispatch}}>
         {children}
      </DestinationsContext.Provider>
    )
}

export default DestinationsProvider;