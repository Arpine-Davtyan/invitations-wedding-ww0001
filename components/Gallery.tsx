"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { galleryImages } from "@/lib/contstants";

export default function Gallery() {
    return (
        <section
            className="w-full md:px-16 lg:px-24 xl:px-40 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
            {galleryImages.map((image, index) => (
                <motion.div
                    key={index}
                    className={`
                        relative w-full h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden rounded-[32px] shadow-2xl
                        ${index % 2 !== 0 ? "md:mt-20" : ""}
                    `}
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                    }}
                    whileHover={{
                        scale: 1.03,
                    }}
                >
                    <Image
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        priority={index === 0}
                    />
                </motion.div>
            ))}
        </section>
    );
}