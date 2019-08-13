import { combineReducers } from 'redux';
import data from './data';
import isLoading from './is-loading';
import media from './pictures';

const rootReducer = combineReducers({
  data,
  isLoading,
  media
})

export default rootReducer;