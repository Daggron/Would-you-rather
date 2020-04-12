import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Authreducer } from "../reducers/Auth/Auth";
import thunk from "redux-thunk";
import { QuestionReducer } from "../reducers/Questions/Questions";

const reducer = combineReducers({users: Authreducer, questions: QuestionReducer});
const compo = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(reducer, compo);

export default store;