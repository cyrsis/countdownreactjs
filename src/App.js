import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'


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
                <Form inline>
                    <FormControl
                        className='Deadline-input'
                        placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>

        );
    }
}

export default App;
