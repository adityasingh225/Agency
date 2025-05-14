'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  parallax?: boolean
  amount?: number
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  parallax = false,
  amount = 0.1
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [50, -50] : [0, 0])
  const opacity = useTransform(scrollYProgress, [0, amount, 1], [0, 1, 1])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
} 