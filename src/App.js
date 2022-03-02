import React, {useState} from 'react'
import axios from 'axios'
import Button from './components/Button'
import Card from './components/Card'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toReturn: [

      ],
       countries : [
       ]
    }
  }
  getCountry = (country)=>{
    var url = `https://restcountries.com/v3.1/name/${country}`
      axios(url).then((resultat)=>{
        var myCountries = []
        resultat.data.map(pays=>{
          var country = {name:pays.name.common,
            capital:pays.capital,
            flag:pays.flags.png,
            population:pays.population,
            region:pays.region
          }
          myCountries.push(country)
        })
        this.setState({
          countries:myCountries
        })

        var array =  []
        myCountries.map(country=>{
          array.push(<Card name={country.name} capital={country.capital} flag={country.flag} population={country.population} region={country.region}/> )
        })
        this.setState({
          toReturn:array
        })
      })
  }
  getList= ()=>{
    return this.state.toReturn
  }

  render(){
    return <div className="container">
              <h1>Country searcher</h1>
          <Button onClick={this.getCountry}>France</Button>
            <div className="row">{this.getList()}</div>
    </div>
  }
}