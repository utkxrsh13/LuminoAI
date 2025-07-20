import { Sparkles, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const linkSections = [
        {
            title: "AI Tools",
            links: ["Article Writer", "Blog Titles", "Image Generation", "Background Removal", "Object Removal", "Resume Review"]
        },
        {
            title: "Company",
            links: ["About Us", "Features", "Pricing", "Community", "Contact"]
        },
        {
            title: "Resources",
            links: ["Documentation", "Help Center", "API", "Blog", "Tutorials"]
        }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-60">
                <div className="h-full w-full" style={{
                    backgroundImage: `
                        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.4) 1px, transparent 0),
                        radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)
                    `,
                    backgroundSize: '40px 40px, 80px 80px',
                    backgroundPosition: '0 0, 20px 20px'
                }} />
            </div>

            <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg blur opacity-30"></div>
                            </div>
                            <span className="text-2xl font-bold gradient-text">LuminoAI</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering creativity with cutting-edge AI technology. Transform your workflow with our premium suite of AI-powered tools.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-purple-400" />
                                <span>support@luminoai.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-purple-400" />
                                <span>+91 9152801xyz</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-purple-400" />
                                <span>India</span>
                            </div>
                        </div>
                    </div>

                    {/* Link Sections */}
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-lg text-white mb-6 relative">
                                {section.title}
                                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Links & Newsletter */}
                <div className="glass border border-white/10 rounded-2xl p-8 mb-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Stay Connected</h3>
                            <p className="text-gray-400">Follow us for the latest AI innovations and updates</p>
                        </div>
                        
                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                            <a href="#" className="w-12 h-12 glass border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 transition-all duration-300 group">
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 glass border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 transition-all duration-300 group">
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 glass border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 transition-all duration-300 group">
                                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2025 LuminoAI. All rights reserved. Built with ❤️ for creators.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;