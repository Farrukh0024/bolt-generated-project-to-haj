import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaKaaba, FaMosque, FaPlane, FaHotel, FaUsers, FaStar } from 'react-icons/fa'
import Button from '../components/Button'
import TestimonialSection from '../components/TestimonialSection'

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <FaKaaba className="text-4xl text-primary-500" />,
      title: "Haj Xizmatlari",
      description: "Professional yo'riqnoma va muqaddas makonda sifatli xizmat",
      bgColor: "bg-green-50"
    },
    {
      icon: <FaMosque className="text-4xl text-primary-500" />,
      title: "Umra Dasturlari",
      description: "Har bir byudjet uchun maxsus umra seyohatlari",
      bgColor: "bg-blue-50"
    },
    {
      icon: <FaPlane className="text-4xl text-primary-500" />,
      title: "Transport",
      description: "Qulay va xavfsiz transport xizmatlari",
      bgColor: "bg-purple-50"
    },
    {
      icon: <FaHotel className="text-4xl text-primary-500" />,
      title: "Yashash",
      description: "Eng yaxshi mehmonxonalarda komfortli yashash",
      bgColor: "bg-yellow-50"
    }
  ]

  const benefits = [
    {
      icon: <FaKaaba className="text-3xl text-primary-500" />,
      title: "Professional Xizmat",
      description: "20 yillik tajriba asosida professional xizmat ko'rsatamiz"
    },
    {
      icon: <FaUsers className="text-3xl text-primary-500" />,
      title: "Tajribali Gidlar",
      description: "Malakali va tajribali gidlar jamoasi"
    },
    {
      icon: <FaHotel className="text-3xl text-primary-500" />,
      title: "Qulay Mehmonxonalar",
      description: "Eng yaxshi va qulay mehmonxonalarda yashash imkoniyati"
    }
  ]

  return (
    <>
      <section className="hero-section relative h-screen flex items-center justify-center text-white bg-[#1a4d2e]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="hero-content text-center px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-overlay"
          >
            <span className="text-3xl block mb-4 text-white text-overlay">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
            Muqaddas Sayohatga Xush Kelibsiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white text-overlay"
          >
            20 yillik tajribamiz bilan haj va umra xizmatlarida sizga yordam beramiz
          </motion.p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" className="text-white">
              Xizmatlar
            </Button>
            <Button variant="secondary" className="text-white border-white hover:bg-white hover:text-primary-500">
              Batafsil
            </Button>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Bizning Xizmatlarimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-xl shadow-soft overflow-hidden card-hover ${feature.bgColor}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-primary-600">{feature.title}</h3>
                  <p className="text-secondary-600 text-center">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Nima uchun bizni tanlashingiz kerak?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-soft text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
    </>
  )
}
