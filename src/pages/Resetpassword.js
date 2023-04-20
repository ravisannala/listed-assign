import React from 'react'
import Meta from '../components/meta'
import {Link} from 'react-router-dom';

const Resetpassword = () => {
  return (
    <>
    <Meta title={""} />
    <div className="login-wrapper py-5 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card2">
                <h2 className="text-center mb-3">Reset Password</h2>
                <br />
                <p>Sign in to your account</p>
               
                <form action="" className="d-flex flex-column gap-30">
  
                    <br />
                    <div >
                    <input type="password" name="password" placeholder="Password" className="form-control" required/>
                    </div>
                <br />
                    <div>
                        <input type= "password" name="confpassword" placeholder="Confirm Password" className="form-control"required />
                    </div>
                    
                    <br />
                    <div>
                
                        <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center" >
                        
                        <button className="button border-0" >Ok</button>
                       
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

export default Resetpassword
