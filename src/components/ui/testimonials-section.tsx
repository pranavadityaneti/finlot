"use client"

import React from "react"
import { motion } from "framer-motion"

// --- Types ---
interface Testimonial {
    text: string
    image: string
    name: string
    role: string
}

// --- Finlot Testimonials Data ---
const testimonials: Testimonial[] = [
    {
        text: "Got my personal loan approved in under 2 minutes! The process was seamless, and the funds were in my account the next day. Finlot made home renovation stress-free.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Priya Sharma",
        role: "Small Business Owner",
    },
    {
        text: "As a software engineer, I appreciate efficiency. Finlot's digital-first approach meant zero paperwork and instant approval for my education loan.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Rahul Mehta",
        role: "Software Engineer",
    },
    {
        text: "Finlot's business loan helped me scale my startup when I needed it most. Their competitive rates and flexible EMIs are unmatched in the market.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Ananya Reddy",
        role: "Startup Founder",
    },
    {
        text: "The term insurance process was so simple. As a doctor, I wanted comprehensive coverage for my family, and Finlot delivered exactly that.",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Dr. Vikram Patel",
        role: "Healthcare Professional",
    },
    {
        text: "Health insurance used to be confusing until I found Finlot. They explained every policy clearly and helped me choose the perfect plan for my family.",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sneha Gupta",
        role: "Marketing Manager",
    },
    {
        text: "Renewed my vehicle insurance through Finlot in 5 minutes flat. No calls, no hassle, just a smooth digital experience. Highly recommend!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Arjun Singh",
        role: "Freelance Designer",
    },
    {
        text: "As a CA, I was skeptical at first. But Finlot's transparent pricing and genuine advisory approach won me over. Now I recommend them to all my clients.",
        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Kavitha Iyer",
        role: "Chartered Accountant",
    },
    {
        text: "Needed emergency funds for my shop. Finlot disbursed the loan within 24 hours when traditional banks would have taken weeks. Lifesaver!",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Deepak Kumar",
        role: "Retail Store Owner",
    },
    {
        text: "Finlot's education loan helped fund my daughter's dream of studying abroad. The entire process was handled with care and professionalism.",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Meera Joshi",
        role: "School Teacher",
    },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

// --- Sub-Components ---
const TestimonialsColumn = (props: {
    className?: string
    testimonials: Testimonial[]
    duration?: number
}) => {
    return (
        <div className={props.className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <motion.li
                                    key={`${index}-${i}`}
                                    aria-hidden={index === 1 ? "true" : "false"}
                                    tabIndex={index === 1 ? -1 : 0}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -8,
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className="p-8 rounded-2xl border border-zinc-800 hover:border-[#acf350]/40 shadow-lg max-w-xs w-full bg-zinc-900/80 transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[#acf350]/30"
                                >
                                    <blockquote className="m-0 p-0">
                                        <p className="text-gray-400 leading-relaxed font-normal m-0 text-sm">
                                            "{text}"
                                        </p>
                                        <footer className="flex items-center gap-3 mt-5">
                                            <img
                                                width={44}
                                                height={44}
                                                src={image}
                                                alt={`Avatar of ${name}`}
                                                className="h-11 w-11 rounded-full object-cover ring-2 ring-zinc-700 group-hover:ring-[#acf350]/50 transition-all duration-300 ease-in-out"
                                            />
                                            <div className="flex flex-col">
                                                <cite className="font-semibold not-italic tracking-tight leading-5 text-white">
                                                    {name}
                                                </cite>
                                                <span className="text-sm leading-5 tracking-tight text-[#acf350] mt-0.5">
                                                    {role}
                                                </span>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.li>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.ul>
        </div>
    )
}

export function TestimonialsSection() {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="bg-[#020804] py-24 relative overflow-hidden z-30"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="container px-4 z-10 mx-auto"
            >
                <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
                    <div className="flex justify-center">
                        <div className="border border-[#acf350]/30 py-1.5 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-[#acf350] bg-[#acf350]/10">
                            Testimonials
                        </div>
                    </div>

                    <h2
                        id="testimonials-heading"
                        className="text-4xl md:text-5xl font-bold tracking-tight mt-6 text-center text-white"
                    >
                        Trusted by Thousands
                    </h2>
                    <p className="text-center mt-5 text-gray-400 text-lg leading-relaxed max-w-sm">
                        Real stories from real people who transformed their financial journey with Finlot.
                    </p>
                </div>

                <div
                    className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
                    role="region"
                    aria-label="Scrolling Testimonials"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </motion.div>
        </section>
    )
}
