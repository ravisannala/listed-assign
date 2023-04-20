import React from 'react'
import Meta from '../components/meta'
import {Link} from "react-router-dom";
import {BsGoogle} from 'react-icons/bs';
import {DiApple} from 'react-icons/di';
const Login = () => {
  return (
    <div>
         <div className="board" text-color="white "><br /><br /><br /><br /><br />
         
         Board.</div>
        <section className="signin">
        <Meta title={"Login"} />
<div className="login-wrapper py-5 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card">
                <h2 className="text-center mb-3">Sign In</h2>
                <br />
                <p>Sign in to your account</p>

                <button ><BsGoogle /> Sign In with Google</button>
                <button><DiApple />Sign In with Apple</button>

               <br /><br />
                <form action="" className="d-flex flex-column gap-30">
                    <div>
                
                        <input type="email" name="email" placeholder="Email address" className="form-control" required/>
                    </div>
                <br />
                    <div>
                        <input type= "password" name="password" placeholder="Password" className="form-control"required />
                    </div>
                    
                    <br />
                    <div>
                        <Link to="/forgot-password">Forgot Password?</Link>
                
                        <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center" >
                        <br />
                        <Link to="/main-page"><button className="button border-0" type="submit">Sign In</button></Link>
                        <p>Don't have an account?</p>
                        <br />
                        <Link to="/signup" className="button signup">Register here</Link>
                        </div>
                        </div>
                        
                       
                </form>
               
              
            </div>
        </div>
    </div>
</div>  
        </section>
    </div>

  )
}

export default Login
