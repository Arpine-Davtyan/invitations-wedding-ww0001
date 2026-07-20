"use client";

import ScheduleItems from "@/components/ScheduleItems";
import { motion } from "motion/react";
import { stagger, textReveal } from "@/lib/animations";

const Schedule = () => {
    return (
        <section className="flex-col-center px-8 py-12 sm:py-16 gap-4">
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex-col-center"
            >
                <motion.h3 variants={textReveal}>
                    The Day
                </motion.h3>

                <motion.h2 variants={textReveal}>
                    Wedding Day Schedule
                </motion.h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <ScheduleItems />
            </motion.div>
        </section>
    );
};

export default Schedule;