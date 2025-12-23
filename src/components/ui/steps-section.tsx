"use client"

import React from "react"
import { motion } from "motion/react"
import { FileText, ShieldCheck, Wallet, ClipboardList, Building2, CheckCircle2, Banknote } from "lucide-react"

export const StepsSection = () => {
    const steps = [
        {
            icon: ClipboardList,
            title: "Apply Online",
            description: "Fill a quick form with basic details. No paperwork, no queues.",
            color: "#acf350", // Neon Lime
        },
        {
            icon: ShieldCheck,
            title: "Quick Verification",
            description: "Our AI verifies your documents in minutes, not days.",
            color: "#60a5fa", // Blue
        },
        {
            icon: Wallet,
            title: "Receive Funds",
            description: "Approved loans are disbursed directly to your bank account.",
            color: "#f97316", // Orange
        },
    ]

    const floatingIcons = [
        { Icon: FileText, x: "10%", y: "5%", delay: 0 },
        { Icon: Building2, x: "25%", y: "0%", delay: 0.1 },
        { Icon: CheckCircle2, x: "50%", y: "3%", delay: 0.2 },
        { Icon: Banknote, x: "75%", y: "0%", delay: 0.3 },
        { Icon: ClipboardList, x: "90%", y: "5%", delay: 0.4 },
    ]

    return (
        <section className="w-full bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">

                {/* Floating Icons */}
                <div className="relative w-full h-20 mb-4">
                    {floatingIcons.map(({ Icon, x, y, delay }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 0.6, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay }}
                            className="absolute"
                            style={{ left: x, top: y }}
                        >
                            <Icon className="w-10 h-10 text-gray-300" strokeWidth={1.5} />
                        </motion.div>
                    ))}
                </div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-medium text-center italic max-w-3xl leading-tight"
                >
                    Your loan journey,{" "}
                    <span className="not-italic font-bold">simplified.</span>
                </motion.h2>

                {/* Step Cards */}
                <div className="grid md:grid-cols-3 gap-8 w-full">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative bg-gray-50 rounded-2xl p-6 border-l-4"
                            style={{ borderLeftColor: step.color }}
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                                style={{ backgroundColor: `${step.color}20` }}
                            >
                                <step.icon className="w-5 h-5" style={{ color: step.color }} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* SVG Curved Lines */}
                <div className="w-full h-48 relative">
                    <svg
                        viewBox="0 0 600 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Line 1 - Green (from left card) */}
                        <motion.path
                            d="M100 0 Q100 75 300 140"
                            stroke="#acf350"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                        {/* Line 2 - Blue (from center card) */}
                        <motion.path
                            d="M300 0 Q300 75 300 140"
                            stroke="#60a5fa"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        />
                        {/* Line 3 - Orange (from right card) */}
                        <motion.path
                            d="M500 0 Q500 75 300 140"
                            stroke="#f97316"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        />
                        {/* Convergence Point */}
                        <motion.circle
                            cx="300"
                            cy="140"
                            r="6"
                            fill="#acf350"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 1.2 }}
                        />
                    </svg>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">Meet Finlot.</h3>
                    <p className="text-xl text-gray-600 mb-4">Your complete financial partner.</p>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm">
                        Finlot is more than just a loan provider. It's a complete financial ecosystem
                        that will scale with your needs. All the benefits of modern finance, with none of the hassle.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
