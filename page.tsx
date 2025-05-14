'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your online presence.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  }
]

export default function Services() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
          <div className="container">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive digital solutions to help your business thrive in the modern world.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="p-8 bg-white rounded-xl h-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how we can help you achieve your digital goals.
              </p>
              <motion.a
                href="/contact"
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 