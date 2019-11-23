import axios from 'axios';

export const SMURF_LOAD_START = 'SMURF_LOAD_START';
export const SMURF_LOAD_SUCCESS = 'SMURF_LOAD_SUCCESS';
export const SMURF_LOAD_FAILURE = 'SMURF_LOAD_FAILURE';

// export const SMURF_LOAD_START = 'SMURF_LOAD_START';
// export const SMURF_LOAD_SUCCESS = 'SMURF_LOAD_SUCCESS';
// export const SMURF_LOAD_FAILURE = 'SMURF_LOAD_FAILURE';

// export const SMURF_LOAD_START = 'SMURF_LOAD_START';
// export const SMURF_LOAD_SUCCESS = 'SMURF_LOAD_SUCCESS';
// export const SMURF_LOAD_FAILURE = 'SMURF_LOAD_FAILURE';




export const fetchSmurfs = () => dispatch => {
    dispatch({ type: SMURF_LOAD_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: SMURF_LOAD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: SMURF_LOAD_FAILURE, payload: "ERROR"})
        })
};

// export const AddSmurf = () => dispatch => {
//     dispatch({ type: SMURF_LOAD_START });

//     axios
//         .get('http://localhost:3333/smurfs')
//         .then(res => {
//             dispatch({ type: SMURF_LOAD_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             dispatch({ type: SMURF_LOAD_FAILURE, payload: "ERROR"})
//         })
// };

