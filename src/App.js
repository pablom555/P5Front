import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PassengerProvider} from './context/PassengerContext';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PassengerProvider>
            <HomePage />
          </PassengerProvider>
        </Route>

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
