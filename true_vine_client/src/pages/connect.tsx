import Header from "../components/common/header";
import Footer from "../components/common/footer";
import pin from "../assets/icons/pin.svg";
import time from "../assets/icons/time.svg";

function ConnectPage() {
    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto text-center relative z-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">Connect With Us</h1>
                        <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto font-light">
                            We'd love to hear from you. Whether you have a prayer request, a question, or just want to say hello, our doors and hearts are open.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* Contact Information Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-1 transition-transform duration-300 border-t-4 border-blue-500">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <img src={pin} alt="Location" className="w-6 h-6" style={{ filter: 'invert(32%) sepia(91%) saturate(2311%) hue-rotate(204deg) brightness(98%) contrast(92%)' }} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    123 Grace Avenue,<br />
                                    Maitama District,<br />
                                    Abuja, Nigeria
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-1 transition-transform duration-300 border-t-4 border-purple-500">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    <a href="mailto:true.vine@gmail.com" className="hover:text-purple-600 transition-colors">true.vine@gmail.com</a>
                                </p>
                                <p className="text-gray-500 text-sm mt-2">We typically reply within 24 hours.</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-1 transition-transform duration-300 border-t-4 border-emerald-500">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    <a href="tel:+2348000000000" className="hover:text-emerald-600 transition-colors">+234 (0) 800 000 0000</a><br/>
                                    <a href="tel:+2348000000001" className="hover:text-emerald-600 transition-colors">+234 (0) 800 000 0001</a>
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>
                                
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Send a Message</h2>
                                    
                                    <form className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 outline-none"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                                <input 
                                                    type="email" 
                                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 outline-none"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                            <input 
                                                type="text" 
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 outline-none"
                                                placeholder="How can we help you?"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                                            <textarea 
                                                rows={5}
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 outline-none resize-none"
                                                placeholder="Write your message here..."
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="button"
                                            className="w-full md:w-auto px-10 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Service Times Banner */}
                    <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-gray-900 text-white p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
                                <img src={time} alt="Time" className="w-16 h-16 mb-6 filter invert opacity-90" />
                                <h3 className="text-3xl font-bold mb-2">Service Times</h3>
                                <p className="text-gray-400">Join us in fellowship</p>
                            </div>
                            <div className="p-12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Sunday Worship</h4>
                                    <p className="text-gray-600">First Service: 8:00 AM</p>
                                    <p className="text-gray-600">Second Service: 10:30 AM</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Wednesday Bible Study</h4>
                                    <p className="text-gray-600">Evening Service: 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ConnectPage;