import React, { Component } from 'react'
import Header from './Header'
import GeneratorForm from './GeneratorForm'
import Button from './Button'
import store from '../store'
import './App.css'

class App extends Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

  render() {
     
    return (
      <div className="App">
        <Header/>

        <div className="App-generatorForm">
          <GeneratorForm/>
        </div>

        <div className="App-generateButton">
          <Button label="GENERATE" onClick={this.onGenerateClick.bind(this)}/>
            
        </div>
            <span>the Company name is : {this.state.name}
            </span>
      </div>
    )
  }

  onGenerateClick(e) {
    e.preventDefault();
        this.setState({
            name : this.state.form.name 
        });
      
  }

}

export default App