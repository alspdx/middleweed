import React from 'react';
import WeedList from './WeedList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>App works!</h1>
      <Switch>
        <Route exact path='/' component={WeedList} />
      </Switch>
    </div>
  );
}

export default App;
