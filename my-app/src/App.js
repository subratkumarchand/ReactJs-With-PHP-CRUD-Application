import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/register';
import User from './Components/user';
import EditUser from './Components/editUser';
import NoMatch from './Components/NoMatch';
export default class App extends React.Component {

	render() {
    
		return (
			<Router>
 <Fragment>
<Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/login" exact component={Login} />
      <Route path="/register/" exact component={Register} />
      <Route  path="/users" exact component={User}/>
      <Route path='/users/:userId' exact component={EditUser} />
      <Route exact component={NoMatch} />
      </Switch>
    </Fragment>
</Router>
		);
	}
}



