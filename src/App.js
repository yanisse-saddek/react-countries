import React, { useState } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Card from './components/Card'
import Range from './components/Range'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toReturn: [],
      countries: [],
      range:10,
      countryNum:20
    }
  }
  componentDidMount = () => {
    var num=0;
    axios('https://restcountries.com/v3.1/all').then(result => {
      var array = []
      var countryNum=0
      result.data.map(pays => {
        countryNum++
        if(num<this.state.range){
          array.push(<Card data={pays} />)
          num++
        }
      })
      this.setState({
        toReturn: array,
        countryNum:countryNum
      })
    })
  }
  getList = () => {
    return this.state.toReturn
  }
  range = (e) => {
    this.setState({
      range:e.target.value
    })
    this.componentDidMount()
  }
  render() {
    return <div className="container">
      <h1>Country searcher</h1>
      <Button onClick={this.getCountry} />
      <Range range={this.range} minMax={this.state.countryNum}/>
      <div className="row">{this.getList()}</div>
    </div>
  }
}