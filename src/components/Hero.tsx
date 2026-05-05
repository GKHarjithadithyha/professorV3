"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";
import profile from "@/data/profile.json";

export function Hero() {
    const name = profile.name || "";
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        const typingSpeed = isDeleting ? 60 : 120;

        if (!isDeleting && displayed === name) {
            timeout = setTimeout(() => setIsDeleting(true), 1400);
        } else if (isDeleting && displayed === "") {
            timeout = setTimeout(() => setIsDeleting(false), 600);
        } else {
            timeout = setTimeout(() => {
                setDisplayed((prev) => {
                    const next = isDeleting ? name.slice(0, prev.length - 1) : name.slice(0, prev.length + 1);
                    return next;
                });
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, name]);

    return (
        <section className="section" style={{ paddingTop: '120px', paddingBottom: '80px', borderBottom: 'none' }}>
            <Container>
                <div className="grid-2 items-center">
                    <div className="flex-col-gap-24" style={{ order: 0 }}>
                        <div style={{ alignSelf: 'flex-start', padding: 'var(--spacing-4) var(--spacing-12)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-pill)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Available for Research Collaborations
                        </div>

                        <div className="flex-col-gap-16">
                            <h1 className="hero-xl">
                                <span style={{ display: 'block', color: 'var(--dark-charcoal)' }}>Hello, I'm</span>
                                <span aria-live="polite" style={{ color: 'var(--zapier-black)' }}>
                                    <span className="typing-wrap">
                                        <span className="typing-name" style={{ fontWeight: 700 }}>{displayed}</span>
                                        <span className="typing-caret" aria-hidden>▌</span>
                                    </span>
                                </span>
                            </h1>
                            <p className="sub-heading-md" style={{ color: 'var(--dark-charcoal)' }}>
                                {profile.designation} in {profile.department}
                            </p>
                            <p className="body-large">
                                Specializing in <span className="body-semibold">AI, IoT, and Computer Vision</span>.
                                Passionate about bridging the gap between theoretical research and real-world applications.
                            </p>
                        </div>

                        <div className="flex-row-gap-16 mt-16">
                            <Button href="/documents/DrbharathirajaCV.pdf" variant="primary" icon>
                                Download CV
                            </Button>
                            <Button href="#contact" variant="dark">
                                Contact Me
                            </Button>
                        </div>

                        <div className="grid-3 mt-32" style={{ paddingTop: 'var(--spacing-32)', borderTop: '1px solid var(--sand)' }}>
                            <div>
                                <div className="sub-heading-md" style={{ marginBottom: 0 }}>{profile.stats.scopus_publications}</div>
                                <div className="caption">Scopus Pubs</div>
                            </div>
                            <div>
                                <div className="sub-heading-md" style={{ marginBottom: 0 }}>{profile.stats.scie_wos_publications}</div>
                                <div className="caption">SCIE/WoS Pubs</div>
                            </div>
                            <div>
                                <div className="sub-heading-md" style={{ marginBottom: 0 }}>{profile.stats.google_scholar_h_index}</div>
                                <div className="caption">H-Index</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ order: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <GlassCard className="card" style={{ padding: 'var(--spacing-8)', maxWidth: '360px', width: '100%' }}>
                            <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--radius-content)', overflow: 'hidden' }}>
                                <Image
                                    src="/images/profile.jpg"
                                    alt={profile.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </GlassCard>
                    </div>
                </div>

                <style jsx>{`
                    .typing-wrap { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
                    .typing-name { display: inline-block; min-width: 0; }
                    .typing-caret { display: inline-block; color: var(--zapier-orange); animation: blink 0.8s steps(2, start) infinite; vertical-align: middle; }

                    @keyframes blink { 50% { opacity: 0; } }

                    @media (max-width: 768px) {
                        .typing-caret { display: none; }
                    }
                `}</style>
            </Container>
        </section>
    );
}
