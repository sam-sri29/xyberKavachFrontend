// import React from 'react'
// import { IoShieldHalfOutline } from "react-icons/io5";
// import { Link } from 'react-router-dom';

// function RegisterSite() {
//     return (
//         <>
//             <div className='h-screen w-screen flex flex-col bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]'>
//                 <div className='flex  items-center justify-center mt-20'>
//                     <IoShieldHalfOutline className='size-15 text-blue-950' /><p className='text-2xl font-semibold text-white ml-2'>Your site’s first line of defense starts here — register to<span className='bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] bg-clip-text text-transparent text-4xl font-semibold ml-2'>Xyber Kavach</span> .</p>
//                 </div>

//                 <div className="h-screen w-screen flex items-center justify-center bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]">
//                     <div className="w-[90%] max-w-md bg-[#1e293b]/80 p-8 rounded-2xl shadow-lg">
//                         <h2 className="text-2xl font-bold text-white text-center mb-6">
//                             Access Control center
//                         </h2>

//                         <form className="flex flex-col gap-4">
//                             {/* URL */}
//                             <input
//                                 type="text"
//                                 placeholder="URL"
//                                 className="px-4 py-2 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />

//                             {/* License ID */}
//                             <input
//                                 type="text"
//                                 placeholder="License ID"
//                                 className="px-4 py-2 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />

//                             {/* Signup Button */}
//                             <Link to='/dashboard'
//                                 type="submit"
//                                 className="mt-4 bg-blue-950  hover:bg-blue-900 text-white font-semibold py-2 rounded-lg transition-all text-center"
//                             >
//                                 Register
//                             </Link>
//                         </form>
//                     </div>
//                 </div>

//             </div>


//         </>
//     )
// }

// export default RegisterSite



import React from 'react'
import { IoShieldHalfOutline, IoGlobeOutline, IoKeyOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function RegisterSite() {
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
                
                .register-form {
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
                
                .register-button {
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .register-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
                }
                
                .register-button:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }
                
                .register-button:hover:before {
                    left: 100%;
                }
            `}</style>

            <div className='h-screen w-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-slate-900'>
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

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                    <div className='flex items-center justify-center mb-6'>
                        <IoShieldHalfOutline className='text-4xl text-blue-300 drop-shadow-lg' />
                        <p className='text-lg font-semibold text-white ml-2'>Your site's first line of defense starts here — register to <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent text-2xl font-semibold ml-1'>Xyber Kavach</span>.</p>
                    </div>

                    <div className="form-container bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl shadow-2xl register-form w-full max-w-sm">
                        <h2 className="text-xl font-bold text-white text-center mb-1">
                            Access Control Center
                        </h2>
                        <p className="text-gray-400 text-center mb-4 text-sm">
                            Register your site for protection
                        </p>

                        <form className="space-y-3">
                            {/* URL */}
                            <div className="input-group">
                                <div className="relative">
                                    <IoGlobeOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-lg" />
                                    <input
                                        type="text"
                                        placeholder="Enter your website URL"
                                        className="input-field w-full pl-12 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-slate-800/80"
                                    />
                                </div>
                            </div>

                            {/* License ID */}
                            <div className="input-group">
                                <div className="relative">
                                    <IoKeyOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-lg" />
                                    <input
                                        type="text"
                                        placeholder="Enter License ID"
                                        className="input-field w-full pl-12 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-slate-800/80"
                                    />
                                </div>
                            </div>

                            {/* Register Button */}
                            <Link to='/dashboard'
                                className="register-button w-full py-2.5 text-white font-semibold rounded-xl relative overflow-hidden block text-center"
                            >
                                <span className="relative z-10">Register</span>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterSite