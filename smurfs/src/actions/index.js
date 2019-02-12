import axios from 'axios';
export const SMURFS_GET = 'SMURFS_GET'
export const SMURFS_POST = 'SMURFS_POST'
export const SMURFS_FETCHING = 'SMURFS_FETCHING'
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS'
export const SMURFS_FAILURE = 'SMURFS_FAILURE'

export const getSmurfs = () => dispatch => {
  dispatch ({type: SMURFS_GET });
  axios
      .get(`http://localhost:3333/smurfs`)
      .then(response =>
          dispatch({type: SMURFS_SUCCESS, payload: response.data}))
      .catch(err => dispatch({type: SMURFS_FAILURE, payload: err}))
};

// makes a new friend
export const addSmurf = (smurfs) => dispatch => {
  dispatch ({type: SMURFS_POST});
  axios
      .post(`http://localhost:3333/smurfs`, smurfs)
      .then(response =>
          dispatch({type: SMURFS_SUCCESS, payload: response.data}))
      .catch(err => dispatch({type: SMURFS_FAILURE, payload: err}))
};





/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
