var redux = require('redux');

console.log('Starting redux example');

var defaultState = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

// var reducer = (state, action) => {
//   // we start with the default
//   state = state || {name: 'Anonymous'};
// }

var nextHobbyId = 1;
var nextMovieId = 1;

// another way with es6 is. The || above with the default fallback in the arg.
var reducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD_MOVIE':
      return { // we create a new state
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            gendre: action.gendre
          }
        ]
      };
    case 'ADD_HOBBY':
      return { // we create a new state
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'CHANGE_NAME':
      return { // we create a new state
        ...state,
        name: action.name
      };
    default: //default is a switch case, check switch docs
      return state;
  }
};

// createStore takes a pure func as an argument
// this pure func is called reducer. 2 args. The state before the action and the action
// this creates our app.
// we use redux.compose for the redux dev tools, chrome
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes. Store subscibe method that takes as an arg a callback for whenever an action occurs.
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('Name is', state.name);
// });
// store.subscribe return a method tha can be called to unsubscribe. So if using that we get this version. When we call unsubscribe, we unsubscribe.
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('State is', state);
});
// unsubscribe();


// var currentState = store.getState();
// console.log('currentState ', currentState);

// to update the state we need to dispatch actions. Actions are simple obj. The need a type prop.

var action = {
  type: 'CHANGE_NAME', // changes the name of our app state
  name: 'Yorgos'
};

// the dispatch method takes one arg. The action
store.dispatch(action);

// console.log('Name should be Yorgos', store.getState());

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Painting'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ydrargyros'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Chi ku ku'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Gravity pass',
  gendre: 'Action'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The city of who',
  gendre: 'Sci-fi'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The malakes',
  gendre: 'Comedy'
});

// console.log('Name should be Ydrargyros', store.getState());


