
import { OPEN_MODEL, CLOSE_MODEL } from '../Types/ModelTypes';

const ModelReducer = (state, action) => {
   switch(action.type){
      case OPEN_MODEL:
         return {
            modelStatus: true,
            current: action.payload
         }
     case CLOSE_MODEL:
        return {
            modelStatus: false,
            current: ''
         }
     default:
        return state
   }
}

export default ModelReducer;