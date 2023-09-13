import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import FeesService from '../services/FeesService';
import StudentService from '../services/StudentService';

class ListFeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Fees: []
        }
        this.addFees = this.addFees.bind(this);
        this.editFees = this.editFees.bind(this);
        this.deleteFees = this.deleteFees.bind(this);
    }

    deleteFees(id){
     FeesService.deleteFees(id).then( res => {
            this.setState({Fees: this.state.Fees.filter(Fees => Fees.id !== id)});
        });
    }
    viewFees(id){
        this.props.history.push(`/view-Fees/${id}`);
    }
    editFees(id){
        this.props.history.push(`/add-Fees/${id}`);
    }

    componentDidMount(){
        FeesService.getAllFees().then((res) => {
            this.setState({ Fees: res.data});
        });
    }

    addFees(){
        this.props.history.push('/add-Fees/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Fees's List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addFees}> Add Fees</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Fees name</th>
                                    <th> Fees classNumber</th>
                                    <th> Fees fees</th>
                                    {/* <th> Employee Salary </th> */}
                                    {/* <th> Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Fees.map(
                                        fees => 
                                        <tr key = {fees.id}>
                                             <td> { fees.name} </td>   
                                             <td> {fees.classNumber}</td>
                                             <td> {fees.fees}</td>
                                             {/* <td> {employee.emailId}</td> */}
                                             <td>
                                                 <button onClick={ () => this.editFees(fees.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFees(fees.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewFees(fees.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListFeesComponent