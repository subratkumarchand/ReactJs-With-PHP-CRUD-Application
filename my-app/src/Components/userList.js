import React from 'react';

export default class userList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}

	componentWillMount() {
        debugger
		fetch('http://localhost/ReactJs/API/user.php')
		  .then(response => response.json())
		  .then(data =>{ 
			this.setState({ data:data })
		});
	  }


	render() {
		const user =  this.state.data.map(item => {
			return(
				<tr key={item.Id}>
					<td>{item.Name}</td>
					<td>{item.Email}</td>
					<td>{item.Phone}</td>
					<td>
						<a href={`/users/${item.Id}`} className="btn btn-info">Edit</a>
					</td>
				</tr>
			)
		})
		return (
			<div className="container">
			  <div className="col my-5 shadow">
			  	<table className="table"> 
					  <thead>
						  <td>Name</td>
						  <td>Email</td>
						  <td>Phone</td>
						  <td>Action</td>

					  </thead>
					  <tbody>
						  {user}
					  </tbody>
				  </table>
			  </div>
			</div>
		);
	}
}

