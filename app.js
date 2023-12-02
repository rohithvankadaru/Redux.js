import { increment, reset } from "./redux/actions/counterActions.js";
import { store } from "./redux/store.js";


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

// store.dispatch(reset())

console.log(store.getState());