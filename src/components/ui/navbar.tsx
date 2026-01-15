"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { HamburgerMenu } from "@/components/ui/hamburger-menu"
import { cn } from "@/lib/utils"

interface NavbarProps {
    theme?: "light" | "dark"
}

export function Navbar({ theme = "light" }: NavbarProps) {
    const isDark = theme === "dark"

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
                    style={{ filter: isDark ? "brightness(0) invert(1)" : "none" }}
                />
            </Link>

            {/* Right Aligned Actions */}
            <div className="flex items-center">
                <div className={cn(
                    "flex items-center gap-3 pl-6 pr-2 py-2 rounded-full backdrop-blur-md border transition-colors",
                    isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                )}>
                    <button className={cn(
                        "text-sm font-medium transition-colors hidden md:block",
                        isDark ? "text-white hover:text-white/70" : "text-black hover:text-black/70"
                    )}>
                        Sign In
                    </button>
                    <div className={cn(
                        "w-px h-4 hidden md:block",
                        isDark ? "bg-white/10" : "bg-black/10"
                    )} />
                    <HamburgerMenu theme={theme} />
                </div>
            </div>
        </nav>
    )
}
