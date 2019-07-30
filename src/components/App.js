import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import SelectedFilmPage from './SelectedFilmPage'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
    constructor() {
        super()
            this.state = {
            greeting: "" 
            }   
    }

    componentDidMount() {
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(greeting => this.setState({greeting: JSON.stringify(greeting)}))
    }


    render() {
        const { greeting }  = this.state
        return ( 
            <>
            <Header></Header>   
            <Route exact path='/' component={routerProps =>
                <HomePage
                    {...routerProps}
                />}
            />
            <Route exact path='/films/:id' component={routerProps =>
                <SelectedFilmPage
                    {...routerProps}
                />}
            />
            <Footer></Footer>
            </>
            );
    }

}


export default App;