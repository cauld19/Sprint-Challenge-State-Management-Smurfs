import {
    SMURF_LOAD_START, 
    SMURF_LOAD_SUCCESS, 
    SMURF_LOAD_FAILURE, 
    SMURF_ADD_SUCCESS, 
    SMURF_ADD_START, 
    SMURF_ADD_FAILURE,
    SMURF_DELETE_START,
    SMURF_DELETE_SUCCESS,
    SMURF_DELETE_FAILURE,
    SMURF_MODIFY_START,
    SMURF_MODIFY_SUCCESS,
    SMURF_MODIFY_FAILURE
} from '../actions';


const initialState = {
    isLoading: false,
    smurfs: [
      {
        name: "",
        age: "",
        height: "",
        id: ""
      }
    ]
  };

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SMURF_LOAD_START:
            return{
                ...state,
                isLoading: true,
                error: '',
            };
        case SMURF_LOAD_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload.map(smurf => {
                    return {
                      name: smurf.name,
                      age: smurf.age,
                      height: smurf.height,
                      id: smurf.id
                    };
                  })
            };
        case SMURF_LOAD_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case SMURF_ADD_START:
                return{
                    ...state,
                    isLoading: true,
                    error: '',
                };
        case SMURF_ADD_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload.map(smurf => {
                    return {
                      name: smurf.name,
                      age: smurf.age,
                      height: smurf.height,
                      id: smurf.id
                    };
                  })
            };
        case SMURF_ADD_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case SMURF_DELETE_START:
                return{
                    ...state,
                    isLoading: true, 
                    error: '',
                };
        case SMURF_DELETE_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload.map(smurf => {
                    return {
                        name: smurf.name,
                        age: smurf.age,
                        height: smurf.height,
                        id: smurf.id
                    };
                    })
            };
        case SMURF_DELETE_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case SMURF_MODIFY_START:
                return{
                    ...state,
                    isLoading: true,
                    error: '',
                };
        case SMURF_MODIFY_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload.map(smurf => {
                    return {
                        name: smurf.name,
                        age: smurf.age,
                        height: smurf.height,
                        id: smurf.id
                    };
                    })
            };
        case SMURF_MODIFY_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state;
    };
};

export default reducer;