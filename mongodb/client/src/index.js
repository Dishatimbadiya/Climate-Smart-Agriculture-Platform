// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from './reducers'

// Creates our store to use our reducers and the chrome extension to debug the redux store
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
