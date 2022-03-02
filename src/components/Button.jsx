import React from 'react'

export default class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search:null,
        }
    }
    myCountry = (e)=>{
        this.setState({
            search:e.target.value
        })
    }
    render(){
        return(
            <div class="input-group mb-3">
                <input onChange={this.myCountry}type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                <button className={"btn btn-success"} onClick={()=>{
                    console.log('oké')
                    this.props.onClick(this.state.search)
                }}>Search
            </button>
            </div>
        )
    }
}