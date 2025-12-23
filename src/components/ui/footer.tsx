"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

// --- CTA Section ---
export function CTASection() {
    return (
        <section className="bg-[#020804] px-6 py-20 relative z-30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-[#acf350] via-[#7cb82f] to-[#222222]">
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Content - Center Aligned */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                            Start Your Financial Journey Today
                        </h2>
                        <p className="text-black/70 text-lg mb-8 max-w-lg">
                            Join thousands of Indians who trust Finlot for their loans and insurance needs.
                        </p>
                        <Link href="/contact">
                            <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

// --- Footer Section ---
export function Footer() {
    const footerLinks = {
        Company: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Partners", href: "#" },
        ],
        Support: [
            { label: "Contact", href: "/contact" },
            { label: "FAQs", href: "/contact" },
            { label: "Help Center", href: "#" },
            { label: "System Status", href: "#" },
        ],
        Legal: [
            { label: "Terms & Conditions", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Disclaimer", href: "#" },
            { label: "Grievance", href: "#" },
        ],
    }

    return (
        <footer className="bg-[#020804] border-t border-white/5 pt-16 pb-8 px-6 relative z-30">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-6 gap-12 mb-16">

                    {/* Logo */}
                    <div className="md:col-span-2">
                        <Image
                            src="/finlot-logo.png"
                            alt="Finlot"
                            width={400}
                            height={120}
                            className="h-28 md:h-40 w-auto object-contain mb-6"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Your trusted partner for instant loans and comprehensive insurance solutions.
                            Empowering 40,000+ Indians to achieve financial freedom.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-[#acf350] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Email Signup + Social */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-8 border-t border-white/5">

                    {/* Email Signup */}
                    <div className="w-full md:w-auto">
                        <p className="text-white font-medium mb-3">Stay Updated</p>
                        <div className="flex gap-2">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#acf350]/50 w-64"
                                />
                            </div>
                            <button className="bg-[#acf350] text-black px-5 py-3 rounded-lg font-semibold hover:bg-[#9be040] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-sm mr-2">Follow us</span>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#acf350]/20 hover:border-[#acf350]/50 transition-all">
                            <Twitter className="w-4 h-4 text-gray-400 hover:text-[#acf350]" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#acf350]/20 hover:border-[#acf350]/50 transition-all">
                            <Linkedin className="w-4 h-4 text-gray-400 hover:text-[#acf350]" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#acf350]/20 hover:border-[#acf350]/50 transition-all">
                            <Instagram className="w-4 h-4 text-gray-400 hover:text-[#acf350]" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-sm">
                        © 2024 Finlot. All rights reserved. Made with ❤️ in India
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-[#acf350] transition-colors">Terms & Conditions</Link>
                        <Link href="#" className="hover:text-[#acf350] transition-colors">Privacy Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}
