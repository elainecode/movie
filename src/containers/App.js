import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import SelectedFilmPage from './SelectedFilmPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then(greeting =>
        this.setState({ greeting: JSON.stringify(greeting) }),
      );
  }

  render() {
    const { greeting } = this.state;
    return (
      <>
        <div className="content">
          <Route
            exact
            path="/"
            component={routerProps => <HomePage {...routerProps} />}
          />
          <Route
            exact
            path="/films/:id"
            component={routerProps => (
              <SelectedFilmPage {...routerProps} />
            )}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
