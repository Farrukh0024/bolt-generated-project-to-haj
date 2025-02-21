import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Aziz Karimov",
      role: "Haj Ishtirokchisi",
      quote: "Mussafo Turizm bilan sayohatimiz juda yaxshi o'tdi. Professional xizmat va mehribon jamoasi uchun cheksiz minnatdorman."
    },
    {
      name: "Dilnoza Abdullayeva",
      role: "Umra Ziyoratchisi",
      quote: "Har bir tafsilotga e'tibor berilgan professional xizmat. Mening umra sayohatim unutilmas bo'ldi."
    },
    {
      name: "Bobur Rasulov",
      role: "Haj Ishtirokchisi",
      quote: "Mussafo Turizm bilan sayohat qilish juda qulay va xavfsiz. Barcha savollarimga tez va professional javob berishdi."
    }
  ]

  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mijozlarimiz Fikrlari</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-soft relative card-hover"
            >
              <FaQuoteLeft className="absolute top-4 right-4 text-primary-200 text-4xl" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-primary-600">{testimonial.name}</h4>
                  <p className="text-secondary-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-secondary-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
