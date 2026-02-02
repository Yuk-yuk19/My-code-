import { useState } from 'react';
import React from "react";
import "./dashboard.css"
import { Check } from 'lucide-react';


interface Infocart {
    title: string
    description: string
    slots: number
}


export default function InfoCard({ title, description, slots }: Infocart) {
    const [isOpen, setIsOpen] = useState<boolean>(false);



    const open = () => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }

    let popup = null;
    let image = "null";
    if (title === "Valorant") {
        image = "https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg";
    }
    else if (title === "Minecraft") {
        image = "https://images2.alphacoders.com/137/thumb-1920-1370592.jpeg";
    }
    else if (title === "GTA V") {
        image = "https://4kwallpapers.com/images/wallpapers/grand-theft-auto-v-1920x1080-10734.jpg";
    }

    if (isOpen) {
        popup = (
            <div className='overlay' onClick={close}>
                <div className="popup" onClick={e => e.stopPropagation()}>
                    <button className="close-btn" onClick={close}>X</button>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    return (

        <div className='contenaire'>
            <div className="card" onClick={open} style={{ backgroundImage: `url("${image}")`}}>
                <h3>{title}</h3>
                <div className="slots-container">
                    {Array.from({ length: slots }).map((_, index) => (
                        <div key={index} className='slot-dot'><Check size={14} strokeWidth={3} color='white'/></div>
                    ))}
                </div>
                <button className='btn-join'>JOIN</button>  
            </div>
            {popup}
        </div>



    );
}