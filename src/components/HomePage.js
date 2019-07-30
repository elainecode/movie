import React, {Component} from 'react';
import Search from './Search'
import FilmList from './FilmList'


class HomePage extends Component {
    constructor() {
        super()
            this.state = {
            
            }   
    }

    render() {
        return (
            <div>
                <h4>Home Page</h4>
                <Search></Search>
                <FilmList></FilmList>
            </div>
        )
    }
}


 export default HomePage