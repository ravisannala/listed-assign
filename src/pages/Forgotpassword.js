import React from 'react';
import Meta from '../components/meta';
import {Link} from 'react-router-dom';
const Forgotpassword = () => {
  return (
    <div>
        <Meta title={"Forgot Password"} />
        <div className="login-wrapper py-5 home-wrapper-2">
        
        
            <div className="row">
                <div className="col-12">
                    <div className="auth-card3">
                        <h2 className="text-center mb-3">Reset your password</h2><br />
                        <p className="text-center mt-2 mb-3">We will send you an email to reset your password</p>
                        <br />
                    
                        <form action="" className="d-flex flex-column gap-30">
                            <div>

                                <input type="email" name="email" placeholder="Email address" className="form-control" required/>
                            </div>
                    <br />
                            <div>
                                
                        
                                <div className="d-flex justify-content-center gap-15 align-items-center" >
                                
                                <button className="button border-0" type="submit">Submit</button>
                                <Link to="/login">Cancel</Link>
                                <br />
                                <br /><br /><br />
                                <p>Don't have an account?</p>
                                
                                
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgotpassword
