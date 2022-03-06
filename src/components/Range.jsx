import React from 'react'

export default class Range extends React.Component{
    render(){
        return(
            <input type="range" style={{width:"500px"}} min="0" max={this.props.minMax} onChange={(e)=>{this.props.range(e)}}/>
        )
    }
}