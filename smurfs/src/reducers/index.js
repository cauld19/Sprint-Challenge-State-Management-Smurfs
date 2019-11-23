import {SMURF_LOAD_START, SMURF_LOAD_SUCCESS, SMURF_LOAD_FAILURE} from '../actions';


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
        
        default:
            return state;
    };
};

export default reducer;