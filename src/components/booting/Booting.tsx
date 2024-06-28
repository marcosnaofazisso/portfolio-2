"use client"

import React, { useEffect, useState } from 'react';
import './styles.css';

interface BootingProps {
    children: React.ReactNode;
}

export default function Booting({ children }: BootingProps) {

    const [isBooting, setIsBooting] = useState(true);
    const bootingDuration = 5;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBooting(false);
        }, bootingDuration * 100);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    if (isBooting) {
        return (
            <div className="booting-container">
                Booting<span className="typing-effect">...</span>
            </div>
        );
    }

    return <>{children}</>; // Render the passed children after booting
}
