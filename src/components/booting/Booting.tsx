"use client"

import { useEffect } from 'react';
import HomeMain from '../home/Home';
import './styles.css';
import { useBootingStore } from '@/store/boot/bootStore';

export default function Booting() {

    const bootStore = useBootingStore()
    const isBooting = useBootingStore().isBooting

    const bootingDuration = 5;

    useEffect(() => {
        const timer = setTimeout(() => {
            bootStore.hasBooted()
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

    return <HomeMain />
}
