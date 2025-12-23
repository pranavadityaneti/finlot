"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export const InteractiveGridPattern = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden bg-black [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]",
                className
            )}
            onMouseMove={handleMouseMove}
            {...props}
        >
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 h-[200%] w-[200%] -ml-[50%] -mt-[20%]" />

            {/* Interactive Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(172, 243, 80, 0.15), transparent 40%)`,
                }}
                animate={{
                    opacity: 1
                }}
            />

            {/* Highlighted Boxes Effect (Simulated via mask or secondary layer) */}
            <div
                className="pointer-events-none absolute inset-0 transition duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(172, 243, 80, 0.06), transparent 40%)`,
                }}
            />
        </div>
    )
}
