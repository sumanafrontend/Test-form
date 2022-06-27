import React, {useState} from 'react'
import { useForm } from 'react-hook-form';

const Signup = () => {

  const {register, handleSubmit, formState: { errors }} = useForm({mode:'onTouched', reValidateMode: 'onChange'});

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword =(e)=>{
    e.preventDefault();
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  const onSubmit = (data) => console.log(data); 
  

  return (
    <div className='leftSideInnerArea'>
      <h1>Let's set up your Account</h1>
      <p>Already have an account? <a href="/#" onClick={(e) => e.preventDefault()}>Sign in</a></p>

      <div className='formOuterBlock'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup field">
            <input type="input" className={`formField ${errors.fullName ? "errorFormField" : ""}`} placeholder="Name" name="fullName" {...register('fullName', { required: true })} />
            <label htmlFor="fullName" className="formLabel">Your Name</label>
            {errors.fullName && <p className='passwdInformation formErrorMsg'>Don't Empty</p>}
          </div>
          <div className="formGroup field">
            <input type="input" className={`formField ${errors.fullName ? "errorFormField" : ""}`} placeholder="Email Address" name="userEmail" {...register('userEmail', { required: true })} />
            <label htmlFor="userEmail" className="formLabel">Email Address</label>
            {errors.userEmail && <p className='passwdInformation formErrorMsg'>Enter Correct Email Address</p>}
          </div>
          <div className="formGroup field">
            <select className={`selectedValues ${errors.fullName ? "errorFormField" : ""}`} {...register('userDescription', {required:true})}>
              <option value="">I would describe my user type as</option>
              <option value="A">Field Value 1</option>
              <option value="B">Field Value 2</option>
              <option value="C">Field Value 3</option>
            </select>
            {errors.userDescription && <p className='passwdInformation formErrorMsg'>Please Select one</p>}
          </div>
          <div className="formGroup field">
            <input type={passwordType} name="password" className={`formField ${errors.fullName ? "errorFormField" : ""}`} placeholder="Password" {...register('password', {required:true})} />
            <label htmlFor="password" className="formLabel">Password</label>
            <div className="input-group-btn">
              <button onClick={togglePassword}>
              { passwordType==="password"? <i className="fa fa-eye" aria-hidden="true"></i> :<i className="fa fa-eye-slash" aria-hidden="true"></i> }
              </button>
            </div>

            {errors.password ? <p className='passwdInformation formErrorMsg'>Please Enter the Password</p> : <p className='passwdInformation'>Minimum 8 characters</p> }
          </div>
          <button type='submit' className='submitBtn'>Next</button>
        </form>
      </div>

      <div className='instructionBlock'>
        <p>By clicking the 'Next' button you agree to creating a free account and to <a href='/#' onClick={(e) => e.preventDefault()}>Term and Service</a> and <a href='/#' onClick={(e) => e.preventDefault()}>Privacy and Policy</a></p>
      </div>
    </div>
  )
}

export default Signup;
