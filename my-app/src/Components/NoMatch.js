import React, {Fragment} from 'react';
import Header from './Header';
export default class NoMatch extends React.Component {
   
    render() {
        const pathname = window.location.pathname;
         return(
            <Fragment>
            <Header></Header>
            <div className="container">
                <div className="my-5">
                    <h4>No Match For <span className="text-danger"> {pathname}</span> </h4>
                </div> 
            </div>
            </Fragment>
         )
      
}
}


                           
