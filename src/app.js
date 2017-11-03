import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-dateinputs-react-wrapper';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateTime: new Date()
        };
        this.onchange = this.onchange.bind(this);
    }
   onchange(e) {
        this.setState({
            dateTime: e.sender.value()
        });
   }
  render() {
    return (
      <div className="App">
       <Calendar value={this.state.dateTime} change={this.onchange}/>
      </div>
    );
  }
}
export default App;
