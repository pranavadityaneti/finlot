"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Zap, Shield, Clock } from "lucide-react"
import { motion } from "motion/react"

export default function LoansPage() {
    const features = [
        { icon: Zap, title: "Instant Approval", description: "Get approved in minutes with our AI-powered verification system." },
        { icon: Clock, title: "24-Hour Disbursement", description: "Funds transferred directly to your bank within 24 hours." },
        { icon: Shield, title: "Secure Process", description: "Bank-grade encryption protects your data throughout." },
        { icon: CheckCircle2, title: "Minimal Documentation", description: "Just basic KYC documents - no lengthy paperwork." },
    ]

    const loanTypes = [
        { name: "Personal Loan", rate: "10.5% p.a.", amount: "Up to ₹25 Lakhs" },
        { name: "Business Loan", rate: "12% p.a.", amount: "Up to ₹50 Lakhs" },
        { name: "Home Loan", rate: "8.5% p.a.", amount: "Up to ₹5 Crores" },
        { name: "Education Loan", rate: "9% p.a.", amount: "Up to ₹75 Lakhs" },
    ]

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Header */}
            <nav className="p-6 max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Home</span>
                </Link>
                <Image src="/finlot-logo.png" alt="Finlot" width={120} height={40} className="h-10 w-auto" />
            </nav>

            {/* Hero */}
            <section className="py-20 px-6 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 bg-[#acf350]/20 text-[#222] text-sm font-medium rounded-full mb-6">
                        Loan Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Funds When You <br />
                        <span className="text-[#acf350]">Need Them</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
                        From personal loans to business financing, get instant approval with minimal documentation.
                        Flexible EMIs, competitive rates, and funds disbursed within 24 hours.
                    </p>
                    <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-[#acf350] hover:text-black transition-all">
                        Apply Now
                    </button>
                </motion.div>
            </section>

            {/* Features */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-12">Why Choose Finlot Loans?</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm"
                            >
                                <feature.icon className="w-10 h-10 text-[#acf350] mb-4" />
                                <h3 className="font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Loan Types */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-12">Loan Options</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {loanTypes.map((loan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border border-gray-200 p-6 rounded-xl hover:border-[#acf350] transition-colors"
                            >
                                <h3 className="font-bold text-lg mb-2">{loan.name}</h3>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Interest Rate</span>
                                    <span className="font-medium text-[#acf350]">{loan.rate}</span>
                                </div>
                                <div className="flex justify-between text-sm mt-1">
                                    <span className="text-gray-500">Max Amount</span>
                                    <span className="font-medium">{loan.amount}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-black text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Apply for a loan in minutes. Our team will guide you through every step.
                </p>
                <Link href="/contact">
                    <button className="bg-[#acf350] text-black px-8 py-4 font-semibold hover:bg-white transition-all">
                        Contact Us
                    </button>
                </Link>
            </section>
        </main>
    )
}
