import signinlogo from "../image/signSideImage.jpg";
import React, {useState} from "react";
import './Login.css';
const Login = (props) =>{
    const {email,pass,emailError,passError,onchangeText,login,signup} = props;
    const [hasAccount,sethasAccount] = useState(false)
    return(

        <div className="modal-content">
            <span className="close">&times;</span>
            <div className='sign-in-container'>
                <img src={signinlogo} id='sign-in-image' alt={''}/>
                <div className='inputs-container'>
                    <div className='input-container'>
                        <label id='label'>Email</label>
                        <input type='email' className='email' value={email} onChange={(val)=> {
                            onchangeText('email',val.target.value)
                        }}/>
                        <p className='errors'>{emailError}</p>
                    </div>
                    <div className='input-container'>
                        <label id='label'>Password</label>
                        <input type='password' className='email' value={pass} onChange={(val)=>{
                            onchangeText('pass',val.target.value)
                        }}/>
                        <p className='errors'>{passError}</p>
                        {/*<label id='label-forgot'>Forgot Password?</label>*/}
                    </div>
                    {
                        hasAccount?
                        (<>
                            <button id='proceed-to-checkout-butt' onClick={login}>SIGN IN</button>
                            <label id='label-forgot' style={{color:'black'}}>Don't have an account? <span style={{color:'green'}} onClick={()=>sethasAccount(!hasAccount)}>Sign Up</span></label>
                        </>):
                        (<>
                            <button id='proceed-to-checkout-butt' onClick={signup}>SIGN UP</button>
                            <label id='label-forgot' style={{color:'black'}}>Already have an account? <span style={{color:'green'}} onClick={()=>sethasAccount(!hasAccount)}>Sign In</span></label>
                        </>)
                    }

                </div>

            </div>
        </div>
    )
}
export default Login;