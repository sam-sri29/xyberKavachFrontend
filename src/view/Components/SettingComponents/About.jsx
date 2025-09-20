import { useState, useEffect } from 'react';
import { Shield ,Eye, Zap, BarChart3, Bell, Clock } from 'lucide-react';
import { IoShieldHalfOutline } from "react-icons/io5";

export default function About() {
    const [isAnimating, setIsAnimating] = useState(true);
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        // Staggered animation for sections
        const timeouts = [];
        ['features', 'keyFeatures', 'whyUs'].forEach((section, index) => {
            const timeout = setTimeout(() => {
                setVisibleSections(prev => ({ ...prev, [section]: true }));
            }, 1000 + index * 300);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    const restartAnimation = () => {
        setIsAnimating(false);
        setVisibleSections({});
        setTimeout(() => {
            setIsAnimating(true);
        }, 50);
    };

    const featureItems = [
        {
            icon: <Shield className="text-2xl" />,
            title: "Advanced Protection",
            desc: "Safeguards against cyber threats, hacking attempts, and unauthorized access with intelligent threat detection."
        },
        {
            icon: <BarChart3 className="text-2xl" />,
            title: "Intelligent Dashboard",
            desc: "Complete attacker details with actionable insights to strengthen your defenses."
        },
        {
            icon: <Zap className="text-2xl" />,
            title: "Real-Time Detection",
            desc: "Instantly detects unauthorized login attempts, brute-force attacks, and SQL injections."
        },
        {
            icon: <Clock className="text-2xl" />,
            title: "24/7 Monitoring",
            desc: "Works round the clock to ensure your website stays protected even when you're offline."
        },
        {
            icon: <Bell className="text-2xl" />,
            title: "Proactive Alerts",
            desc: "Instant notifications about suspicious activities through dashboard and optional alerts."
        },
        {
            icon: <Eye className="text-2xl" />,
            title: "Data-Driven Insights",
            desc: "Analytics and reports to help you understand attack trends and improve security."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-15"></div>
                <div className="absolute bottom-20 right-32 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-25"></div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40"></div>

            <div className="relative z-10 font-sans">
                {/* Header Section */}
                <div className="relative">
                    <style jsx>{`
                        @keyframes jumpIn {
                            0% {
                                transform: translateY(-50vh) scale(0.8);
                                opacity: 0;
                            }
                            60% {
                                transform: translateY(10px) scale(1.05);
                                opacity: 1;
                            }
                            80% {
                                transform: translateY(-5px) scale(0.98);
                            }
                            100% {
                                transform: translateY(0) scale(1);
                                opacity: 1;
                            }
                        }
                        @keyframes shimmer {
                            0% { background-position: -200% center; }
                            100% { background-position: 200% center; }
                        }
                        .shimmer-text {
                            background: linear-gradient(90deg, #60a5fa 0%, #a855f7 25%, #06b6d4 50%, #a855f7 75%, #60a5fa 100%);
                            background-size: 200% auto;
                            background-clip: text;
                            -webkit-background-clip: text;
                            color: transparent;
                            animation: shimmer 3s linear infinite;
                        }
                    `}</style>

                    <div
                        className={`flex items-center justify-center gap-4 px-8 py-8 transition-all duration-1000 ${
                            isAnimating ? '' : 'transform -translate-y-full opacity-0'
                        }`}
                        style={{
                            animation: isAnimating ? 'jumpIn 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'none',
                            transform: isAnimating ? '' : 'translateY(-50vh)',
                            opacity: isAnimating ? '' : '0'
                        }}
                    >
                        <div className="text-center">
                            <div className='flex items-center justify-center gap-3'>
                                <IoShieldHalfOutline className='text-5xl md:text-6xl font-bold text-blue-300 drop-shadow-lg' />
                            <h1 className="text-5xl md:text-6xl font-bold shimmer-text drop-shadow-lg">
                                Xyber Kavach
                            </h1>
                            </div>
                            <p className="text-blue-200 text-lg md:text-xl font-light mt-2 opacity-90">
                                Advanced Web Security Solution
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-8 md:px-12 lg:px-16 pb-12 space-y-16">
                    {/* About Section */}
                    <div className={`transition-all duration-1000 ${visibleSections.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 shadow-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent mb-6">
                                About XYBER KAVACH
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our system continuously monitors suspicious activities and instantly identifies potential hacking attempts. 
                                Whenever a malicious user tries to breach your site, <span className="text-blue-400 font-semibold">XYBER KAVACH</span> captures 
                                and provides all the crucial details, such as IP address, location, attack pattern, and timestamp, in a 
                                centralized Security Dashboard. This enables you to take informed actions quickly, without wasting time in guesswork.
                            </p>
                        </div>
                    </div>

                    {/* Key Features Grid */}
                    <div className={`transition-all duration-1000 ${visibleSections.keyFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent mb-8 text-center">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featureItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400 group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why XYBER KAVACH Section */}
                    <div className={`transition-all duration-1000 ${visibleSections.whyUs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-slate-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent mb-6">
                                Why XYBER KAVACH?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        In today's digital era, hackers are evolving every second, and a strong shield is the only way to stay ahead. 
                                        <span className="text-blue-400 font-semibold"> XYBER KAVACH</span> acts as your cyber armor, proactively defending 
                                        your site, alerting you to vulnerabilities, and ensuring that you have complete visibility over all intrusion attempts.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        With <span className="text-purple-400 font-semibold">XYBER KAVACH</span>, you don't just protect your website—you 
                                        <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold"> empower it with intelligence, resilience, and confidence</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    );
}