import React, { Component } from 'react'

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.viewStudent = this.viewStudent.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.viewFees = this.viewFees.bind(this);
        
    }

    viewStudent(){
        this.props.history.push('students');
    }
    viewEmployee(){
        this.props.history.push('Employee');
    }
    viewFees(){
        this.props.history.push('Fees');
    }

    

render() {
    return (


<div class="container">
  <h1>Welcome to the Website</h1>
  
  <button className="btn btn-primary button " onClick={this.viewStudent}>Student</button>
 
  
  <button className="btn btn-primary button " onClick={this.viewEmployee}>Employee</button>
  
  
  
  <button className="btn btn-primary button " onClick={this.viewFees}>Fee</button>
 
</div>

)
}
}

export default WelcomeComponent

