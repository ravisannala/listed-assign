import React , {useState} from 'react'
import Meta from '../components/meta'
import {Link , useNavigate} from "react-router-dom";
//import {BsGoogle} from 'react-icons/bs';
import {DiApple} from 'react-icons/di';
import {LoginSocialGoogle} from "reactjs-social-login";
import {GoogleLoginButton} from "react-social-login-buttons";
const Login = () => {

  const [togg , setTogg] = useState(false);
  const navigate = useNavigate()
  const siginHandler = ()=>{
     //navigate("/main-page")
    console.log(togg)
  }
  
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
                <p>Sign in to your account</p><br />



                <LoginSocialGoogle 
        client_id="109650002650-skcauo5thhc7s78i3di7hs32jmsq8v6k.apps.googleusercontent.com"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({provider, data})=>{
          console.log(provider, data);
          
          navigate("/main-page")

         
        }}
        onReject={({error}) =>{
          console.log(error);
        }}
        >
          <GoogleLoginButton />
          </LoginSocialGoogle>

                <button><DiApple />Sign In with Apple</button>

               <br /><br />
                <form action="" className="d-flex flex-column gap-30">
                    <div>
                
                        <input  type="email" name="email" placeholder="Email address" required className="form-control" />
                    </div>
                <br />
                    <div>
                        <input type= "password" name="password" placeholder="Password" required className="form-control" />
                    </div>
                    
                    <br />
                    <div>
                        <Link to="/forgot-password">Forgot Password?</Link>
                
                        <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center" >
                        <br />
                        <button onClick={siginHandler} className="button border-0" type="submit"><Link to="/main-page">Sign in</Link></button>
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
