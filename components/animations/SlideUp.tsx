"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    yOffset?: number;
}

export function SlideUp({ children, delay = 0, duration = 0.5, className = "", yOffset = 24 }: SlideUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
