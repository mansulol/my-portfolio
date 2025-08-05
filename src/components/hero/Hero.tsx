import React from "react";
import "./Hero.scss";

interface HeroProps {
    children: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
    return (
        <section id="section-hero">
            <div className="section-hero-wrapper">
                {children}
            </div>
        </section>
    );
}