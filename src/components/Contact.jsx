"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/app/actions/sendEmail";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const t = useTranslations("contact");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const result = await sendEmail(data);

      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-sepia-light py-20 md:py-32 relative overflow-hidden text-sepia-darkest"
    >
      {/* Decorative Shapes — z-0, sit behind the z-10 content wrapper */}
      <Image
        src="/parallax3.svg"
        alt=""
        width={200}
        height={200}
        className="absolute bottom-10 left-10 w-32 z-0 pointer-events-none hidden md:block"
      />
      <Image
        src="/parallax4.svg"
        alt=""
        width={200}
        height={200}
        className="absolute bottom-10 left-10 w-32 z-0 pointer-events-none hidden md:block"
      />

      {/* All content sits above the decorative images via z-10 */}
      <div className="mx-auto max-w-6xl md:max-w-7xl px-6 md:px-12 relative z-10">
        {/* Title */}
        <h2 className="mb-8 md:mb-16 text-5xl md:text-7xl font-serif text-left">
          {t("title")}
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column */}
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-sepia-dark p-4 md:p-6 space-y-4 md:space-y-5">
            <div>
              <p className="text-sm uppercase tracking-widest font-medium opacity-50">
                {t("phone")}
              </p>
              <p className="text-sm opacity-70">+49 1573 448 4519</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest font-medium opacity-50">
                {t("email")}
              </p>
              <p className="text-sm opacity-70">nilou.asghari@gmail.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest font-medium opacity-50">
                {t("location")}
              </p>
              <p className="text-sm opacity-70">Karlsruhe, Germany</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-2 space-y-6 p-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                {t("name")}
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder={t("name_placeholder")}
                className="w-full border border-sepia-dark/30 bg-transparent px-3 md:px-4 py-2 md:py-3 text-base md:text-lg leading-relaxed"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                {t("email")}
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder={t("email_placeholder")}
                className="w-full border border-sepia-dark/30 bg-transparent px-3 md:px-4 py-2 md:py-3 text-base md:text-lg leading-relaxed"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                {t("message")}
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                placeholder={t("message_placeholder")}
                className="w-full border border-sepia-dark/30 bg-transparent px-3 md:px-4 py-2 md:py-3 text-base md:text-lg leading-relaxed"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="border border-sepia-darkest px-6 py-3 text-sm font-medium hover:bg-sepia-darkest hover:text-sepia-lightest transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
