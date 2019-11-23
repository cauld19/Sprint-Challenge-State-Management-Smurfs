import axios from 'axios';

export const SMURF_LOAD_START = 'SMURF_LOAD_START';
export const SMURF_LOAD_SUCCESS = 'SMURF_LOAD_SUCCESS';
export const SMURF_LOAD_FAILURE = 'SMURF_LOAD_FAILURE';

export const SMURF_ADD_START = 'SMURF_ADD_START';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_ADD_FAILURE = 'SMURF_ADD_FAILURE';

export const SMURF_DELETE_START = 'SMURF_DELETE_START';
export const SMURF_DELETE_SUCCESS = 'SMURF_DELETE_SUCCESS';
export const SMURF_DELETE_FAILURE = 'SMURF_DELETE_FAILURE';

export const SMURF_MODIFY_START = 'SMURF_MODIFY_START';
export const SMURF_MODIFY_SUCCESS = 'SMURF_MODIFY_SUCCESS';
export const SMURF_MODIFY_FAILURE = 'SMURF_MODIFY_FAILURE';




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

export const addSmurf = smurf => dispatch => {
    dispatch({ type: SMURF_ADD_START });
    console.log(smurf)
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res.data);
            dispatch({type: SMURF_ADD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: SMURF_ADD_FAILURE, payload: "ERROR"})
        })
};

export const deleteSmurf = id => dispatch => {
    dispatch({ type: SMURF_DELETE_START });
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            console.log(res.data);
            dispatch({type: SMURF_DELETE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: SMURF_DELETE_FAILURE, payload: "ERROR"})
        })
};

export const modifySmurf = smurf => dispatch => {
    dispatch({ type: SMURF_MODIFY_START });
    axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then(res => {
            console.log(res.data);
            dispatch({type: SMURF_MODIFY_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: SMURF_MODIFY_FAILURE, payload: "ERROR"})
        })
};

