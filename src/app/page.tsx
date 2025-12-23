"use client"

import React from "react"
import { ArrowRight, Wallet, Shield, CheckCircle2 } from "lucide-react"
import Image from "next/image"
// Reuse the grid pattern for background texture, but keep it subtle
import { InteractiveGridPattern } from "@/components/ui/interactive-grid"
import { FlipWords } from "@/components/ui/flip-words"
import { CursorGradient } from "@/components/ui/cursor-gradient"
import { HamburgerMenu } from "@/components/ui/hamburger-menu"
import { AboutSection } from "@/components/ui/about-section"
import { StepsSection } from "@/components/ui/steps-section"
import { SolutionsSection } from "@/components/ui/solutions-section"
import { FeaturesSection } from "@/components/ui/features-section"
import { TestimonialsSection } from "@/components/ui/testimonials-section"
import { CTASection, Footer } from "@/components/ui/footer"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020804] text-white relative flex flex-col overflow-hidden selection:bg-[#acf350] selection:text-black">

      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        {/* Deep Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        {/* Cursor Follower Gradient */}
        <CursorGradient />

        {/* Secondary Glows */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#acf350] opacity-5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* Navigation */}
      {/* Navigation */}
      <nav className="relative z-50 p-6 max-w-7xl mx-auto w-full flex items-center justify-end h-48">
        {/* Centered Large Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/finlot-logo.png"
            alt="Finlot"
            width={400}
            height={120}
            className="h-20 md:h-40 w-auto object-contain"
            priority
          />
        </div>

        {/* Right Aligned Actions */}
        <div className="flex items-center gap-4">
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md px-6 py-2.5 text-sm font-medium transition-all hidden md:block">
            Sign In
          </button>
          <HamburgerMenu />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center max-w-5xl mx-auto">

        {/* Top Pill / Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-gray-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
          <span className="px-1.5 py-0.5 rounded-full bg-[#acf350] text-[#020804] text-[10px] font-bold">NEW</span>
          <span>Welcome to the future of finance</span>
          <ArrowRight className="w-3 h-3" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Financial Growth. <br />
          <FlipWords
            words={["Simplified.", "Accelerated.", "Secure.", "Automated.", "Empowered."]}
            className="text-[#acf350]"
          />
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed">
          Boost your financial health with instant loans and comprehensive insurance.
          Unlock data-driven insights with our advanced AI solutions.
        </p>

        {/* Buttons - Glassmorphic Style */}
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          {/* Primary Glow Button */}
          <button className="group relative px-8 py-4 bg-[#acf350] text-[#020804] font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_#acf350]">
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Secondary Glass Button */}
          <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>

      </div>

      {/* Social Proof Bar (Bottom) */}
      <div className="relative z-20 w-full border-t border-white/5 bg-[#020804]/50 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Stat */}
          <div className="flex items-center gap-4 border-r border-white/10 pr-8 mr-4 hidden md:flex">
            <div className="text-3xl font-bold text-white">40,000+</div>
            <div className="text-xs text-gray-500 max-w-[100px] leading-tight">
              Indians use us to grow wealth
            </div>
          </div>

          {/* Logos (Placeholders with text for now, styled to look like logos) */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['HDFC Bank', 'ICICI Lombard', 'Bajaj Finserv', 'Zerodha', 'Groww'].map((brand) => (
              <div key={brand} className="flex items-center gap-2 text-lg font-bold text-white/80">
                {/* Simple icon emulation */}
                <div className="w-5 h-5 bg-current rounded-sm opacity-50" />
                {brand}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* 3 Steps Section */}
      <StepsSection />

      {/* Solutions Selection Section */}
      <SolutionsSection />

      {/* Features Bento Grid */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

    </main>
  )
}
