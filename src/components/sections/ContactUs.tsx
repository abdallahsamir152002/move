import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
// import { useTranslation } from "react-i18next";


const ContactUs = () => {

    // const {t} = useTranslation();
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"", 
        phone:"",  
        message:""
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(formData);
        alert("Message Sent!");
        setFormData({
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            message:""
        });
    };


    return(
        <section className="py-16 px-4 bg-white-900 text-white" id="Contact-Us">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-15">
                    <h2 className="text-4xl text-lime-500 font-bold mb-2">Contact Us</h2>
                    <p className="text-black text-lg">
                        Any question or remark? Just write us a message
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white-300 rounded-2xl p-8 shadow-lg text-white relative overflow-hidden">
                    {/* Left Side - Contact Info*/}

                    <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between text-black relative overflow-hidden">
                        <div>
                            <h3 className=" text-2xl text-lime-500 font-bold mb-4"> Contact Us</h3>
                            <p className="mb-6">
                                 Fill up the form and our team will get back to you within 24 hours.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" />
                                    <span>+123 456 7890</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5" />
                                    <span>contact@example.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5" />
                                    <span>123 Main St, City</span>
                                </div>
                            </div>
                        </div>


                        <div className="felx gap-4 mt-8">
                            <a href='#' className="text-white hover:text-gray-200">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href='#' className="text-white hover:text-gray-200">
                                <i className="fab fa-telegram-plane">
                                    </i>
                                    </a>
                        </div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full translate-x-1/2 translate-y-1/2 "></div>
                    </div>
                    {/* Right Side - Contact Form */}
                   <form onSubmit={handleSubmit} className="space-y-6 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black ">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-lime-600 hover:bg-lime-700 text-white py-3 px-6 rounded-xl transition-all"
                        >
                            Send Message
                        </button>
                    </form>                                
                </div>
            </div>
        </section>
    )   
}
export default ContactUs;

