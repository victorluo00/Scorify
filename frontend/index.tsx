import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './App';
import reducer from './store/reducer';

// pass the reducer function as an argument to create new Redux store
const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
