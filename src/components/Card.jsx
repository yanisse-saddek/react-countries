import React from 'react'

export default class Card extends React.Component{
    render(){
        return(
            <div className="card" style={{width: "18rem"}}>
                 <img className="card-img-top" src={this.props.data.flags.png?this.props.data.flags.png:this.props.data.flags.svg} alt="Card image cap"/>
                 <div className="card-body">
                    <h5 className="card-title">Country: {this.props.data.name.common}</h5>
                    <p className="card-text">Capital: {this.props.data.capital}</p>
                    <p className="card-text">Region: {this.props.data.region}</p> 
                    <p className="card-text">Population: {this.props.data.population}</p> 
                </div> 
            </div>

        )
    }
}