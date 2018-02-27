import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';

const store = createStore(rootReducer);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('react-app-root')
);
