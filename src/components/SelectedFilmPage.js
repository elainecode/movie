import React, {Component} from 'react';
import FilmDetails from './FilmDetails'
import FilmList from './FilmList'


class SelectedFilmPage extends Component {
    constructor() {
        super()
            this.state = {
            
            }   
    }

    render() {
        return (
            <div>
            <h4>Selected Film Page</h4>
            <FilmDetails
                id={this.props.match.params.id}
            />
            <FilmList></FilmList>
            </div>
        )
    }
}

 export default SelectedFilmPage