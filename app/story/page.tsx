"use client";

import { motion } from "motion/react";
import { fadeUp, stagger } from "@/lib/animations";

const Story = () => {
  return (
    <section className="bg-section-background">
      <motion.div
        className="flex-col-center px-8 py-12 sm:py-16 gap-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h3 variants={fadeUp}>
          Our Story
        </motion.h3>

        <motion.h2 variants={fadeUp}>
          Two hearts, one journey
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="simple-text"
        >
          Isabelle and Marco met on a rainy afternoon in a tiny Parisian
          bookshop. Marco was searching for a novel he'd lost years ago;
          Isabelle was the one who found it on the shelf for him. Over coffee
          that turned into dinner and then a moonlit walk along the Seine, they
          discovered a love that spanned continents and years. Today,
          surrounded by vineyards and golden light, they celebrate the
          beginning of forever.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Story;