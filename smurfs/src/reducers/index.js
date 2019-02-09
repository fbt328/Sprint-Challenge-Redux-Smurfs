import { SMURFS_GET } from '../actions' /*get smurf data */
import { SMURFS_POST } from '../actions' /*add new smurf */
import { SMURFS_FETCHING } from "../actions";
import { SMURFS_SUCCESS } from "../actions";
import { SMURFS_FAILURE } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURFS_GET:
      return {...state, fetchingSmurfs: true};
    case SMURFS_POST:
      return {...state, addingSmurf: true};
    case SMURFS_FETCHING:
      return {...state, fetchingSmurfs: true};
    case SMURFS_SUCCESS:
      return {...state, fetchingSmurfs: false, smurfs: [...state.smurfs, ...action.payload]};
    case SMURFS_FAILURE:
      return {...state, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer



/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
