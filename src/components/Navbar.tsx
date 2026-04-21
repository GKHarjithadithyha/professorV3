"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Research", href: "#research" },
        { name: "Publications", href: "#publications" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="navbar">
            <Container>
                <div className="navbar-inner">
                    <div style={{ padding: 'var(--spacing-8) 0' }}>
                        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--zapier-black)', textDecoration: 'none', letterSpacing: '-0.5px' }}>
                            Dr. N. Bharathiraja
                        </Link>
                    </div>

                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mobile-menu-btn">
                        <button onClick={() => setIsOpen(!isOpen)} style={{ border: 'none', background: 'none' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {isOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </>
                                ) : (
                                    <>
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="mobile-menu" style={{ display: 'flex' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="nav-link"
                                style={{ padding: 'var(--spacing-16) 0', borderBottom: '1px solid var(--sand)' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </Container>
        </nav>
    );
}
