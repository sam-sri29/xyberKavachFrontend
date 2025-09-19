// import { useState } from 'react';
// import { IoShieldHalfOutline } from 'react-icons/io5';

// export default function About() {
//     const [isAnimating, setIsAnimating] = useState(true);

//     const restartAnimation = () => {
//         setIsAnimating(false);
//         setTimeout(() => {
//             setIsAnimating(true);
//         }, 50);
//     };

//     return (
//         <>
//             <div className='min-h-screen bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] overflow-hidden'>
//                 <div className=' flex flex-row  font-sans'>
//                     <div>

//                         <style jsx>{`
//           @keyframes jumpIn {
//             0% {
//               transform: translateY(-100vh) scale(0.5);
//               opacity: 0;
//             }
//             60% {
//               transform: translateY(20px) scale(1.1);
//               opacity: 1;
//             }
//             80% {
//               transform: translateY(-10px) scale(0.95);
//             }
//             100% {
//               transform: translateY(0) scale(1);
//               opacity: 1;
//             }
//           }
//         `}</style>

//                         <div
//                             className={`flex  gap-3 px-5 py-5 transition-all duration-1000 ${isAnimating
//                                 ? ''
//                                 : 'transform -translate-y-full scale-50 opacity-0'
//                                 }`}
//                             style={{
//                                 animation: isAnimating ? 'jumpIn 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'none',
//                                 transform: isAnimating ? '' : 'translateY(-100vh) scale(0.5)',
//                                 opacity: isAnimating ? '' : '0'
//                             }}
//                         >
//                             <IoShieldHalfOutline className='text-4xl md:text-5xl text-blue-300 drop-shadow-lg' strokeWidth={1.5} />
//                             <p className="text-4xl md:text-5xl drop-shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent font-semibold">
//                                 Xyber Kavach
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <h1 className='text-white'>About XYBER KAVACH</h1>
//                     <p>XYBER KAVACH is an advanced web security solution designed to safeguard your website against cyber threats, hacking attempts, and unauthorized access. Built with a focus on real-time monitoring and intelligent threat detection, XYBER KAVACH ensures that your online presence remains secure and resilient against attackers.</p>
//                     <p>Our system continuously monitors suspicious activities and instantly identifies potential hacking attempts. Whenever a malicious user tries to breach your site, XYBER KAVACH captures and provides all the crucial details, such as IP address, location, attack pattern, and timestamp, in a centralized Security Dashboard. This enables you to take informed actions quickly, without wasting time in guesswork.</p>
//                     <h3>Key Features</h3>
//                     <p>Real-Time Threat Detection – Instantly detects unauthorized login attempts, brute-force attacks, SQL injections, and other vulnerabilities.</p>
//                     <p>Intelligent Security Dashboard – Displays complete attacker details with actionable insights to strengthen your defenses.</p>
//                     <p>24/7 Monitoring – Works round the clock to ensure your website stays protected even when you are offline.</p>
//                     <p>Proactive Alerts – Notifies you instantly about suspicious activities through the dashboard and optional alerts.</p>
//                     <p>Data-Driven Insights – Provides analytics and reports to help you understand attack trends and improve security measures.</p>
//                     <h1>Why XYBER KAVACH?</h1>
//                     <p>In today’s digital era, hackers are evolving every second, and a strong shield is the only way to stay ahead. XYBER KAVACH acts as your cyber armor, proactively defending your site, alerting you to vulnerabilities, and ensuring that you have complete visibility over all intrusion attempts.p</p>
//                     <p>With XYBER KAVACH, you don’t just protect your website—you empower it with intelligence, resilience, and confidence.</p>
//                 </div>

//             </div>
//         </>
//     );
// }

import { useState } from 'react';
import { IoShieldHalfOutline } from 'react-icons/io5';

export default function About() {
    const [isAnimating, setIsAnimating] = useState(true);

    const restartAnimation = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsAnimating(true);
        }, 50);
    };

    return (
        <>
            <div className='min-h-screen bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] overflow-hidden'>
                <div className=' flex flex-row  font-sans'>
                    <div>

                        <style jsx>{`
          @keyframes jumpIn {
            0% {
              transform: translateY(-50vh);
              opacity: 0;
            }
            60% {
              transform: translateY(5px);
              opacity: 1;
            }
            80% {
              transform: translateY(-2px);
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>

                        <div
                            className={`flex  gap-3 px-5 py-5 transition-all duration-1000 ${isAnimating
                                ? ''
                                : 'transform -translate-y-full opacity-0'
                                }`}
                            style={{
                                animation: isAnimating ? 'jumpIn 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'none',
                                transform: isAnimating ? '' : 'translateY(-50vh)',
                                opacity: isAnimating ? '' : '0'
                            }}
                        >
                            <IoShieldHalfOutline className='text-4xl md:text-5xl text-blue-300 drop-shadow-lg' strokeWidth={1.5} />
                            <p className="text-4xl md:text-5xl drop-shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent font-semibold">
                                Xyber Kavach
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-white'>About XYBER KAVACH</h1>
                    <p>XYBER KAVACH is an advanced web security solution designed to safeguard your website against cyber threats, hacking attempts, and unauthorized access. Built with a focus on real-time monitoring and intelligent threat detection, XYBER KAVACH ensures that your online presence remains secure and resilient against attackers.</p>
                    <p>Our system continuously monitors suspicious activities and instantly identifies potential hacking attempts. Whenever a malicious user tries to breach your site, XYBER KAVACH captures and provides all the crucial details, such as IP address, location, attack pattern, and timestamp, in a centralized Security Dashboard. This enables you to take informed actions quickly, without wasting time in guesswork.</p>
                    <h3>Key Features</h3>
                    <p>Real-Time Threat Detection – Instantly detects unauthorized login attempts, brute-force attacks, SQL injections, and other vulnerabilities.</p>
                    <p>Intelligent Security Dashboard – Displays complete attacker details with actionable insights to strengthen your defenses.</p>
                    <p>24/7 Monitoring – Works round the clock to ensure your website stays protected even when you are offline.</p>
                    <p>Proactive Alerts – Notifies you instantly about suspicious activities through the dashboard and optional alerts.</p>
                    <p>Data-Driven Insights – Provides analytics and reports to help you understand attack trends and improve security measures.</p>
                    <h1>Why XYBER KAVACH?</h1>
                    <p>In today's digital era, hackers are evolving every second, and a strong shield is the only way to stay ahead. XYBER KAVACH acts as your cyber armor, proactively defending your site, alerting you to vulnerabilities, and ensuring that you have complete visibility over all intrusion attempts.</p>
                    <p>With XYBER KAVACH, you don't just protect your website—you empower it with intelligence, resilience, and confidence.</p>
                </div>

            </div>
        </>
    );
}