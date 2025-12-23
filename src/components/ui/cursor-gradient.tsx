"use client";
import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export const CursorGradient = ({
    className,
}: {
    className?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            // Intentionally slow down the follow effect slightly for a "floaty" feel? 
            // Or instant? Let's go with instant tracking but large blur.
            // Actually, updating motion values directly is performant.
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className={cn(
                "pointer-events-none fixed inset-0 z-0 transition duration-300",
                className
            )}
            style={{
                background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(172, 243, 80, 0.25),
            transparent 80%
          )
        `,
            }}
        />
    );
};
