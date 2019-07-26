
import React, {Component} from 'react';

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
             <div>
             {greeting || "not working"}
             </div> 
            );
    }

}


export default App;