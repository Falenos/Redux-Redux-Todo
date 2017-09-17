// check redux-example.jsx for intructions
var redux = require('redux');

console.log('Starting todo example');

const defaultState = {
  searchText: "",
  showCompleted: false,
  todos: []
};

var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return { // we create a new state
        ...state,
        searchText: action.searchText //overwrites the prop
      };
    default: //default is a switch case, check switch docs
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('The text is', state.searchText);
   document.getElementById('app').innerHTML = state.searchText;
});
// unsubscribe();
// var currentState = store.getState();
// console.log('currentState ', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Look it up'
});

console.log('Search text should be', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'It\'s nice'
});

console.log('Search text should be', store.getState());
