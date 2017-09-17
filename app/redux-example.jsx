var redux = require('redux');

console.log('Starting redux example');


// var reducer = (state, action) => {
//   // we start with the default
//   state = state || {name: 'Anonymous'};
// }

// another way with es6 is. The || above with the default fallback in the arg.
var reducer = (state = {name: 'Anonymous'}, action) => {
  return state;
}

// createStore takes a pure func as an argument
// this pure func is called reducer. 2 args. The state before the action and the action
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState ', currentState);
