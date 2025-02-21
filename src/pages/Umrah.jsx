import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaCalendar, FaHotel, FaUsers } from 'react-icons/fa'
import Button from '../components/Button'

export default function Umrah() {
  const programs = [
    {
      title: "Ramazon Umrasi",
      duration: "15 Kun",
      price: "Narxni bilish uchun biz bilan bog'laning",
      features: [
        "Ramazon oyida maxsus dastur",
        "5 yulduzli mehmonxonalar",
        "Professional gid",
        "Iftar va sahur tashkili"
      ]
    },
    {
      title: "Qish Umrasi",
      duration: "10 Kun",
      price: "Narxni bilish uchun biz bilan bog'laning",
      features: [
        "Qulay narxdagi dastur",
        "4 yulduzli mehmonxonalar",
        "Guruh gidi",
        "Barcha transferlar"
      ]
    }
  ]

  const highlights = [
    {
      icon: <FaCalendar className="text-4xl text-islamic-500" />,
      title: "Moslashuvchan Vaqt",
      description: "Yil davomida umra dasturlari"
    },
    {
      icon: <FaHotel className="text-4xl text-islamic-500" />,
      title: "Sifatli Yashash",
      description: "Eng yaxshi mehmonxonalar"
    },
    {
      icon: <FaUsers className="text-4xl text-islamic-500" />,
      title: "Professional Yordam",
      description: "Tajribali gidlar"
    }
  ]

  return (
    <div className="pt-20">
      <section 
        className="relative h-[60vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/umrah-hero.jpg)'
        }}
      >
        <div className="text-center px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text"
          >
            Umra Xizmatlari
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-corporate-50"
          >
            Muqaddas sayohatga professional yordam
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Umra Dasturlari</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-corporate-50 rounded-xl shadow-corporate overflow-hidden card-hover"
              >
                <div className="bg-islamic-500 text-white p-6">
                  <h3 className="text-2xl font-semibold">{program.title}</h3>
                  <p className="mt-2 text-corporate-100">{program.duration}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FaCheck className="text-islamic-500 mr-3" />
                        <span className="text-corporate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-full">
                    Batafsil Ma'lumot
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-corporate-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Asosiy Afzalliklarimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-corporate text-center card-hover"
              >
                <div className="mb-4 flex justify-center">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-islamic-600">{highlight.title}</h3>
                <p className="text-corporate-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
