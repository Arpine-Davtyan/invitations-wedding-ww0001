"use client";

import { scheduleItems } from "@/lib/contstants";
import { ChurchIcon, CheersIcon } from "@phosphor-icons/react";

const ScheduleItems = () => {
    return (
        <div className="flex-col-center gap-8">
            {scheduleItems.map((item, index) => (
                <div className="flex-col-center gap-1" key={index}>
                    <div className="flex-center w-[95px] h-[95px] shadow-lg rounded-full bg-gold mb-4">
                        {item.icon === "ChurchIcon" && (
                            <ChurchIcon
                                size={40}
                                weight="fill"
                                className="text-white"
                            />
                        )}
                        {item.icon === "CheersIcon" && (
                            <CheersIcon
                                size={40}
                                weight="fill"
                                className="text-white"
                            />
                        )}
                    </div>
                    <span className="text-sm text-gold font-bold">{item.time}</span>
                    <p className="text-lg text-dark">{item.title}</p>
                    <p className="text-lg text-light-gold font-cormorant-garamond">{item.location}</p>
                </div>
            ))}
        </div>
    )
}

export default ScheduleItems
