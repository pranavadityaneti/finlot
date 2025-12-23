"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export const AboutSection = () => {
    const stats = [
        { label: "LOANS DISBURSED", value: "₹500Cr+" },
        { label: "HAPPY FAMILIES", value: "40,000+" },
        { label: "PARTNER BANKS", value: "25+" },
        { label: "CLAIMS SETTLED", value: "99%" },
    ]

    return (
        <section className="w-full bg-white text-black py-24 px-6 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">

                {/* Top Row */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] max-w-xl">
                        We Translate <br />
                        <span className="relative inline-block px-[5.5px] whitespace-nowrap">
                            <motion.span
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
                                className="absolute inset-0 top-1 bottom-1 bg-[#acf350] -z-10"
                            />
                            Complex Finance
                        </span> <br />
                        Into Simple <br />
                        Growth
                    </h2>

                    {/* Description and Button */}
                    <div className="flex flex-col gap-8 lg:pt-4 max-w-lg">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Whether it's an instant loan to scale your business or comprehensive insurance to protect your future, we bring transparency, speed, and technology to every financial decision you make.
                        </p>

                        <Link href="/about">
                            <button className="bg-black text-white px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-[#acf350] hover:text-black transition-all duration-300 flex items-center gap-2 group">
                                Know More About us
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Bottom Row: Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-gray-200 pt-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h4 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">
                                {stat.label}
                            </h4>
                            <p className="text-4xl md:text-5xl font-medium tracking-tight">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
