"use client"

import React from "react"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContactForm } from "@/components/ui/contact-form"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { HamburgerMenu } from "@/components/ui/hamburger-menu"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#020804] text-white selection:bg-[#acf350] selection:text-black">

            {/* Navigation (Reuse Header style but simpler) */}
            <nav className="relative z-50 p-6 max-w-7xl mx-auto w-full flex items-center justify-between h-40">
                <Link href="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>

                {/* Centered Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/finlot-logo.png"
                        alt="Finlot"
                        width={240}
                        height={80}
                        className="h-16 md:h-20 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Menu */}
                <div className="flex items-center gap-4">
                    <HamburgerMenu />
                </div>
            </nav>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-6 pb-24 pt-10">

                {/* Contact Section */}
                <section className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-32">

                    {/* Left Column: Info & Text */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-[#acf350] text-xs font-bold tracking-widest uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#acf350]" />
                            Contact
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                            Get In <span className="text-[#acf350]">Touch</span>
                        </h1>

                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            Receive expert guidance to maximize your financial growth.
                            Whether it's a loan query or insurance claim, we're here to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#acf350]">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span>support@finlot.in</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#acf350]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span>+91 1800-FIN-LOT</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12">
                        <ContactForm />
                    </div>

                </section>

                {/* FAQ Section */}
                <section className="flex flex-col items-center">

                    <div className="flex items-center gap-2 text-[#acf350] text-xs font-bold tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#acf350]" />
                        Frequently Asked Questions
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Frequently Asked <span className="text-[#acf350]">Questions</span>
                    </h2>

                    <FAQAccordion />

                </section>

            </div>

        </main>
    )
}
