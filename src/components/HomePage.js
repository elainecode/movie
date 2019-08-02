import React, {Component} from 'react';
import Search from './Search'
import Filter from './Filter'
import FilmList from './FilmList'
import '../styles/homepage.css'


class HomePage extends Component {
    constructor() {
        super()
            this.state = {
            
            }   
    }

    render() {
        return (
            <>
                <Search></Search>
                <Filter></Filter>
                <FilmList></FilmList>
            </>
        )
    }
}


 export default HomePage