import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ListStudentsComponent from './components/ListStudentsComponent';
// import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ListFeesComponent from './components/ListFeesComponent';
import ViewFeesComponent from './components/ViewFeesComponent';
import CreateFeesComponent from './components/CreateFeesComponent';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {WelcomeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/student" component = {ListStudentsComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
                          <Route path = "/Employee" component = {ListEmployeeComponent}></Route>
                          <Route path = "/Fees" component = {ListFeesComponent}></Route>
                          <Route path = "/add-Fees/:id" component = {CreateFeesComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route>
                          <Route path = "/view-Fees/:id" component = {ViewFeesComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/viewall-student" component = {ListStudentsComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
