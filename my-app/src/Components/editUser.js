import React from 'react';
//import {Link,Redirect,withRouter } from 'react-router-dom'
//import User from './user';
export default class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
          data:{
            Name:'',
            Phone:'',
            Email:'',
            Picture:'',
            Id:'',
            Password:''
          }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  

   componentDidMount(){
       debugger
      const { match: { params } } = this.props;
       let url = 'http://localhost/ReactJs/API/user.php';
        fetch(url)
         .then(response => response.json())
		  .then(data =>{ 
        debugger
            let edit = data.find(x =>x.Id === params.userId);
            if(edit){
            this.setState({data:edit})
            }
  });
   } 
    handleSubmit(event) {
        event.preventDefault();
          debugger
          var id =this.state.data.Id;
          var name =this.state.data.Name;
          var psrd =  this.state.data.Password;
          var email = this.state.data.Email;
          var phone = this.state.data.Phone;
          var pic = this.state.data.Picture;
          var url = 'http://localhost/ReactJs/API/user.php';
          var data = {Id:id,Name: name, Email:email,Password:psrd,Phone:phone,Picture:pic};
          
          fetch(url, {
            method: 'PUT', 
            body: JSON.stringify(data),
          }).then(res => res.json())
          .then(response => {
              alert("User Updated Successfully");
              this.props.history.push(`/users`)
          })
          .catch(error => alert('Error:' +  error));
          
    }
    handleChange(field, e){  
      let fields = this.state.data;
      if(field === 'Picture'){
        debugger
     // let PicName =  e.target.files[0].name;  
      //let PicSize =  e.target.files[0].size;  
      fields[field] = e.target.files[0];   
      this.setState({fields});
      }else{
     fields[field] = e.target.value;        
     this.setState({fields});
     }
  }
    
    render() {
      debugger
      const a = this.state.data.Name;
        return (
            <div className="container">
            <div className="card col-md-8 offset-md-2 my-5 shadow ">
            <div className="card-body">
            <form onSubmit= {this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control"  name="Name" value={this.state.data.Name} onChange={this.handleChange.bind(this, "Name")} placeholder="Enter name"/>
    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Phone Number</label>
    <input type="number" className="form-control" name="Phone" value={this.state.data.Phone} onChange={this.handleChange.bind(this, "Phone")} placeholder="Phone Number"/>
    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" name="Email" value={this.state.data.Email}  onChange={this.handleChange.bind(this, "Email")} placeholder="Enter Email"/>
    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" name="Password" value={this.state.data.Password}  onChange={this.handleChange.bind(this, "Password")} placeholder="Password"/>
    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Picture</label>
    <input type="file" name="Picture"  onChange={this.handleChange.bind(this, "Picture")} className="form-control-file"/>
    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <button type="submit" className="btn btn-primary">Update</button>
<a className="ml-4" onClick={()=>this.props.history.push('/users') }>GoBack</a>
</form>
            </div>
            </div>
        </div>      
            );

    }
}