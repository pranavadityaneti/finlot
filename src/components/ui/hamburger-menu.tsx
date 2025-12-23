"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "#" },
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "/contact" }
    ]

    return (
        <div className="relative">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-md"
            >
                <Menu className="w-5 h-5 text-white" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute right-0 top-14 w-64 bg-[#e5e5e5] rounded-2xl shadow-2xl overflow-hidden z-[100] origin-top-right text-black"
                    >
                        {/* Header with Close Button */}
                        <div className="flex justify-between items-center p-6 pb-2">
                            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Menu</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-black" />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex flex-col p-6 pt-2 gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-medium text-gray-800 hover:text-black hover:translate-x-1 transition-all"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
