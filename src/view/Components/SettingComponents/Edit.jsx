import { useState } from 'react';
import { Shield, Mail, Phone, Lock, Globe, ExternalLink, Save, Eye, EyeOff } from 'lucide-react';

export default function Edit() {
    const [formData, setFormData] = useState({
        email: 'user@example.com',
        phone: '+1 234 567 8900',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        url: 'https://mywebsite.com',
        site: 'My Business Website'
    });

    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const [isLoading, setIsLoading] = useState(false);
    const [savedField, setSavedField] = useState('');

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSave = async (field = 'all') => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSavedField(field);
        setIsLoading(false);
        
        // Clear saved indicator after 2 seconds
        setTimeout(() => setSavedField(''), 2000);
    };

    const InputField = ({ 
        icon: Icon, 
        label, 
        field, 
        type = 'text', 
        placeholder,
        isPassword = false,
        passwordKey = ''
    }) => (
        <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400">
                        <Icon className="w-5 h-5" />
                    </div>
                    <label className="text-lg font-semibold text-white">
                        {label}
                    </label>
                </div>
                {savedField === field && (
                    <div className="flex items-center gap-2 text-green-400 text-sm animate-pulse">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Saved
                    </div>
                )}
            </div>
            
            <div className="relative mb-4">
                <input
                    type={isPassword && !showPasswords[passwordKey] ? 'password' : type}
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 pr-12"
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility(passwordKey)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        {showPasswords[passwordKey] ? 
                            <EyeOff className="w-5 h-5" /> : 
                            <Eye className="w-5 h-5" />
                        }
                    </button>
                )}
            </div>
            
            <button
                onClick={() => handleSave(field)}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Save className="w-4 h-4" />
                {isLoading && savedField === field ? 'Saving...' : 'Save'}
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-15"></div>
                <div className="absolute bottom-20 right-32 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-25"></div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40"></div>

            <div className="relative z-10 font-sans px-8 md:px-12 lg:px-16 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Shield className="w-16 h-16 text-blue-400 drop-shadow-xl" strokeWidth={1.5} />
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                            Edit Profile
                        </h1>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Update your account information and security settings for XYBER KAVACH
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Email */}
                        <InputField
                            icon={Mail}
                            label="Email Address"
                            field="email"
                            type="email"
                            placeholder="Enter your email address"
                        />

                        {/* Phone */}
                        <InputField
                            icon={Phone}
                            label="Phone Number"
                            field="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                        />

                        {/* URL */}
                        <InputField
                            icon={Globe}
                            label="Website URL"
                            field="url"
                            type="url"
                            placeholder="https://example.com"
                        />

                        {/* Site Name */}
                        <InputField
                            icon={ExternalLink}
                            label="Site Name"
                            field="site"
                            placeholder="Enter your site name"
                        />
                    </div>

                    {/* Password Section */}
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 shadow-2xl mb-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg text-red-400">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">
                                Change Password
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Current Password */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Current Password</label>
                                <div className="relative">
                                    <input
                                        type={showPasswords.current ? 'text' : 'password'}
                                        value={formData.currentPassword}
                                        onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                                        placeholder="Current password"
                                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-400/50 transition-all duration-300 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => togglePasswordVisibility('current')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {showPasswords.current ? 
                                            <EyeOff className="w-5 h-5" /> : 
                                            <Eye className="w-5 h-5" />
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* New Password */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">New Password</label>
                                <div className="relative">
                                    <input
                                        type={showPasswords.new ? 'text' : 'password'}
                                        value={formData.newPassword}
                                        onChange={(e) => handleInputChange('newPassword', e.target.value)}
                                        placeholder="New password"
                                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => togglePasswordVisibility('new')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {showPasswords.new ? 
                                            <EyeOff className="w-5 h-5" /> : 
                                            <Eye className="w-5 h-5" />
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showPasswords.confirm ? 'text' : 'password'}
                                        value={formData.confirmPassword}
                                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                        placeholder="Confirm password"
                                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => togglePasswordVisibility('confirm')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {showPasswords.confirm ? 
                                            <EyeOff className="w-5 h-5" /> : 
                                            <Eye className="w-5 h-5" />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => handleSave('password')}
                                disabled={isLoading || !formData.currentPassword || !formData.newPassword || formData.newPassword !== formData.confirmPassword}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Lock className="w-4 h-4" />
                                {isLoading && savedField === 'password' ? 'Updating Password...' : 'Update Password'}
                            </button>
                        </div>
                    </div>

                    {/* Save All Button */}
                    <div className="text-center">
                        <button
                            onClick={() => handleSave('all')}
                            disabled={isLoading}
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                        >
                            <div className="flex items-center gap-3">
                                <Save className="w-5 h-5" />
                                <span>{isLoading && savedField === 'all' ? 'Saving All Changes...' : 'Save All Changes'}</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}