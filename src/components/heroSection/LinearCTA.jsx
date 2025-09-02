import React, { useState } from 'react'
import { TbX } from 'react-icons/tb';

const LinearCTA = () => {
    const [closing, setClosing] = useState(false);
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => setVisible(false), 300);
    };

    if (!visible) return null;

    if (!visible) return null;
    return (
        <div className={`linear-cta-wrap ${closing ? "fade-out" : "fade-in"}`}>
            <p className="text-white">
                🚀 Turn your passion for food into a profitable business! By joining The
                Spice Garden, you’re not just owning a franchise! 🌿🍕
            </p>
            <button className="ctm-btn">Start Your Franchise Journey!</button>
            <button className="close-btn" onClick={handleClose}>
                <TbX stroke="white" />
            </button>
        </div>
    )
}

export default LinearCTA