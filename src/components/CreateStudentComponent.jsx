import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            classNumber: '',
            marks: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeClassNumberHandler = this.changeClassNumberHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({name: student.name,
                    
                    // emailId : student.emailId
                    classNumber : student.classNumber,
                    marks : student.marks
                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, classNumber: this.state.classNumber, marks: this.state.marks};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/student');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/student');
            });
        }
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
        this.props.history.push('/Student');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center"></h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
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
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.Name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ClassNumber: </label>
                                            <input placeholder="ClassNumber" name="classNumber" className="form-control" 
                                                value={this.state.ClassNumber} onChange={this.changeClassNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Marks: </label>
                                            <input placeholder="Marks" name="marks" className="form-control" 
                                                value={this.state.Marks} onChange={this.changeMarksHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
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

export default CreateStudentComponent
