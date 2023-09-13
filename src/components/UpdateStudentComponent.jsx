import React, { Component } from 'react'

import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            classNumber: '',
            marks: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeClassNumberHandler = this.changeClassNumberHandler.bind(this);
        this.changeMarksHandler = this.changeMarksHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({
                name: student.name,
                classNumber: student.classNumber,
                marks : student.marks
            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, classNumber: this.state.classNumber, marks: this.state.marks};
        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/student');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeClassNumberHandler= (event) => {
        this.setState({classNumber: event.target.value});
    }

    changeMarksHandler= (event) => {
        this.setState({marks: event.target.value});
    }

    cancel(){
        this.props.history.push('/student');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Student</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder=" Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ClassNumber: </label>
                                            <input placeholder="Class Number" name="classNumber" className="form-control" 
                                                value={this.state.classNumber} onChange={this.changeClassNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Marks: </label>
                                            <input placeholder="Marks" name="marks" className="form-control" 
                                                value={this.state.marks} onChange={this.changeMarksHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
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

export default UpdateStudentComponent
