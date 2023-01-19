import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/Myproject1.png';
import Wer from '../images/weimg.png';
import Ai from '../images/ai2.png';
import Human from '../images/humanAi.png';
import Bsetting from '../images/brainsetting.png';
import Bcheap from '../images/braincheap.png';
import Train from '../images/traint.png';
import Registration from './Registration';


function Page() {

  return (
    <div>
      <div className="container-fluid " >
      <nav>
        <div className="row">
          <div className="col-sm-3">
        <div className='logo '>
        <img style={{width:"75%"}} src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="" /> 
        {/* <h1>Rubixie</h1> */}
        </div>
        </div>
        
        <div className="col-sm-9">
        <ul>
          <li>HOME</li>
          <li>SERVICE</li>
          <li>PRODUCTS</li>
          <li>AI INTERNSHIP</li>
          <li>CAREER</li>
          <li>BLOG</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
        </div>
      
        </div>
        
      </nav>

      {/* -------------Tech teens section------------- */}

      <div className="image">
        <div className="container">
          <div className="row">
          <div className="col-sm-3">
            <div className="techteens">
            <img  className='t-teens' src={Logo}  alt="" />
            <span>CARVING FUTURE <br />TECHNOLOGY PROFESSIONAL <br />
            OUT OF YOUNG MINDS</span>
            </div>
            </div>
          </div>
        </div>
      </div>
 
    {/* -------------who we are section------------- */}
    <div className="container">
    <div className="row">
      <div className="col-sm-9">
      
        <div className="we-text"></div>
        <h3>WHO WE ARE</h3>
        <p>Rubixe™ is a global technology company specializing in disruptive technologies - Artificial Intelligence (AI). 
          Machine Leaming. Robotic Process Automation (RPA). BlockChain, and Internet of Things (IoT).</p><br />
          <p>Rubixe™ mission is to enable businesses to leverage the full potential of disruptive 
            technologies and stay competitive in the market, turning complex challenges into
            solutions, providing a strategic competitive advantage that are more efficient, effective
            and predictable.</p>
      </div>
      <div className="col-sm-3">
      <div className="we-img">
        <h1 className="line"></h1>
      <img src={Wer} width='100%' alt="" />
      </div>
      </div>
    </div>
    </div>

{/* --------------started------------- */}
<div className="started">
  <div className="container">
  <h3>WHERE WE STARTED</h3>
  <p>We started in 2015, With a passionate team who want to bring game-changing solutions through disrupting technologies. We expertise in delivering enterprise-level solutions in the field of Artificial Intelligence (Al), 
    Cyber Security, Robotic Process Automation (RPA), Internet of Things (JoT), and BlockChain technology.</p>
  </div>
</div>

{/* --------initiative----------- */}

<div className="initiative">
  <div className="container">
    <div className="init-1">
  <h3>TECH FOR TEENS A RUBIXE ® INITIATIVE</h3>

  <div className="cards">
    <div className="row">
      
      <div className="col">
        <div className="card1">
          <div className="head">
            <div className="number"><span><b>01</b></span></div>
          </div>
          <div className="c-ic">
          <img src={Ai} width='50%' alt="" />
          <p>Introduction AI to children in age appropriate manner.</p>
          </div>
        </div>
      </div>
      <div className="col"><div className="card2"><div className="foot" style={{backgroundColor:'#DC1482'}}><div className="number1"><span><b>02</b></span></div></div>
      <div className="c-ic">
          <p>Gain awareness on AI and build an interactive story around it.</p>
          <img src={Bcheap} width='50%' alt="" />
          </div>
          </div>
          </div>
      {/* </div> */}
      <div className="col"><div className="card1">
      <div className="head" style={{backgroundColor:'#e35e13'}}><div className="number"><span><b>03</b></span></div></div><div className="c-ic">
          <img src={Human} width='50%' alt="" />
          <p>Acquire programming skills in a user-friendly format.</p>
          </div></div></div>

      <div className="col"><div className="card2"><div className="foot" style={{backgroundColor:'#195b37'}}><div className="number1"><span><b>04</b></span></div></div>
      <div className="c-ic">
         
          <p>Exposure to mini projects on diverse topics.</p>
          <img src={Bsetting} width='50%' alt="" />
          </div></div></div>
      <div className="col"><div className="card1">
      <div className="head" style={{backgroundColor:'#b77d33'}}><div className="number"><span><b>05</b></span></div></div><div className="c-ic">
          <img src={Train} width='50%' alt="" />
          <p>Train the teachers programme.</p>
          </div></div></div>

    </div>
  </div>
  </div>
  </div>
</div>

<Registration/>
{/* ------------Registerform-------------- */}
{/* <div className="register">
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
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email*</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email ID" required/>
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Mobile Number*</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Mobile Number"/>
</div>
<button className='btn btn-primary'>Register Now</button>

        </form>
      </div>
    </div>
  </div>
</div> */}

{/* ------------Registerform end-------------- */}


{/* ----------------------footer-------------------------- */}

<div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-5">
        <div className="footr">
        <h6>ABOUT US</h6>
        <p>Rubixe is a global technology company specializing in disruptive technologies - Artificial Intelligence (AI). Machine Learning. Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT).
           Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
      </div>
      </div>
      <div className="col-sm-2">
      <div className="footr">
        <h6>MENUS</h6>
       
          <p>Home</p>
          <p>Services</p>
          <p>Products</p>
          <p>Career</p>
        </div>
      </div>
      <div className="col-sm-2">
      <div className="footr">
        <h6>LEARN MORE</h6>
        <p>About</p>
        <p>Contact Us</p>
      </div>
      </div>
      <div className="col-sm-3">
      <div className="footr">
        <h6>ADDRESS</h6>
        <p>Novel Tech Park, 1st Floor, Hosur Rd,
          Kudlu gate, Bangaluru, Karnataka 560068 <br />
          Phone: 0804717-8999 <br />
          Email: hi@rubixe.com</p>

        <h6 style={{marginTop:'10px'}}>SOCIAL MEDIA</h6>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="footerbottom">
  <div className="container">
    <p>Copyright 2017 - 2022 | Rubixe is a brand of THIN AHEAD INNOVATIONS PVT. LTD | All Right Reserved</p>
  </div>
</div>
      </div>
    </div>
  )
}

export default Page
