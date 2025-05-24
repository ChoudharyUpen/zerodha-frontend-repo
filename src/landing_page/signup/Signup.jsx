import React, { useState } from "react";
import { Flexbox } from "./Flexbox";
import { Head } from "./Head";
import { Desc } from "./Desc";
import { Continue } from "./Continue";
import { Secdesc } from "./Secdesc";
import { Thdesc } from "./Thdesc";
import { Number } from "./Number";

export default function Signup() {
  const [step, setStep] = useState(1); // 1 = mobile input, 2 = otp input
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleContinue = () => {
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit number");
      return;
    }

    const fakeOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(fakeOtp);
    console.log("Generated OTP:", fakeOtp); // show in console
    setStep(2);
  };

  const handleVerify = () => {
    if (otp === generatedOtp) {
      alert("✅ Verified Successfully!");
      // Yaha tu redirect kar sakta hai dashboard pe
      //window.location.href = "/dashboard";
      //window.location.href = "http://localhost:3001"; // Redirect to backend/dashboard
      window.location.href = "https://zerodha-dashboard-repo.vercel.app"; // Redirect to deployed dashboard
    } else {
      alert("❌ Invalid OTP");
    }
  };

  return (
    <div>
      <Head>
        <h1>{`Join 3+ million investors & traders`}</h1>
      </Head>
      <Desc>
        Open a trading and Demat account online and start investing for free
      </Desc>

      <Flexbox>
        <img
          src="https://zerodha.com/static/images/account_open.png"
          alt="account_open"
        />
        <div>
          <h1>Signup now</h1>
          <Secdesc>Or track your existing application</Secdesc>

          {step === 1 && (
            <>
              <Number>
                <div>+91</div>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your 10 digit mobile number"
                />
              </Number>
              <Thdesc>You will receive an OTP on your number</Thdesc>
              <Continue onClick={handleContinue}>Continue</Continue>
            </>
          )}

          {step === 2 && (
            <>
              <Thdesc>Enter the OTP sent to your number</Thdesc>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <br />
              <Continue onClick={handleVerify}>Verify OTP</Continue>
            </>
          )}
        </div>
      </Flexbox>
    </div>
  );
}









// import React from "react";
// import { Link } from "react-router-dom";
// import { Flexbox } from "./Flexbox";
// import { Head } from "./Head";
// import { Desc } from "./Desc";
// import { Continue } from "./Continue";
// import { Secdesc } from "./Secdesc";
// import { Thdesc } from "./Thdesc";
// import { Number } from "./Number";

// export default function Signup() {
//   return (
//     <div>
//       <Head>
//         <h1>{`Join 3+ million investors & traders`}</h1>
//       </Head>
//       <Desc>
//         Open a trading and Demat account online and start investing for free
//       </Desc>

//       <Flexbox>
//         <img
//           src="https://zerodha.com/static/images/account_open.png"
//           alt="account_open"
//         />
//         <div>
//           <h1>Signup now</h1>
//           <Secdesc>Or track your existing application</Secdesc>
//           <Number>
//             <div>+91</div>
//             <input type="text" placeholder="Your 10 digit mobile number" />
//           </Number>
//           <Thdesc>You will receive an OTP on your number</Thdesc>

//           <Link
//             style={{
//               padding: "20px 0px",
//               textDecoration: "none",
//               color: "rgb(133, 133, 133)",
//             }}
//             to="/signup"
//           >
//             <Continue>Continue</Continue>
//           </Link>
//           <Link style={{ color: "#1762c4", fontSize: "13px" }}>
//             Want to open an NRI account?
//           </Link>
//         </div>
//       </Flexbox>
//     </div>
//   );
// }
