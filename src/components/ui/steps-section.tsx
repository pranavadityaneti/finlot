"use client"

import React from "react"
import { motion } from "motion/react"
import {
    FileText,
    ShieldCheck,
    Wallet,
    ClipboardList,
    Building2,
    CheckCircle2,
    Banknote,
    CreditCard,
    PiggyBank,
    Receipt
} from "lucide-react"

export const StepsSection = () => {
    const steps = [
        {
            icon: ClipboardList,
            title: "Apply Online",
            description: "Fill a quick form with basic details. No paperwork, no queues. Get started in under 2 minutes with our streamlined application process. Our intuitive interface guides you every step of the way.",
        },
        {
            icon: ShieldCheck,
            title: "Quick Verification",
            description: "Our AI verifies your documents in minutes, not days. Secure, fast, and completely digital. No branch visits required. Bank-grade encryption keeps your data safe throughout the process.",
        },
        {
            icon: Wallet,
            title: "Receive Funds",
            description: "Approved loans are disbursed directly to your bank account within 24 hours. Track your application status in real-time. Flexible repayment options designed to fit your financial goals.",
        },
    ]

    const floatingIcons = [
        FileText,
        Building2,
        CreditCard,
        PiggyBank,
        Receipt,
        Banknote,
        CheckCircle2,
    ]

    return (
        <section className="w-full bg-white text-black py-16 px-6 md:px-12 relative overflow-hidden">

            <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

                {/* De-clustered Icons with Hover Gradient */}
                <div className="flex items-center justify-center gap-6 md:gap-10">
                    {floatingIcons.map((Icon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 0.5, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="cursor-pointer"
                        >
                            <Icon
                                className="w-8 h-8 md:w-10 md:h-10 text-gray-300 icon-hover"
                                strokeWidth={1}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-medium text-center max-w-2xl leading-tight"
                >
                    <span className="italic">Your loan journey,</span>{" "}
                    <span className="relative inline-block px-2 font-bold not-italic isolate">
                        <motion.span
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
                            className="absolute inset-0 top-1 bottom-1 bg-[#acf350]"
                            style={{ zIndex: -1 }}
                        />
                        simplified.
                    </span>
                </motion.h2>

                {/* Wider Step Cards with Green Icons */}
                <div className="grid md:grid-cols-3 gap-4 w-full">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-lg bg-[#acf350]/20 flex items-center justify-center">
                                    <step.icon className="w-5 h-5 text-[#acf350]" />
                                </div>
                                <h3 className="font-semibold text-base">{step.title}</h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* SVG Curved Lines - V-Shape to Parallel */}
                <div className="w-full h-56 relative">
                    <svg
                        viewBox="0 0 600 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            {/* Gradient for Lime line */}
                            <linearGradient id="gradLime" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#acf350" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#acf350" stopOpacity="1" />
                            </linearGradient>
                            {/* Gradient for Blue line */}
                            <linearGradient id="gradBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                            </linearGradient>
                            {/* Gradient for Orange line */}
                            <linearGradient id="gradOrange" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
                            </linearGradient>
                            {/* Gradient for Teal line */}
                            <linearGradient id="gradTeal" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="1" />
                            </linearGradient>
                        </defs>

                        {/* Line 1 - Lime (from left card) - V then parallel */}
                        <motion.path
                            d="M80 0 C100 30, 140 60, 200 90 Q220 105, 220 200"
                            stroke="url(#gradLime)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                        {/* Line 2 - Blue (from center card - left side, with spacing) */}
                        <motion.path
                            d="M260 0 C265 30, 270 60, 270 90 Q270 105, 270 200"
                            stroke="url(#gradBlue)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        />
                        {/* Line 3 - Teal (from center card - right side, with spacing) */}
                        <motion.path
                            d="M340 0 C335 30, 330 60, 330 90 Q330 105, 330 200"
                            stroke="url(#gradTeal)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
                        />
                        {/* Line 4 - Orange (from right card) */}
                        <motion.path
                            d="M520 0 C500 30, 460 60, 400 90 Q380 105, 380 200"
                            stroke="url(#gradOrange)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        />
                    </svg>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Your Financial Partner, Finlot!</h3>
                    <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
                        From instant loans to comprehensive insurance, Finlot simplifies every financial decision.
                        Experience seamless, technology-driven services tailored to your needs.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
