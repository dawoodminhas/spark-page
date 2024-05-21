import "./style.scss";
import { IoIosArrowBack } from "react-icons/io";
import logo from "./images/logo.svg"
// import header from "../../../assets/images/logo_one.svg";
// import gmailIcon from "../../../assets/images/Gmail.svg";
// import footerImage from "../../../assets/images/footer_img.svg";
// import backgroundImage from "../../../assets/images/Login .png";

function Login() {

  return (
    <div className="auth__page">
      <div className="row h-100">
        <div className="col-lg-6 col-md-12 p-0">
          <div className="left">
            <form>
              <h2 className="back heading4"><IoIosArrowBack/>Back</h2>
              <h4 className="heading heading1">
                Sign in
              </h4>
              <div className="dividers"></div>
              <h4 className="back heading4">
                Enter your email and password to sign in!
              </h4>
              <div style={{display:"grid",padding:"2%"}}>
            
              <label className="heading4">Email</label>
              <input
                className="input"
                type="text"
                placeholder="Enter Your Username"
                name="username"
                required
              />
              </div>
              <div style={{display:"grid",padding:"2%"}}>
              <label className="heading4">Password</label>
              <input
                className="input"
                type="password" 
                placeholder="Enter Your Password"
                name="password"
                required
              />
              </div>
              <div style={{justifyContent:"space-between",display:"flex"}}>
              <div className="checkbox_input">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                />
                <label htmlFor="rememberMe" className="text_checkbox heading4">Remember me</label>
              </div>
                <span className="heading4" style={{alignContent:"center",color: "#E92928" }}>
                  Forgot password?
                </span>
              </div>
              <button className="login_btn" >Login</button>
            </form>
            <h4 className="signup_now heading4">
              Don't have an account ?{" "}
              <span >
                <span style={{color: "#E92928" }}>
                  Create an Account
                </span>
              </span>
            </h4>
            <h4 className="copyright heading4">© 2023 Spark Drive. All Rights Reserved. </h4>
          </div>
        </div>
        <div className="col-lg-6 d-none d-md-block h-auto p-0">
          <div className="background">
            <div className="content">
             <div className="d-flex p-flex">   
            <img style={{height:"3rem"}} src={logo}/>
            <div className="logo_spark" >Spark</div>
            </div>
            <div className="div_spark" >
            <h4 className="heading4">Learn more about Air Drive on</h4>
            <h2 className="heading2">Spark.pl</h2>
            </div>
            <div className="d_spark">
                <p className="p_spark heading4">License</p>
                <p className="p_spark heading4">Term of Use</p>
                <p className="p_spark heading4">Blog</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;