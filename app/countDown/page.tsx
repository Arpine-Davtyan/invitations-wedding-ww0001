"use client";

import CountdownTimer from "@/components/CountDownTimer";
import { motion } from "motion/react";
import { fadeScale, stagger, textReveal } from "@/lib/animations";

const CountDown = () => {
    return (
        <section>
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-col-center py-12 sm:py-16 gap-4"
            >
                <motion.h3 variants={textReveal}>
                    Counting Down
                </motion.h3>

                <motion.h2 variants={textReveal}>
                    Until we say I do
                </motion.h2>

                <motion.div variants={fadeScale}>
                    <CountdownTimer />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CountDown;