import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'
import StudentService from '../services/StudentService';

class ListStudentsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Student: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
     StudentService.deleteStudent(id).then( res => {
            this.setState({Student: this.state.Student.filter(Student => Student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-Student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/add-Student/${id}`);
    }

    componentDidMount(){
        StudentService.getAllStudent().then((res) => {
            this.setState({ Student: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Student's List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Student name</th>
                                    <th> Student classNumber</th>
                                    <th> Student marks</th>
                                    {/* <th> Employee Salary </th> */}
                                    {/* <th> Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Student.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> { student.name} </td>   
                                             <td> {student.classNumber}</td>
                                             <td> {student.marks}</td>
                                             {/* <td> {employee.emailId}</td> */}
                                             <td>
                                                 <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-info">View </button>
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

export default ListStudentsComponent
