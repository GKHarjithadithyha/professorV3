"use client";

import React, { useEffect, useState } from "react";
import { BookOpenText, BriefcaseBusiness, BookOpen, Home, Mail } from "lucide-react";

const links = [
    { key: "home", label: "Home", icon: Home },
    { key: "experience", label: "Experience", icon: BriefcaseBusiness },
    { key: "education", label: "Education", icon: BookOpenText },
    { key: "journal", label: "Journal", icon: BookOpen },
    { key: "contact", label: "Contact", icon: Mail },
];

export type MobileNavKey = (typeof links)[number]["key"];

type Props = {
    activeSection: Exclude<MobileNavKey, "home"> | null;
    onSelect: (section: MobileNavKey) => void;
};

export function MobileBottomNav({ activeSection, onSelect }: Props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const updateVisible = () => setVisible(window.innerWidth <= 768);

        updateVisible();
        window.addEventListener("resize", updateVisible);

        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <nav className="mobile-bottom-nav" aria-label="Mobile primary navigation">
            {links.map(({ key, label, icon: Icon }) => {
                const isActive = key === "home" ? activeSection === null : activeSection === key;
                return (
                    <button
                        key={label}
                        type="button"
                        className={`mobile-bottom-nav__item${isActive ? " is-active" : ""}`}
                        onClick={() => onSelect(key)}
                    >
                        <Icon size={18} strokeWidth={2.2} />
                        <span>{label}</span>
                    </button>
                );
            })}
        </nav>
    );
}