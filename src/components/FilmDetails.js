import React from 'react'

const FilmDetails = (props) => {
    return (
        <div>
           <p>Film Details Goes Here:</p>
            <p>{'No film selected' || props.id}</p>
        </div>
    )
}


export default FilmDetails