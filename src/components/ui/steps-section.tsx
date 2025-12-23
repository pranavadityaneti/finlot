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
            description: "Fill a quick form with basic details. No paperwork, no queues. Get started in under 2 minutes with our streamlined application process.",
        },
        {
            icon: ShieldCheck,
            title: "Quick Verification",
            description: "Our AI verifies your documents in minutes, not days. Secure, fast, and completely digital. No branch visits required.",
        },
        {
            icon: Wallet,
            title: "Receive Funds",
            description: "Approved loans are disbursed directly to your bank account within 24 hours. Track your application status in real-time.",
        },
    ]

    const floatingIcons = [
        { Icon: FileText, offset: -60 },
        { Icon: Building2, offset: -40 },
        { Icon: CreditCard, offset: -20 },
        { Icon: PiggyBank, offset: 0 },
        { Icon: Receipt, offset: 20 },
        { Icon: Banknote, offset: 40 },
        { Icon: CheckCircle2, offset: 60 },
    ]

    return (
        <section className="w-full bg-white text-black py-16 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">

                {/* Clustered Overlapping Icons */}
                <div className="relative flex items-center justify-center h-14">
                    {floatingIcons.map(({ Icon, offset }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 0.4, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="absolute"
                            style={{
                                left: `calc(50% + ${offset}px)`,
                                transform: 'translateX(-50%)',
                                zIndex: floatingIcons.length - index
                            }}
                        >
                            <Icon className="w-10 h-10 text-gray-300" strokeWidth={1} />
                        </motion.div>
                    ))}
                </div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-medium text-center max-w-2xl leading-tight"
                >
                    <span className="italic">Your loan journey,</span>{" "}
                    <span className="font-bold not-italic">simplified.</span>
                </motion.h2>

                {/* Minimal Step Cards */}
                <div className="grid md:grid-cols-3 gap-6 w-full">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-2xl p-5"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <step.icon className="w-4 h-4 text-gray-500" />
                                </div>
                                <h3 className="font-semibold text-base">{step.title}</h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* SVG Curved Lines - Organic, Hand-Drawn Style */}
                <div className="w-full h-32 relative">
                    <svg
                        viewBox="0 0 600 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            {/* Gradient for Lime line */}
                            <linearGradient id="gradLime" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#acf350" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#acf350" stopOpacity="1" />
                            </linearGradient>
                            {/* Gradient for Blue line */}
                            <linearGradient id="gradBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                            </linearGradient>
                            {/* Gradient for Orange line */}
                            <linearGradient id="gradOrange" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
                            </linearGradient>
                            {/* Gradient for Teal line */}
                            <linearGradient id="gradTeal" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="1" />
                            </linearGradient>
                        </defs>

                        {/* Line 1 - Lime (from left card) - slightly wobbly */}
                        <motion.path
                            d="M100 0 C95 25, 115 50, 105 75 Q100 95, 300 115"
                            stroke="url(#gradLime)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        {/* Line 2 - Blue (from center card - left curve) */}
                        <motion.path
                            d="M280 0 C275 30, 290 60, 285 90 Q282 105, 300 115"
                            stroke="url(#gradBlue)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        />
                        {/* Line 3 - Teal (from center card - right curve) */}
                        <motion.path
                            d="M320 0 C325 30, 310 60, 315 90 Q318 105, 300 115"
                            stroke="url(#gradTeal)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                        />
                        {/* Line 4 - Orange (from right card) */}
                        <motion.path
                            d="M500 0 C505 25, 485 50, 495 75 Q500 95, 300 115"
                            stroke="url(#gradOrange)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                        {/* Convergence Point */}
                        <motion.circle
                            cx="300"
                            cy="115"
                            r="5"
                            fill="#acf350"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 1 }}
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
