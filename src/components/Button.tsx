"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "dark" | "ghost" | "pill";
    className?: string;
    icon?: boolean;
    style?: React.CSSProperties;
}

export function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    icon = false,
    style,
}: ButtonProps) {
    const variants = {
        primary: "btn-primary-orange",
        dark: "btn-primary-dark",
        ghost: "btn-ghost",
        pill: "btn-pill",
    };

    const content = (
        <>
            {children}
            {icon && <ArrowRight className="icon-sm" />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`${variants[variant]} ${className}`} style={style}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${variants[variant]} ${className}`} style={style}>
            {content}
        </button>
    );
}
