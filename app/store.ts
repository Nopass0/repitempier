import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  // Add your reducers here
});

const store = createStore(rootReducer);

export default store;
