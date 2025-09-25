import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ContactUs = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        alert(t("contact.alert"));
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <section className="py-16 px-4 bg-white text-black" id="Contact-Us">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-15">
                    <h2 className="text-4xl text-lime-500 font-bold mb-2">
                        {t("contact.title")}
                    </h2>
                    <p className="text-black text-lg">{t("contact.subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 rounded-2xl p-8 shadow-lg text-black relative overflow-hidden">
                    {/* Left Side - Contact Info */}
                    <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between text-black relative overflow-hidden">
                        <div>
                            <h3 className="text-2xl text-lime-500 font-bold mb-4">
                                {t("contact.infoTitle")}
                            </h3>
                            <p className="mb-6">{t("contact.infoDescription")}</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" />
                                    <span>{t("contact.phone")}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5" />
                                    <span>{t("contact.email")}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5" />
                                    <span>{t("contact.address")}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a href="#" className="text-white hover:text-gray-200">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white hover:text-gray-200">
                                <i className="fab fa-telegram-plane"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                            <input
                                type="text"
                                name="firstName"
                                placeholder={t("contact.form.firstName")}
                                value={formData.firstName}
                                onChange={handleChange}
                                className="p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder={t("contact.form.lastName")}
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
                                placeholder={t("contact.form.email")}
                                value={formData.email}
                                onChange={handleChange}
                                className="p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder={t("contact.form.phone")}
                                value={formData.phone}
                                onChange={handleChange}
                                className="p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder={t("contact.form.message")}
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                            required
                        ></textarea>
                        <motion.button
                            type="submit"
                            className="bg-lime-500 text-white py-3 px-6 rounded-xl font-semibold"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                                backgroundColor: "#84cc16"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {t("contact.form.submit")}
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
