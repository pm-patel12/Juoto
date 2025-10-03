import logoDark from "../../assets/images/logo-dark.svg";
import loginBanner from "../../assets/images/login-banner.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { TbMailCheck } from "react-icons/tb";

const Login = () => {
  const [addOtp, setAddOtp] = useState(false);
  const [isOtpVarified, setIsOtpVarified] = useState(false);
  return (
    <>
      <div className="login-page">
        <div className="inner">
          {!isOtpVarified ? (
            <>
              <div className="content-wrap">
                {!addOtp ? (
                  <div className="login-form">
                    <div className="mb-5">
                      <img src={logoDark} alt="Juoto" />
                    </div>
                    <div className="mb-3">
                      <h2 className="mb-1">👋 Welcome back to Juoto!</h2>
                      <p className="small light-text m-0">
                        Join Juoto and set up your store online in just a few
                        clicks. Sell anything, anywhere - no coding required.
                      </p>
                    </div>
                    <form action="">
                      <div className="mb-3">
                        <label className="form-label required">Email ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label required">Password</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter password (Required 8+ character please)"
                        />
                      </div>
                      <button
                        className="ctm-btn w-100"
                        onClick={() => setAddOtp((prev) => !prev)}
                      >
                        Get Started
                      </button>
                      <div className="d-flex align-items-center gap-2 py-2">
                        <hr />
                        <span className="small light-text px-4">OR</span>
                        <hr />
                      </div>
                      <button className="ctm-btn white-btn w-100 mb-4">
                        <FcGoogle />
                        Sign in with Google
                      </button>

                      <p className="small light-text text-center mb-2">
                        If you are already using juoto?{" "}
                        <Link className="small" to="#">
                          Log in here
                        </Link>
                      </p>
                      <p className="small light-text text-center">
                        By providing your email, you agreeing to our T&C
                      </p>
                    </form>
                  </div>
                ) : (
                  <div className="otp-form">
                    <div className="mb-5">
                      <img src={logoDark} alt="Juoto" />
                    </div>
                    <div className="mb-4">
                      <div className="mb-2">
                        <TbMailCheck
                          style={{
                            stroke: "var(--color-primary-500)",
                            strokeWidth: "1.5px",
                            height: "64px",
                            width: "64px",
                          }}
                        />
                      </div>
                      <h2 className="mb-1">We just emailed you.</h2>
                      <p className="light-text m-0">
                        Please enter the code we sent a emailed you.
                      </p>
                      <p className="">patelparth8141@gmail.com</p>
                    </div>
                    <div className="mb-4">
                      <label className="form-label required">
                        Confirmation Code
                      </label>
                      <div class="code-inputs m-0">
                        <input
                          type="text"
                          maxlength="1"
                          class="code-box form-control"
                        />
                        <input
                          type="text"
                          maxlength="1"
                          class="code-box form-control"
                        />
                        <input
                          type="text"
                          maxlength="1"
                          class="code-box form-control"
                        />
                        <input
                          type="text"
                          maxlength="1"
                          class="code-box form-control"
                        />
                        <input
                          type="text"
                          maxlength="1"
                          class="code-box form-control"
                        />
                        <input
                          type="text"
                          maxlength="1"
                          class="code-box form-control"
                        />
                      </div>
                    </div>
                    <button
                      className="ctm-btn w-100 mb-3"
                      onClick={() => setIsOtpVarified((prev) => !prev)}
                    >
                      Varify Email
                    </button>
                    <p className="small light-text text-center mb-2">
                      Didn't get your code?{" "}
                      <Link className="small" to="#">
                        Send a new code
                      </Link>
                    </p>
                  </div>
                )}
              </div>
              <div className="banner-wrap">
                <img src={loginBanner} alt="Juoto" />
              </div>
            </>
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="mb-5">
                <img src={logoDark} alt="Juoto" />
              </div>
              <span className="mx-auto d-block text-center mb-2 fs-1">🎉</span>
              <h2 className="text-center mb-1">Email Verified Successfully</h2>
              <p className="text-center light-text small">
                Your email is confirmed. Welcome aboard.{" "}
                <br className="d-none d-sm-block" />
                let’s get your business online!
              </p>
              <Link to="/store-setup" className="ctm-btn btn-sm px-4">
                Loading...
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
