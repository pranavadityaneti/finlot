"use client"

import React from "react"
import { ArrowRight, Send } from "lucide-react"

export const ContactForm = () => {
    return (
        <form className="flex flex-col gap-6 w-full">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Your name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#acf350] transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Email address</label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#acf350] transition-colors"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">Phone number</label>
                <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#acf350] transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#acf350] transition-colors resize-none"
                />
            </div>

            <button className="mt-4 flex items-center justify-between w-full md:w-auto md:self-start bg-[#acf350] hover:bg-[#9de040] text-black font-bold py-4 px-8 rounded-full transition-all group">
                <span>Send Message</span>
                <Send className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    )
}
