"use client";

import { weddingInfo } from "@/lib/contstants";
import { HeartIcon } from '@phosphor-icons/react'

const Footer = () => {
    return (
        <footer className="w-full flex-col-center py-8 gap-1">
            <h4>{weddingInfo.name}</h4>
            <div className="flex-col-center sm:flex-center gap-2">
                <p className="text-mid text-xl">{weddingInfo.date}</p>
                <HeartIcon
                    size={20}
                    weight="fill"
                    className="text-gold "
                />
                <p className="text-mid text-lg font-cormorant-garamond">{weddingInfo.location}</p>
            </div>
        </footer>
    )
}

export default Footer