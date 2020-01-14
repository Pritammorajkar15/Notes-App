import React from "react"

import {Jumbotron} from 'reactstrap'
export default class Home extends React.Component{
    constructor()
    {
        super()
        this.state={

        }
    }
    render(){
        return(
            <div align="center">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                <br></br>
                <Jumbotron style={{"background-color":"#fdd0e4"}}>
                <h2>Welcome to notes app </h2>

                <a href="/list" className="btn btn-primary">Notes</a>
                <a href="/categorylist" className="btn btn-success">Categories</a>
                
                </Jumbotron>
                </div>
                </div>
            </div>
        )
    }
}