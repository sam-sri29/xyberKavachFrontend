// import { IoShieldHalfOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]">
//       <div className="flex items-center mb-8">
//         <IoShieldHalfOutline className='text-6xl text-blue-300 drop-shadow-lg' />
//         <p className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent text-4xl font-semibold ml-2 typing-text'>
//           Xyber Kavach.
//         </p>
//       </div>
//       <div className="w-[90%] max-w-md bg-[#1e293b]/80 p-8 rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-bold text-white text-center mb-6">
//           Enter Your Details to Login
//         </h2>

//         <form className="flex flex-col gap-4">
//           {/* Email */}
//           <input
//             type="email"
//             placeholder="Email"
//             className="px-4 py-2 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Password */}
//           <input
//             type="password"
//             placeholder="Password"
//             className="px-4 py-2 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Signup Button */}
//           <Link to='/register'
//             type="submit"
//             className="mt-4 bg-blue-950  hover:bg-blue-900 text-white font-semibold py-2 rounded-lg transition-all text-center"
//           >
//             Login
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }


import { IoShieldHalfOutline, IoEyeOutline, IoEyeOffOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({  email: "", password: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form);
    navigate('/dashboard');
  }

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes drift {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3); }
        }
        
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 2s infinite;
        }
        
        .star:nth-child(1) { top: 10%; left: 20%; width: 2px; height: 2px; animation-delay: 0s; box-shadow: 0 0 4px rgba(255,255,255,0.8); }
        .star:nth-child(2) { top: 20%; left: 80%; width: 1px; height: 1px; animation-delay: 0.5s; box-shadow: 0 0 2px rgba(255,255,255,0.6); }
        .star:nth-child(3) { top: 30%; left: 10%; width: 3px; height: 3px; animation-delay: 1s; box-shadow: 0 0 6px rgba(255,255,255,1); }
        .star:nth-child(4) { top: 15%; left: 60%; width: 1px; height: 1px; animation-delay: 1.5s; box-shadow: 0 0 2px rgba(255,255,255,0.6); }
        .star:nth-child(5) { top: 50%; left: 5%; width: 2px; height: 2px; animation-delay: 2s; box-shadow: 0 0 4px rgba(255,255,255,0.8); }
        .star:nth-child(6) { top: 40%; left: 95%; width: 1px; height: 1px; animation-delay: 0.3s; box-shadow: 0 0 2px rgba(255,255,255,0.6); }
        .star:nth-child(7) { top: 75%; left: 25%; width: 2px; height: 2px; animation-delay: 1.2s; box-shadow: 0 0 4px rgba(255,255,255,0.8); }
        .star:nth-child(8) { top: 85%; left: 75%; width: 1px; height: 1px; animation-delay: 0.8s; box-shadow: 0 0 2px rgba(255,255,255,0.6); }
        .star:nth-child(9) { top: 65%; left: 90%; width: 3px; height: 3px; animation-delay: 1.8s; box-shadow: 0 0 6px rgba(255,255,255,1); }
        .star:nth-child(10) { top: 90%; left: 15%; width: 1px; height: 1px; animation-delay: 0.2s; box-shadow: 0 0 2px rgba(255,255,255,0.6); }
        .star:nth-child(11) { top: 25%; left: 45%; width: 1px; height: 1px; animation-delay: 0.7s; box-shadow: 0 0 2px rgba(255,255,255,0.6); }
        .star:nth-child(12) { top: 80%; left: 60%; width: 2px; height: 2px; animation-delay: 1.3s; box-shadow: 0 0 4px rgba(255,255,255,0.8); }
        
        .nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(6px);
          animation: drift 30s linear infinite;
        }
        
        .nebula-1 {
          top: 20%;
          width: 100px;
          height: 50px;
          background: radial-gradient(circle, rgba(103, 126, 234, 0.2) 0%, transparent 70%);
          animation-delay: 0s;
        }
        
        .nebula-2 {
          top: 60%;
          width: 120px;
          height: 60px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%);
          animation-delay: -15s;
        }
        
        .login-form {
          animation: slideInUp 0.8s ease-out;
        }
        
        .logo-container {
          animation: float 4s ease-in-out infinite;
        }
        
        .form-container {
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          animation: glow 4s ease-in-out infinite;
        }
        
        .input-group {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .input-group:hover {
          transform: translateY(-2px);
        }
        
        .input-field {
          transition: all 0.3s ease;
        }
        
        .input-field:focus {
          transform: scale(1.02);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .login-button {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }
        
        .login-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .login-button:hover:before {
          left: 100%;
        }
      `}</style>

      <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-slate-900">
        {/* Animated Background */}
        <div className='absolute inset-0 z-0'>
          {/* Stars */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="star"></div>
          ))}

          {/* Nebula Effects */}
          <div className="nebula nebula-1"></div>
          <div className="nebula nebula-2"></div>

          {/* Background Glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
              animation: 'pulse 6s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-sm md:max-w-md px-6 flex flex-col justify-center min-h-screen py-8">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-6 md:mb-8 logo-container">
            <IoShieldHalfOutline className='text-4xl md:text-5xl text-blue-300 drop-shadow-lg' />
            <p className='bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent text-2xl md:text-3xl font-bold ml-2'>
              Xyber Kavach
            </p>
          </div>

          {/* Login Form */}
          <div className="form-container bg-slate-900/40 backdrop-blur-md p-6 md:p-7 rounded-3xl shadow-2xl login-form w-full max-w-sm mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-1">
              Welcome Back
            </h2>
            <p className="text-gray-400 text-center mb-5 md:mb-6 text-sm">
              Enter your credentials to access your account
            </p>

            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="input-group">
                <div className="relative">
                  <IoMailOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-lg" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    className="input-field w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-slate-800/80"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="input-group">
                <div className="relative">
                  <IoLockClosedOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-lg" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className="input-field w-full pl-12 pr-12 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-slate-800/80"
                  />
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="login-button w-full py-3 text-white font-semibold rounded-xl relative overflow-hidden"
              >
                <span className="relative z-10">Sign In</span>
              </button>

              {/* Divider */}
              <div className="flex items-center my-3">
                <div className="flex-1 h-px bg-slate-700"></div>
                <span className="px-4 text-sm text-gray-400">or</span>
                <div className="flex-1 h-px bg-slate-700"></div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <span className="text-gray-400 text-sm">Don't have an account? </span>
                <Link 
                  to="/signup" 
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors hover:underline"
                >
                  Create Account
                </Link>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-xs">
              Protected by <span className="text-blue-400">Xyber Kavach</span> Security
            </p>
          </div>
        </div>
      </div>
    </>
  );
}