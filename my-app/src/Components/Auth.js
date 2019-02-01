

export const AuthService = ()=>{
      let auth = localStorage.getItem("auth")
      if(auth) {
        isAuthenticated = true
      }
   authenticate(cb){
     this.isAuthenticated = true
     setTimeout(cb, 5000)
   }
   logout(cb) {
     this.isAuthenticated = false
     setTimeout(cb, 100)
   }
 };
 export const SecretRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={(props) => (
     AuthService.isAuthenticated === true
       ? <Component {...props} />
       : <Redirect to='/login' />
   )} />
 );