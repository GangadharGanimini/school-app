import React, { Component } from 'react'
import FeesService from '../services/FeesService'

class ViewFeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Fees: {}
        }
    }

    componentDidMount(){
        FeesService.getFeesById(this.state.id).then( res => {
            this.setState({Fees: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Fees Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Fees First Name: </label>
                            <div> { this.state.Fees.name }</div>
                        </div>
                        <div className = "row">
                            <label> Fees Last Name: </label>
                            <div> { this.state.Fees.classNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Fees Email ID: </label>
                            <div> { this.state.Fees.fees }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFeesComponent
