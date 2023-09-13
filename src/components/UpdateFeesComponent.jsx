import React, { Component } from 'react'
import EmployeeService from '../services/FeesService';

class UpdateFeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            classNumber: '',
            Fees: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeClassNumberHandler = this.changeClassNumberHandler.bind(this);
        this.changeFeesHandler = this.changeFeesHandler.bind(this);
        this.updateFees = this.updateFees.bind(this);
    }

    componentDidMount(){
        FeesService.getFeesById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId : employee.emailId
            });
        });
    }

    updateFees = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, classNumber: this.state.classNumber, Fees: this.state.Fees};
        console.log('Fees => ' + JSON.stringify(Fees));
        console.log('id => ' + JSON.stringify(this.state.id));
        FeesService.updateFees(Fees, this.state.id).then( res => {
            this.props.history.push('/Fees');
        });
    }
   
    changeNameHandler= (event) => {
        this.setState({Name: event.target.value});
    }

    changeClassNumberHandler= (event) => {
        this.setState({ClassNumber: event.target.value});
    }

    changeFeesHandler= (event) => {
        this.setState({Fees: event.target.value});
    }

    cancel(){
        this.props.history.push('/Fees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Fees</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control"
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ClassNumber: </label>
                                            <input placeholder="Class Number" name="ClassNumber" className="form-control"
                                                value={this.state.classNumber} onChange={this.changeClassNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Fees: </label>
                                            <input placeholder="Fees" name="Fees" className="form-control"
                                                value={this.state.Fees} onChange={this.changeFeesHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateFees}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateFeesComponent