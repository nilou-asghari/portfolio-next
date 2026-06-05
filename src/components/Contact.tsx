'use client'

import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from '@/app/actions/sendEmail'
import Image from 'next/image'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

// ─── Schema ──────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// ─── Variants ────────────────────────────────────────────────────────────────

const titleVariant = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
}

const stagger = (delay = 0, gap = 0.13) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

// ─── Component ───────────────────────────────────────────────────────────────

export default function Contact() {
  const t = useTranslations('contact')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      setLoading(true)
      const result = await sendEmail(data)
      if (result.success) {
        toast.success('Message sent successfully!')
        reset()
      } else {
        toast.error('Something went wrong.')
      }
    } catch {
      toast.error('Failed to send message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-sepia-light py-20 md:py-32 relative overflow-hidden text-sepia-darkest"
    >
      {/* Decorative SVGs — mount-based to avoid absolute-position observer issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 }}
        className="absolute bottom-10 left-10 w-32 z-0 pointer-events-none hidden md:block"
      >
        <Image src="/parallax3.svg" alt="" width={200} height={200} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.6 }}
        className="absolute bottom-10 right-10 w-32 z-0 pointer-events-none hidden md:block"
      >
        <Image src="/parallax4.svg" alt="" width={200} height={200} />
      </motion.div>

      <div className="mx-auto max-w-6xl md:max-w-7xl px-6 md:px-12 relative z-10">

        {/* Title */}
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-8 md:mb-16 text-5xl md:text-7xl font-serif text-left"
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Left column — contact info staggered from left */}
          <motion.div
            variants={stagger(0.1, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-1 border-b md:border-b-0 md:border-r border-sepia-dark p-4 md:p-6 space-y-4 md:space-y-5"
          >
            <motion.div variants={slideLeft}>
              <p className="text-sm uppercase tracking-widest font-medium opacity-50">
                {t('phone')}
              </p>
              <p className="text-sm opacity-70">+49 1573 448 4519</p>
            </motion.div>

            <motion.div variants={slideLeft}>
              <p className="text-sm uppercase tracking-widest font-medium opacity-50">
                {t('email')}
              </p>
              <p className="text-sm opacity-70">nilou.asghari@gmail.com</p>
            </motion.div>

            <motion.div variants={slideLeft}>
              <p className="text-sm uppercase tracking-widest font-medium opacity-50">
                {t('location')}
              </p>
              <p className="text-sm opacity-70">Karlsruhe, Germany</p>
            </motion.div>
          </motion.div>

          {/* Form — fields stagger up one by one */}
          <motion.form
            variants={stagger(0.15, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-2 space-y-6 p-6"
          >
            {/* Name */}
            <motion.div variants={fadeUp}>
              <label htmlFor="name" className="block text-sm mb-2">
                {t('name')}
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                placeholder={t('name_placeholder')}
                className="w-full border border-sepia-dark/30 bg-transparent px-3 md:px-4 py-2 md:py-3 text-base md:text-lg leading-relaxed"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp}>
              <label htmlFor="email" className="block text-sm mb-2">
                {t('email')}
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                placeholder={t('email_placeholder')}
                className="w-full border border-sepia-dark/30 bg-transparent px-3 md:px-4 py-2 md:py-3 text-base md:text-lg leading-relaxed"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp}>
              <label htmlFor="message" className="block text-sm mb-2">
                {t('message')}
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                placeholder={t('message_placeholder')}
                className="w-full border border-sepia-dark/30 bg-transparent px-3 md:px-4 py-2 md:py-3 text-base md:text-lg leading-relaxed"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </motion.div>

            {/* Submit button — springs in last */}
            <motion.div variants={popIn}>
              <button
                type="submit"
                disabled={loading}
                className="border border-sepia-darkest px-6 py-3 text-sm font-medium hover:bg-sepia-darkest hover:text-sepia-lightest transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>

          </motion.form>
        </div>
      </div>
    </section>
  )
}
