"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export const SolutionsSection = () => {
    const solutions = [
        {
            title: "Loan Solutions",
            tagline: "Funds when you need them",
            description: "From personal loans to business financing, get instant approval with minimal documentation. Flexible EMIs, competitive rates, and funds disbursed within 24 hours.",
            image: "/loan-card.png",
            href: "/loans",
            cta: "Explore Loans"
        },
        {
            title: "Insurance Solutions",
            tagline: "Protection for what matters",
            description: "Comprehensive coverage for health, vehicle, term life, and more. Hassle-free claims, trusted partners, and policies tailored to your lifestyle.",
            image: "/insurance-card.png",
            href: "/insurance",
            cta: "Explore Insurance"
        }
    ]

    return (
        <section className="w-full bg-[#020804] py-20 px-6 md:px-12 relative z-30">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Choose Your Path
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Whether you need funds to grow or protection to secure, we've got you covered.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Link href={solution.href}>
                                <div className="group bg-gray-50 rounded-2xl overflow-hidden flex h-72 md:h-80 cursor-pointer hover:shadow-xl transition-shadow duration-300">

                                    {/* Text Section (70%) */}
                                    <div className="w-[70%] p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                                                {solution.title}
                                            </h3>
                                            <p className="text-lg text-gray-600 font-medium mb-4">
                                                {solution.tagline}
                                            </p>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {solution.description}
                                            </p>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-black font-semibold group-hover:text-[#acf350] transition-colors">
                                            <span>{solution.cta}</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Image Section (30%) */}
                                    <div className="w-[30%] relative overflow-hidden">
                                        <Image
                                            src={solution.image}
                                            alt={solution.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        {/* Gradient Overlay on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#acf350]/0 to-[#222222]/0 group-hover:from-[#acf350]/40 group-hover:to-[#222222]/60 transition-all duration-500 mix-blend-overlay" />
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
