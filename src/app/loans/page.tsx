"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Zap, Shield, Clock, ChevronLeft, ChevronRight, User, Briefcase, Home, GraduationCap, Car, Coins, LineChart } from "lucide-react"
import { motion } from "motion/react"
import { useRef } from "react"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { FAQAccordion } from "@/components/ui/faq-accordion"

export default function LoansPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 340 // card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    const loanServices = [
        { title: "Personal Loan", icon: User, description: "Funds for your personal needs.", shape: "circle" },
        { title: "Business Loan", icon: Briefcase, description: "Expand your business horizons.", shape: "square" },
        { title: "Home Loan", icon: Home, description: "Build your dream home.", shape: "roof" },
        { title: "Education Loan", icon: GraduationCap, description: "Invest in your future.", shape: "diploma" },
        { title: "Vehicle Loan", icon: Car, description: "Drive your dream car.", shape: "wheel" },
        { title: "Gold Loan", icon: Coins, description: "Instant funds against gold.", shape: "hexagon" },
        { title: "Loan On Demand", icon: Zap, description: "Flexible credit line anytime.", shape: "bolt" },
        { title: "Loan Against Funds", icon: LineChart, description: "Liquidity from your investments.", shape: "graph" },
    ]



    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#acf350] selection:text-black">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#acf350]/20 to-gray-200" />
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#acf350]/30 rounded-full blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] opacity-50 pointer-events-none" />
            </div>

            {/* Header */}
            <Navbar />

            {/* Hero Section */}
            <div className="relative z-10 pt-20 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">

                {/* Left: Main Headline */}
                <div className="flex-1 max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-black leading-[1.1] mb-6">
                        funds when <br />
                        you need them <br />
                        <span className="text-[#6ea31e]">most.</span>
                    </h1>
                </div>

                {/* Right: Subtext and Intro */}
                <div className="flex-1 max-w-md md:text-right pb-4">
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                        From personal loans to business financing, get instant approval with minimal documentation.
                        Flexible EMIs, competitive rates, and funds disbursed within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                        <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-[#acf350] hover:text-black transition-all">
                            Apply Now
                        </button>
                    </div>
                </div>

            </div>

            {/* Testimonials Section - Infinite Carousel */}
            <section className="relative z-20 w-full bg-white py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <div className="flex justify-between items-end">
                        <h2 className="text-5xl font-bold text-black tracking-tighter leading-[1.1]">
                            customer <br /> stories.
                        </h2>
                        <div className="text-right hidden md:block">
                            <p className="text-sm text-gray-500 font-medium">approved (2.5k+)</p>
                            <p className="text-sm text-gray-400">happy clients (98%)</p>
                        </div>
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <motion.div
                        className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
                        animate={{ x: [0, -1920] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear"
                            }
                        }}
                    >
                        {[...Array(2)].map((_, loopIndex) => (
                            <div key={loopIndex} className="flex gap-6">
                                {[
                                    { name: "Rahul S.", role: "Business Owner", quote: "Finlot was the only partner who understood the urgency of my manufacturing unit's expansion. They processed my ₹40 Lakh business loan in just 24 hours! Not only that, the documentation was digital and I didn't have to visit the branch even once. Incredible speed and professionalism.", tag: "Business Loan", image: "/avatars/avatar_rahul_1768210598062.png" },
                                    { name: "Priya M.", role: "Freelancer", quote: "As a freelancer, getting a loan is usually a nightmare. Finlot looked at my cash flow instead of just salary slips. The process was transparent, dignified, and minimal. Highly recommend to all gig workers.", tag: "Personal Loan", image: "/avatars/avatar_priya_1768210614823.png" },
                                    { name: "Amit K.", role: "Software Engineer", quote: "I compared rates across 5 different aggregators, and Finlot gave me the best interest rate by far. The app is super intuitive, and I could track my application status in real-time. Got funds instantly.", tag: "Home Loan", image: "/avatars/avatar_amit_1768210632341.png" },
                                    { name: "Sneha R.", role: "Architect", quote: "Transparent process with zero hidden charges. I've had bad experiences with hidden processing fees before, but Finlot was upfront about every single rupee. Very trustworthy and ethical.", tag: "Edu Loan", image: "/avatars/avatar_sneha_1768210649604.png" },
                                    { name: "Anjali P.", role: "Doctor", quote: "Running a busy clinic means I have zero time for paperwork. Finlot's digital-first approach was a lifesaver. Funds were in my account within minutes of the final approval notification.", tag: "Quick Cash", image: "/avatars/avatar_anjali_1768210818349.png" },
                                    { name: "Rohan D.", role: "Consultant", quote: "Great support team that guided me through every step. I had complex requirements for a flexible repayment schedule, and they customized a plan just for me.", tag: "Flexi Loan", image: "/avatars/avatar_rohan_1768210838148.png" },
                                    { name: "Meera T.", role: "Teacher", quote: "The EMI options are very flexible and pocket-friendly. It helped me manage my daughter's wedding expenses without breaking my retirement savings.", tag: "Consumer Loan", image: "/avatars/avatar_meera_1768210859063.png" }
                                ].map((testimonial, i) => (
                                    <div key={i} className="group w-[400px] shrink-0 bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 p-8 rounded-2xl cursor-pointer border border-gray-100 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white group-hover:border-[#acf350]">
                                                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                                                </div>
                                                <span className="px-3 py-1 rounded-full bg-white text-xs font-mono text-black font-bold group-hover:bg-[#acf350] uppercase">{testimonial.tag}</span>
                                            </div>
                                            <p className="text-base font-medium leading-relaxed mb-6 text-gray-600 group-hover:text-gray-300">
                                                "{testimonial.quote}"
                                            </p>
                                        </div>
                                        <div className="border-t border-gray-200 group-hover:border-white/20 pt-4">
                                            <p className="font-bold text-lg">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500 group-hover:text-[#acf350]">{testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Carousel Section */}
            <section className="py-24 px-6 bg-gray-50 overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
                                our <br /> loan services.
                            </h2>
                            <p className="text-gray-500 max-w-md">
                                Comprehensive financial solutions tailored to every stage of your life and business growth.
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all bg-white"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-14 h-14 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-[#acf350] hover:text-black hover:border-[#acf350] transition-all"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {loanServices.map((service, index) => (
                            <div
                                key={index}
                                className="group relative shrink-0 w-[300px] h-[420px] bg-white rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden border border-gray-100 hover:border-[#acf350] hover:bg-[#acf350] transition-all duration-500 snap-center cursor-pointer"
                            >
                                {/* Default Background Pattern */}
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />

                                {/* Top Content: Icon + Title */}
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-full bg-[#f5f5f5] flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                        <service.icon className="w-6 h-6 text-black group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Bottom Content Container */}
                                <div className="relative z-10 min-h-[80px] flex items-end">
                                    {/* Description (Visible by default, hidden on hover) */}
                                    <p className="text-gray-500 font-medium leading-relaxed group-hover:text-transparent transition-colors duration-300 absolute bottom-0 left-0 w-full group-hover:opacity-0 group-hover:scale-95 origin-bottom-left">
                                        {service.description}
                                    </p>

                                    {/* Vector Illustration (Hidden by default, visible on hover) */}
                                    <div className="absolute -bottom-4 -right-4 transition-all duration-500 translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                                        <service.icon strokeWidth={1} className="w-40 h-40 text-black/20 rotate-[-12deg]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* FAQ Section */}
            <section className="py-24 px-6 bg-[#020804] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-12">
                        {/* Left: Title */}
                        <div className="md:col-span-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#acf350] text-sm font-medium mb-6">
                                Common Questions
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                Frequently asked <span className="text-gray-500">questions</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Choose a plan that fits your business needs and budget. No hidden fees, no surprises.
                            </p>
                        </div>

                        {/* Right: Accordion */}
                        <div className="md:col-span-8">
                            <FAQAccordion />
                        </div>
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
                    <button className="bg-[#acf350] text-black px-8 py-4 font-semibold hover:bg-white transition-all rounded-full">
                        Contact Us
                    </button>
                </Link>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}
