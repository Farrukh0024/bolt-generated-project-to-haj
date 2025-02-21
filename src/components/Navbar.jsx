import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaMosque, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Bosh Sahifa', path: '/' },
    { name: 'Haj', path: '/hac' },
    { name: 'Umra', path: '/umre' },
    { name: 'Aloqa', path: '/iletisim' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <FaMosque className={`text-2xl ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                Mussafo Turizm
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-primary-700 hover:text-primary-900' : 'text-white hover:text-primary-100'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <FaTimes className={`text-2xl ${isScrolled ? 'text-primary-600' : 'text-white'}`} /> :
              <FaBars className={`text-2xl ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            }
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-2"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: '#f3f4f6' }}
            >
              <Link
                to={item.path}
                className="block px-4 py-3 text-primary-700 hover:text-primary-900"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}
