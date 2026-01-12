"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { HamburgerMenu } from "@/components/ui/hamburger-menu"

export function Navbar() {
    return (
        <nav className="relative z-50 p-6 max-w-7xl mx-auto w-full flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
                <Image
                    src="/header-logo.png"
                    alt="Finlot"
                    width={200}
                    height={60}
                    className="h-10 w-auto object-contain"
                    priority
                />
            </Link>

            {/* Right Aligned Actions */}
            <div className="flex items-center">
                <div className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-black/5 border border-black/10 backdrop-blur-md">
                    <button className="text-sm font-medium text-black hover:text-black/70 transition-colors hidden md:block">
                        Sign In
                    </button>
                    <div className="w-px h-4 bg-black/10 hidden md:block" />
                    <HamburgerMenu />
                </div>
            </div>
        </nav>
    )
}
