import React, { useEffect, useState } from 'react'

function Registration() {

    const data ={name:"", email:"", phone:""};

    const [input,setInput]=useState(data)
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
        console.log("Registered")
    },[flag])

    const handleData =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input);
        
       
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // setInput("");
        if(!input.name || !input.email || !input.phone){
            alert("All fields are Mandatory")
        }
        else{
            setFlag(true)
            // setInput("")
        }
    }

    const Reset=()=>{
      
    }
  return (
    <>
    
    <div className="register">
        
    <div className="container">
      <div className="row regdeg">
        <div className="col-sm-4">
          <div className="get">
            <h3><b> GET IN TOUCH </b></h3><br />
            <p>Please complete the form and we will get back to you</p>
          </div>
        </div>
        <div className="col-sm-8">
            
            
          <form className="form" onSubmit={handleSubmit}>
          
          
          <div class="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Name*</label>
    <input type="text" value={input.name} onChange={handleData} className="form-control" name='name' placeholder="Enter Your Name" />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email*</label>
    <input type="email" name='email' value={input.email} onChange={handleData} className="form-control"  placeholder="Enter your Email ID" />
  </div>
          <div class="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Mobile Number*</label>
    <input type='tel'  maxLength={10} name='phone'  value={input.phone} onChange={handleData} className="form-control"  placeholder="Enter your Mobile Number"/>
  </div>
  <button type='submit' onChange={Reset} className='btn btn-primary'>Register Now</button>
  <pre>{(flag)? <h4 className='ui-define'>Hello {input.name}, You've Registered Successfully !</h4>:""}</pre>
  
          </form>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Registration
