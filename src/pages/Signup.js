import React from 'react'
import Meta from '../components/meta'
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <Meta title={"Sign In"} />
    <div className="login-wrapper py-5 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card4">
                <h2 className="text-center mb-3">Sign In</h2><br />
                <p>Sign in to your account</p>
                <br />
               
                <form action="" className="d-flex flex-column gap-30">
                  <div>
                    <input type="text" name="name" placeholder="Name" className="form-control" required/>
                  </div>
                  <br />
                    <div>
                
                        <input type="email" name="email" placeholder="Email address" className="form-control" required/>
                    </div>
                    <br />
                    <div >
                    <input type="tel" name="mobile" placeholder="Mobile Number" className="form-control" required/>
                    </div>
                <br />
                    <div>
                        <input type= "password" name="password" placeholder="Password" className="form-control"required />
                    </div>
                    
                    <br />
                    <div>
                
                        <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center" >
                        
                        <button className="button border-0" >Sign In</button>
                        <br />
                        <br />
                        <p>Don't have an account?</p>
                        
                       
                        </div>
                        </div>
                        
                       
                </form>
               
              
            </div>
        </div>
    </div>
</div>


    </>
  )
}

export default Signup
