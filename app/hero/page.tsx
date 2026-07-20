"use client";

import { useRef, useState } from "react";
import { weddingInfo } from "@/lib/contstants";
import { MusicNotesIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { stagger, textReveal, fadeScale } from "@/lib/animations";

const Hero = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = async () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(weddingInfo.audioUrl);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
        }

        if (audioRef.current.paused) {
            await audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section id="hero">
            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="min-w-full flex-col-center py-12 sm:py-16 gap-4 bg-white/78"
            >
                <motion.h3 variants={textReveal}>
                    Together with their families
                </motion.h3>

                <motion.h1 variants={textReveal}>
                    {weddingInfo.name}
                </motion.h1>

                <motion.div
                    variants={fadeScale}
                    className="w-18 border-t-2 border-dashed border-[var(--color-gold)]"
                />

                <motion.p
                    variants={textReveal}
                    className="text-mid text-xl"
                >
                    {weddingInfo.date} {weddingInfo.time}
                </motion.p>

                <motion.p
                    variants={textReveal}
                    className="text-mid text-lg font-cormorant-garamond"
                >
                    {weddingInfo.location}
                </motion.p>

                <motion.button
                    variants={fadeScale}
                    onClick={toggleMusic}
                    className={`flex-center w-[48px] h-[48px] p-0 rounded-full bg-gold transition ${
                        isPlaying ? "animate-pulse" : ""
                    }`}
                    aria-label="Toggle music"
                >
                    <MusicNotesIcon
                        size={24}
                        weight="fill"
                        className="text-white"
                    />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;