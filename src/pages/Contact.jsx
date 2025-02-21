import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import Button from '../components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic
    console.log(formData)
  }

  const contactInfo = [
    {
      icon: <FaPhone className="text-islamic-500 text-3xl" />,
      title: "Telefon",
      info: "+998 XX XXX XX XX"
    },
    {
      icon: <FaEnvelope className="text-islamic-500 text-3xl" />,
      title: "E-pochta",
      info: "info@mussafoturizm.uz"
    },
    {
      icon: <FaMapMarkerAlt className="text-islamic-500 text-3xl" />,
      title: "Manzil",
      info: "[Sizning manzil]"
    }
  ]

  return (
    <div className="pt-20">
      <section 
        className="relative h-[50vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/contact-hero.jpg)'
        }}
      >
        <div className="text-center px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text"
          >
            Biz bilan bog'laning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-corporate-50"
          >
            Har qanday savolga javob berishga tayyormiz
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-corporate-50 p-8 rounded-xl shadow-corporate"
            >
              <h2 className="text-2xl font-semibold mb-6 text-islamic-600">Xabar Yuborish</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-corporate-700 mb-2">Ism Familiya</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-corporate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-corporate-700 mb-2">Telefon Raqam</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-corporate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-corporate-700 mb-2">Xabar</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-corporate-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-islamic-300"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  icon={<FaPaperPlane />}
                >
                  Yuborish
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold text-islamic-600">Biz bilan bog'laning</h2>
              <p className="text-corporate-700">
                Har qanday savolga javob berishga tayyormiz. Sizning qulayligingiz uchun turli kanallarda mavjudmiz.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index} 
                    className="bg-corporate-50 p-6 rounded-xl shadow-corporate flex items-center space-x-4 card-hover"
                  >
                    <div>{contact.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-islamic-600">{contact.title}</h3>
                      <p className="text-corporate-700">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-islamic-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-islamic-700 mb-4">Ish Vaqti</h3>
                <p className="text-corporate-700">
                  Dushanba - Juma: 09:00 - 18:00
                  <br />
                  Shanba: 10:00 - 14:00
                  <br />
                  Yakshanba: Dam olish kuni
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
