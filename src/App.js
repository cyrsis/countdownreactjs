import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }

    changeDeadline() {

        // this.state.deadline= 'Nov 25, 2017' //never do it
        this.setState({
            deadline: this.state.newDeadline,

        });

    }

    render() {

        return (
            <div className="App">
                <div className="App-title">CountDown Champ to {this.state.deadline} </div>
                <Clock deadline={this.state.deadline}></Clock>
                <div>
                    <input placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                </div>
            </div>

        );
    }
}

export default App;
