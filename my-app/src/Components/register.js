import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import Header from './Header';
export default class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Name:'',
            Email :'',
            Password:'',
            Phone:'',
            Picture:'',
            errors: {}
        }
           
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   
  
  handleSubmit(event) {
      event.preventDefault();
        if(this.handleValidation()){
        var name =this.state.Name;
        var psrd =  this.state.Password;
        var email = this.state.Email;
        var phone = this.state.Phone;
        var pic = this.state.Picture;
        var url = 'http://localhost/ReactJs-With-PHP-CRUD-Application/API/user.php';
        // var formData = new FormData();
        // formData.append("Name",name);
        // formData.append("Password",psrd);
        // formData.append("Email",email);
        // formData.append("Phone",phone);
        // formData.append("Picture",name);

        var data = {Name: name, Email:email,Password:psrd,Phone:phone,Picture:pic};
        
        fetch(url, {
          method: 'POST', 
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json',
           // 'Content-Type': 'multipart/form-data',
          }
        }).then(res => res.json())
        .then(response => {
          debugger
            alert("Register Successfully");
            this.props.history.push(`/login`)
        })
        .catch(error => alert('Error:' +  error));
      }  
  }
  handleValidation(){
    let fields = this.state;
    let errors = {};
    let formIsValid = true;
    if(!fields["Email"]){
        formIsValid = false;
        errors["Email"] = "Cannot be empty";
     }
     if(fields["Email"]){
        if(!fields["Email"].match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
           formIsValid = false;
           errors["Email"] = "Enter valid Email";
        }        
     }
     if(!fields["Password"]){
         formIsValid = false;
         errors["Password"] = "Password Cannot be Empty";
     }
     if(fields["Email"]){
     if(!fields["Password"].match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
         formIsValid = false;
        errors["Password"] = "password should contain atleast one number and one special character";
     }
    }
     this.setState({errors: errors});
     return formIsValid;
  }

  handleChange(field, e){  
    let fields = this.state;
    fields[field] = e.target.value; 
     if(field === 'Picture'){
       debugger
     let PicName =  e.target.files[0].name;  
    // let PicSize =  e.target.files[0].size;  
     fields[field] = PicName;   
     }
      if(this.handleValidation(field, e)){
        this.setState({fields})
        }           
    }

    render() {
         return(
          <Fragment>
          <Header></Header>   
        <div className="container">
            <div className="card col-md-8 offset-md-2 my-5 shadow ">
            <div className="card-body">
            <form onSubmit= {this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control"  name="Name"  onChange={this.handleChange.bind(this, "Name")} placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label>Phone Number</label>
    <input type="number" className="form-control" name="Phone"   onChange={this.handleChange.bind(this, "Phone")} placeholder="Phone Number"/>
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" name="Email"   onChange={this.handleChange.bind(this, "Email")} placeholder="Enter Email"/>
   <small className="text-danger form-text">{this.state.errors["Email"]}</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" name="Password"   onChange={this.handleChange.bind(this, "Password")} placeholder="Password"/>
    <small className="text-danger form-text">{this.state.errors["Password"]}</small>
  </div>
  <div className="form-group">
    <label>Picture</label>
    <input type="file" name="Picture"  onChange={this.handleChange.bind(this, "Picture")} className="form-control-file"/>
  </div>
  
  <button type="submit" className="btn btn-primary">SignUp</button>
  <Link className=" ml-4" to="Login">Login</Link>
</form>
            </div>
            </div>
        </div>
        </Fragment>
		);
    }
}




                           
