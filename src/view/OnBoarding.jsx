import React from 'react'
import { IoShieldHalfOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

function OnBoarding() {
    return (
        <>
            <style jsx>{`
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
                
                @keyframes typeWriter {
                    from { width: 0; }
                    to { width: 100%; }
                }
                
                @keyframes blink {
                    50% { border-color: transparent; }
                }
                
                .star {
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                    animation: twinkle 2s infinite;
                }
                
                .star:nth-child(1) { top: 10%; left: 20%; width: 3px; height: 3px; animation-delay: 0s; box-shadow: 0 0 6px rgba(255,255,255,0.8); }
                .star:nth-child(2) { top: 20%; left: 80%; width: 2px; height: 2px; animation-delay: 0.5s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(3) { top: 30%; left: 60%; width: 4px; height: 4px; animation-delay: 1s; box-shadow: 0 0 8px rgba(255,255,255,1); }
                .star:nth-child(4) { top: 15%; left: 40%; width: 2px; height: 2px; animation-delay: 1.5s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(5) { top: 50%; left: 10%; width: 3px; height: 3px; animation-delay: 2s; box-shadow: 0 0 6px rgba(255,255,255,0.8); }
                .star:nth-child(6) { top: 40%; left: 90%; width: 2px; height: 2px; animation-delay: 0.3s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(7) { top: 75%; left: 30%; width: 3px; height: 3px; animation-delay: 1.2s; box-shadow: 0 0 6px rgba(255,255,255,0.8); }
                .star:nth-child(8) { top: 85%; left: 70%; width: 2px; height: 2px; animation-delay: 0.8s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(9) { top: 65%; left: 15%; width: 4px; height: 4px; animation-delay: 1.8s; box-shadow: 0 0 8px rgba(255,255,255,1); }
                .star:nth-child(10) { top: 90%; left: 85%; width: 2px; height: 2px; animation-delay: 0.2s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(11) { top: 45%; left: 45%; width: 2px; height: 2px; animation-delay: 0.7s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(12) { top: 95%; left: 75%; width: 3px; height: 3px; animation-delay: 1.3s; box-shadow: 0 0 6px rgba(255,255,255,0.8); }
                .star:nth-child(13) { top: 80%; left: 65%; width: 1px; height: 1px; animation-delay: 0.4s; box-shadow: 0 0 2px rgba(255,255,255,0.4); }
                .star:nth-child(14) { top: 72%; left: 25%; width: 1px; height: 1px; animation-delay: 1.6s; box-shadow: 0 0 2px rgba(255,255,255,0.4); }
                .star:nth-child(15) { top: 88%; left: 55%; width: 5px; height: 5px; animation-delay: 0.9s; box-shadow: 0 0 10px rgba(255,255,255,1); }
                .star:nth-child(16) { top: 78%; left: 5%; width: 1px; height: 1px; animation-delay: 2.2s; box-shadow: 0 0 2px rgba(255,255,255,0.4); }
                .star:nth-child(17) { top: 92%; left: 20%; width: 1px; height: 1px; animation-delay: 1.1s; box-shadow: 0 0 2px rgba(255,255,255,0.4); }
                .star:nth-child(18) { top: 82%; left: 78%; width: 2px; height: 2px; animation-delay: 0.6s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(19) { top: 68%; left: 50%; width: 2px; height: 2px; animation-delay: 1.4s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(20) { top: 77%; left: 12%; width: 3px; height: 3px; animation-delay: 0.1s; box-shadow: 0 0 6px rgba(255,255,255,0.8); }
                .star:nth-child(21) { top: 86%; left: 35%; width: 2px; height: 2px; animation-delay: 1.9s; box-shadow: 0 0 4px rgba(255,255,255,0.6); }
                .star:nth-child(22) { top: 93%; left: 45%; width: 1px; height: 1px; animation-delay: 0.8s; box-shadow: 0 0 2px rgba(255,255,255,0.4); }
                
                .nebula {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(4px);
                    animation: drift 25s linear infinite;
                }
                
                .nebula-1 {
                    top: 20%;
                    width: 120px;
                    height: 60px;
                    background: radial-gradient(circle, rgba(103, 126, 234, 0.3) 0%, transparent 70%);
                    animation-delay: 0s;
                }
                
                .nebula-2 {
                    top: 50%;
                    width: 150px;
                    height: 75px;
                    background: radial-gradient(circle, rgba(118, 75, 162, 0.25) 0%, transparent 70%);
                    animation-delay: -12s;
                }
                
                .nebula-3 {
                    top: 35%;
                    width: 80px;
                    height: 40px;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
                    animation-delay: -20s;
                }
                
                .nebula-4 {
                    top: 75%;
                    width: 100px;
                    height: 50px;
                    background: radial-gradient(circle, rgba(147, 51, 234, 0.25) 0%, transparent 70%);
                    animation-delay: -8s;
                }
                
                .nebula-5 {
                    top: 85%;
                    width: 90px;
                    height: 45px;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
                    animation-delay: -15s;
                }
                
                .typing-text {
                    display: inline-block;
                    overflow: hidden;
                    border-right: 3px solid rgba(103, 126, 234, 0.8);
                    white-space: nowrap;
                    animation: typeWriter 3s steps(15, end) 1s both, blink 1s step-end infinite 4s;
                }
            `}</style>

            <div className='h-screen w-screen flex flex-col relative bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden'>
                {/* Full Screen Animated Background */}
                <div className='absolute inset-0 z-0'>
                    {/* Animated Stars - Now covering full screen */}
                    {[...Array(22)].map((_, i) => (
                        <div key={i} className="star"></div>
                    ))}

                    {/* Floating Nebula Effects - Extended to bottom */}
                    <div className="nebula nebula-1"></div>
                    <div className="nebula nebula-2"></div>
                    <div className="nebula nebula-3"></div>
                    <div className="nebula nebula-4"></div>
                    <div className="nebula nebula-5"></div>

                    {/* Background Glow Effect - Full screen */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            background: 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(103, 126, 234, 0.15) 0%, transparent 50%)',
                            animation: 'pulse 8s ease-in-out infinite'
                        }}
                    ></div>
                </div>

                {/* Top Section - Logo and Branding */}
                <div className='relative z-10 flex h-[70vh] items-center justify-center'>
                    <div className='flex flex-col items-center space-y-4'>
                        <div className="flex items-center" style={{ animation: 'float 4s ease-in-out infinite' }}>
                            <IoShieldHalfOutline className='text-8xl text-blue-300 drop-shadow-lg' />
                            <p className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent text-7xl font-semibold ml-2 typing-text'>
                                Xyber Kavach
                            </p>
                        </div>
                        <div className="flex items-center" style={{ animation: 'float 4s ease-in-out infinite' }}>
                            <p className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent text-3xl font-semibold typing-text'>
                                Stronger Than Every Threat 
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Login/Signup */}
                <div className="relative z-10 flex h-[30vh]">
                    {/* Left 50% */}
                    <div className="flex flex-col w-1/2 items-center justify-center text-white">
                        <p className="text-lg mb-2">New to <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Xyber Kavach?</span></p>
                        <Link to='/signup'
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                        >
                            Sign up
                        </Link>
                    </div>

                    {/* Right 50% */}
                    <div className="flex flex-col w-1/2 items-center justify-center text-white">
                        <p className="text-lg mb-2">Already a family member?</p>
                        <Link to='/login'
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnBoarding