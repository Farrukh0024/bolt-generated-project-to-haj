import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaPlane, FaHotel, FaUsers, FaCalendar, FaPhoneAlt } from 'react-icons/fa'
import Button from '../components/Button'

export default function Hajj() {
  const packages = [
    {
      title: "Premium Haj Dasturi",
      price: "Narxni bilish uchun biz bilan bog'laning",
      features: [
        "5 yulduzli mehmonxonalar",
        "Shaxsiy professional gid",
        "VIP transport xizmatlari",
        "Eng qulay joy va vaqt tanlovi",
        "24/7 yordam xizmati"
      ],
      bgColor: "bg-green-50"
    },
    {
      title: "Standart Haj Dasturi",
      price: "Narxni bilish uchun biz bilan bog'laning",
      features: [
        "4 yulduzli mehmonxonalar",
        "Guruh gidi",
        "Komfortli transport",
        "Barcha zarur xizmatlar",
        "Professional yo'riqnoma"
      ],
      bgColor: "bg-blue-50"
    }
  ]

  return (
    <div className="pt-20">
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Haj Dasturlari
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Professional xizmat va qulay sharoitlar bilan muqaddas safarga tayyormiz
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-xl shadow-soft overflow-hidden card-hover ${pkg.bgColor}`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-4">{pkg.title}</h3>
                  <p className="text-secondary-600 mb-6">{pkg.price}</p>
                  <ul className="space-y-4 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FaCheck className="text-primary-500 mr-3" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-full">
                    <FaPhoneAlt className="mr-2" />
                    Bog'lanish
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nima uchun bizni tanlashingiz kerak?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCalendar />,
                title: "Qulay vaqt",
                description: "O'zingizga qulay vaqtni tanlash imkoniyati"
              },
              {
                icon: <FaHotel />,
                title: "Yaxshi mehmonxonalar",
                description: "Eng yaxshi mehmonxonalarda yashash"
              },
              {
                icon: <FaUsers />,
                title: "Professional gidlar",
                description: "Tajribali va malakali gidlar"
              },
              {
                icon: <FaPlane />,
                title: "Qulay transport",
                description: "Barcha transport xizmatlari"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-soft text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-500 text-xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary-600">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
