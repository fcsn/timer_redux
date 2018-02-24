import React, { Component } from 'react';
import Timer from './components/Timer' 
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Timer/>
       </Provider>
    );
  }
}

export default App;
