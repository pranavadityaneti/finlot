"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
    question: string
    answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left group"
            >
                <span className="font-medium text-white/90 group-hover:text-white transition-colors">
                    {question}
                </span>
                <div className={cn(
                    "p-2 rounded-full bg-white/5 text-gray-400 transition-all duration-300",
                    isOpen ? "bg-[#acf350] text-black rotate-180" : "group-hover:bg-white/10"
                )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const FAQAccordion = () => {
    // Data split into two columns as per reference (Sellers/Buyers -> Borrowers/Investors)
    const column1 = [
        {
            q: "How fast can I get a loan approval?",
            a: "Our AI-driven process typically approves eligible loans within 5 minutes. Disbursements happen instantly to your verified bank account."
        },
        {
            q: "What documents are required for verification?",
            a: "We act as a 100% paperless platform. You only need your PAN card and Aadhaar linked mobile number for basic KYC. For business loans, GST details might be required."
        },
        {
            q: "Is my data secure with Finlot?",
            a: "Absolutely. We use bank-grade 256-bit encryption and are ISO 27001 certified. Your data is used strictly for loan processing and never shared without consent."
        }
    ]

    const column2 = [
        {
            q: "Can I prepay my loan early?",
            a: "Yes, Finlot offers flexible prepayment options. Depending on your loan product, there may be zero foreclosure charges after a minimum lock-in period."
        },
        {
            q: "How do I claim insurance?",
            a: "Claims can be initiated directly through the app. Our digital claims team processes 90% of claims within 24 hours for standard cases."
        },
        {
            q: "What methods of repayment are available?",
            a: "We support Auto-Debit (NACH), UPI, Debit Cards, and Net Banking. We recommend setting up auto-debit to strictly avoid missing due dates."
        }
    ]

    return (
        <div className="grid md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-white/50 mb-2 pl-2">For Borrowers</h3>
                {column1.map((item, i) => (
                    <FAQItem key={i} question={item.q} answer={item.a} />
                ))}
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-white/50 mb-2 pl-2">For Policy Holders</h3>
                {column2.map((item, i) => (
                    <FAQItem key={i} question={item.q} answer={item.a} />
                ))}
            </div>
        </div>
    )
}
