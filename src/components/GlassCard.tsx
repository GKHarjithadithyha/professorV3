"use client";

import React from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

export function GlassCard({ children, className = "", onClick, style }: GlassCardProps) {
    // Note: We keep the name GlassCard for import compatibility, 
    // but its styling is mapped to the standard Zapier card design.
    return (
        <div
            onClick={onClick}
            className={`card ${onClick ? "cursor-pointer" : ""} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}
