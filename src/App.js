import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ArtistPage from './pages/ArtistPage/ArtistPage';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/artist/:artistId' component={ArtistPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
