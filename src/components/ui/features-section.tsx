"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Lock,
    Headphones,
    Building2,
    CheckCircle2,
    Clock,
    IndianRupee,
    Shield,
    Phone,
    MessageCircle
} from "lucide-react"

// Instant Approval Animation - Timer counting down to checkmark
function InstantApprovalAnimation() {
    const [phase, setPhase] = useState<'counting' | 'done'>('counting')
    const [count, setCount] = useState(2)

    useEffect(() => {
        if (phase === 'counting' && count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 800)
            return () => clearTimeout(timer)
        } else if (count === 0 && phase === 'counting') {
            setPhase('done')
            setTimeout(() => {
                setPhase('counting')
                setCount(2)
            }, 2000)
        }
    }, [count, phase])

    return (
        <div className="flex items-center justify-center h-full">
            <AnimatePresence mode="wait">
                {phase === 'counting' ? (
                    <motion.div
                        key="timer"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <Clock className="w-10 h-10 text-[#acf350]" />
                        <span className="text-5xl md:text-7xl font-bold text-white">{count}</span>
                        <span className="text-2xl text-gray-400">min</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="check"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <CheckCircle2 className="w-20 h-20 text-[#acf350]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// Loan Disbursement - Animated counter
function LoanDisbursementAnimation() {
    const [value, setValue] = useState(0)
    const target = 500

    useEffect(() => {
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0

        const interval = setInterval(() => {
            current += increment
            if (current >= target) {
                setValue(target)
                clearInterval(interval)
                // Reset after delay
                setTimeout(() => setValue(0), 2000)
            } else {
                setValue(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(interval)
    }, [value === 0])

    return (
        <div className="flex flex-col items-center justify-center h-full gap-2">
            <div className="flex items-baseline gap-1">
                <IndianRupee className="w-8 h-8 text-[#acf350]" />
                <motion.span
                    className="text-4xl md:text-5xl font-bold text-white"
                    key={value}
                >
                    {value}
                </motion.span>
                <span className="text-2xl text-[#acf350] font-bold">Cr+</span>
            </div>
            <span className="text-sm text-gray-400">Loans Disbursed</span>
        </div>
    )
}

// Partner Network - Bank icons with pulse
function PartnerNetworkAnimation() {
    const [activeIndex, setActiveIndex] = useState(0)
    const banks = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % banks.length)
        }, 400)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center justify-center h-full">
            <div className="grid grid-cols-3 gap-3">
                {banks.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${index === activeIndex ? 'bg-[#acf350]/30' : 'bg-white/5'
                            }`}
                        animate={{
                            scale: index === activeIndex ? 1.15 : 1,
                            borderColor: index === activeIndex ? '#acf350' : 'transparent'
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ border: '1px solid transparent' }}
                    >
                        <Building2 className={`w-5 h-5 ${index === activeIndex ? 'text-[#acf350]' : 'text-gray-600'
                            }`} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Claims Settled - Progress bar to 99%
function ClaimsSettledAnimation() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 800)
        const reset = setTimeout(() => setLoading(true), 4000)
        return () => {
            clearTimeout(timeout)
            clearTimeout(reset)
        }
    }, [loading])

    return (
        <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="h-12 flex items-center justify-center overflow-hidden relative w-full">
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loader"
                            className="h-8 w-20 bg-white/10 rounded"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        />
                    ) : (
                        <motion.span
                            key="text"
                            initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            className="text-4xl md:text-5xl font-bold text-[#acf350]"
                        >
                            99%
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            <span className="text-sm text-gray-400">Claims Settled</span>
            <div className="w-full max-w-[140px] h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#acf350] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: loading ? 0 : "99%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
                />
            </div>
        </div>
    )
}

// Security Badge - Shields lighting up
function SecurityAnimation() {
    const [shields, setShields] = useState([
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false }
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            setShields(prev => {
                const nextIndex = prev.findIndex(s => !s.active)
                if (nextIndex === -1) {
                    return prev.map(() => ({ id: Math.random(), active: false }))
                }
                return prev.map((s, i) => i === nextIndex ? { ...s, active: true } : s)
            })
        }, 600)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center justify-center h-full gap-3">
            {shields.map((shield) => (
                <motion.div
                    key={shield.id}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${shield.active ? 'bg-[#acf350]/20' : 'bg-white/5'
                        }`}
                    animate={{ scale: shield.active ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Shield className={`w-6 h-6 ${shield.active ? 'text-[#acf350]' : 'text-gray-600'}`} />
                </motion.div>
            ))}
        </div>
    )
}

// 24/7 Support - Chat bubbles animation
function SupportAnimation() {
    const [bubbles, setBubbles] = useState([false, false, false])

    useEffect(() => {
        const sequence = async () => {
            for (let i = 0; i < 3; i++) {
                await new Promise(r => setTimeout(r, 400))
                setBubbles(prev => {
                    const next = [...prev]
                    next[i] = true
                    return next
                })
            }
            await new Promise(r => setTimeout(r, 1500))
            setBubbles([false, false, false])
        }

        sequence()
        const interval = setInterval(sequence, 3500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center justify-center h-full gap-4">
            <div className="relative">
                <Headphones className="w-12 h-12 text-[#acf350]" />
            </div>
            <div className="flex flex-col gap-1.5">
                {bubbles.map((active, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-full ${active ? 'bg-[#acf350]' : 'bg-white/10'}`}
                        animate={{
                            width: active ? [20, 40, 60][index] : 30,
                            height: active ? 8 : 6,
                            opacity: active ? 1 : 0.3
                        }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </div>
        </div>
    )
}

export function FeaturesSection() {
    return (
        <section className="bg-[#020804] px-6 py-24 relative z-30">
            <div className="max-w-7xl w-full mx-auto">
                <motion.p
                    className="text-[#acf350] text-sm uppercase tracking-widest mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Why Finlot
                </motion.p>
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Built for Your Financial Success
                </motion.h2>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">

                    {/* 1. Instant Approval - Tall (2x2) */}
                    <motion.div
                        className="md:col-span-2 md:row-span-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:border-[#acf350]/30 transition-colors cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex-1">
                            <InstantApprovalAnimation />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl text-white font-semibold">Instant Approval</h3>
                            <p className="text-gray-400 text-sm mt-1">Get loan approval in under 2 minutes with our AI-powered verification.</p>
                        </div>
                    </motion.div>

                    {/* 2. Loan Disbursement - Standard (2x1) */}
                    <motion.div
                        className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:border-[#acf350]/30 transition-colors cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 0.98 }}
                    >
                        <div className="flex-1">
                            <LoanDisbursementAnimation />
                        </div>
                        <div className="mt-2">
                            <h3 className="text-lg text-white font-semibold">Total Disbursed</h3>
                            <p className="text-gray-400 text-sm mt-1">Trusted by 40,000+ Indians.</p>
                        </div>
                    </motion.div>

                    {/* 3. Partner Network - Tall (2x2) */}
                    <motion.div
                        className="md:col-span-2 md:row-span-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:border-[#acf350]/30 transition-colors cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex-1 flex items-center justify-center">
                            <PartnerNetworkAnimation />
                        </div>
                        <div className="mt-auto">
                            <div className="flex items-center gap-2 mb-1">
                                <Building2 className="w-5 h-5 text-[#acf350]" />
                                <span className="text-2xl font-bold text-[#acf350]">25+</span>
                            </div>
                            <h3 className="text-xl text-white font-semibold">Partner Banks</h3>
                            <p className="text-gray-400 text-sm mt-1">HDFC, ICICI, SBI, and more top institutions.</p>
                        </div>
                    </motion.div>

                    {/* 4. Claims Settled - Standard (2x1) */}
                    <motion.div
                        className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:border-[#acf350]/30 transition-colors cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 0.98 }}
                    >
                        <div className="flex-1">
                            <ClaimsSettledAnimation />
                        </div>
                        <div className="mt-2">
                            <h3 className="text-lg text-white font-semibold">Insurance Claims</h3>
                            <p className="text-gray-400 text-sm mt-1">Industry-leading settlement rate.</p>
                        </div>
                    </motion.div>

                    {/* 5. Security - Wide (3x1) */}
                    <motion.div
                        className="md:col-span-3 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:border-[#acf350]/30 transition-colors cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 0.98 }}
                    >
                        <div className="flex-1">
                            <SecurityAnimation />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl text-white flex items-center gap-2 font-semibold">
                                <Lock className="w-5 h-5 text-[#acf350]" />
                                Bank-Grade Security
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">256-bit encryption protects your data. RBI compliant.</p>
                        </div>
                    </motion.div>

                    {/* 6. 24/7 Support - Wide (3x1) */}
                    <motion.div
                        className="md:col-span-3 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:border-[#acf350]/30 transition-colors cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 0.98 }}
                    >
                        <div className="flex-1">
                            <SupportAnimation />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl text-white flex items-center gap-2 font-semibold">
                                <Headphones className="w-5 h-5 text-[#acf350]" />
                                24/7 Support
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">Expert assistance anytime via chat, call, or email.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
