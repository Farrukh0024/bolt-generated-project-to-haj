import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaTelegram />, url: '#' }
  ]

  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Mussafo Turizm</h3>
            <p className="text-gray-300">
              Sizning ishonchli hamkoringiz va haj-umra safarlari bo'yicha professional yo'l ko'rsatuvchingiz
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Aloqa</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <FaPhone className="mr-2" /> +998 XX XXX XX XX
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> info@mussafoturizm.uz
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> [Manzil]
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Ijtimoiy Tarmoqlar</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:text-green-300 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-green-700 mt-8 pt-8 text-center"
        >
          <p>© 2024 Mussafo Turizm. Barcha huquqlar himoyalangan.</p>
        </motion.div>
      </div>
    </footer>
  )
}
