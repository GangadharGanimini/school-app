import React, { Component } from 'react'
import FeesService from '../services/FeesService';

class CreateFeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            classNumber: '',
            fees: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeClassNumberHandler = this.changeClassNumberHandler.bind(this);
        this.saveOrUpdateFees = this.saveOrUpdateFees.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            FeesService.getFeesById(this.state.id).then( (res) =>{
                let Fees = res.data;
                this.setState({Name: Fees.Name,
                    
                    // emailId : Fees.emailId
                    classNumber : Fees.classNumber,
                    fees : Fees.fees
                });
            });
        }        
    }
    saveOrUpdateFees = (e) => {
        e.preventDefault();
        let Fees = {name: this.state.name, classNumber: this.state.classNumber, fees: this.state.fees};
        console.log('Fees => ' + JSON.stringify(Fees));

        // step 5
        if(this.state.id === '_add'){
            FeesService.createFees(Fees).then(res =>{
                this.props.history.push('/Fees');
            });
        }else{
            FeesService.updateFees(Fees, this.state.id).then( res => {
                this.props.history.push('/Fees');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeClassNumberHandler= (event) => {
        this.setState({classNumber: event.target.value});
    }

    changeFeesHandler= (event) => {
        this.setState({fees: event.target.value});
    }

    cancel(){
        this.props.history.push('/Fees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center"></h3>
        }else{
            return <h3 className="text-center">Update Fees</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ClassNumber: </label>
                                            <input placeholder="ClassNumber" name="classNumber" className="form-control" 
                                                value={this.state.classNumber} onChange={this.changeClassNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Fees: </label>
                                            <input placeholder="Fees" name="fees" className="form-control" 
                                                value={this.state.fees} onChange={this.changeFeesHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateFees}>Save</button>
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

export default CreateFeesComponent
