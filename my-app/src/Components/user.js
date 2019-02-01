import React, {Fragment} from 'react';
import { Link,Redirect } from 'react-router-dom';
import Header from './Header';
export default class User extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
  this.allUser = this.allUser.bind(this);
		
	}
	componentWillMount() {
		this.allUser()
	}

allUser(){
	fetch('http://localhost/ReactJs-With-PHP-CRUD-Application/API/user.php')
		  .then(response => response.json())
		  .then(data =>{ 
			this.setState({ data:data })
		});
}

dalate(e){
	let url = `http://localhost/ReactJs-With-PHP-CRUD-Application/API/user.php?id=${e}`;
	fetch(url, {
		method: 'DELETE', 
	}).then(res => res.json())
	.then(response => {
			alert("User daleted Successfully");
			this.allUser();
	})
	.catch(error => alert('Error:' +  error));
}


	render() {
		const user =  this.state.data.map(item => {
			return(
				<tr key={item.Id}>
					<td>{item.Name}</td>
					<td>{item.Email}</td>
					<td>{item.Phone}</td>
					<td>
						<Link className="btn btn-primary" to={`/users/${item.Id}`}>Edit</Link>
						<button type="button" onClick={(e)=>this.dalate(item.Id,e)} className="btn btn-danger ml-3">Delete</button>
					</td>
				</tr>
			)
			// 
		})
		return (
			<Fragment> 
				<Header></Header>
			<div className="container">
			  <div className="col my-5 shadow">
			  	<table className="table"> 
					  <tr>
						  <th>Name</th>
						  <th>Email</th>
						  <th>Phone</th>
						  <th>Action</th>
             </tr>
					 
					  <tbody>
						  {user}
					  </tbody>
				  </table>
			  </div>
			</div>
			</Fragment>
		);
	}
}

