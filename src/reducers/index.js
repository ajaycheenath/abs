import { combineReducers } from 'redux';
import doctors from './doctors';
import doctorsearch from './doctorsearch'

export default combineReducers({
  doctors,
  doctorsearch
})
