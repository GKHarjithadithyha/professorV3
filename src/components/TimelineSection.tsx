"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import education from "@/data/education.json";
import experience from "@/data/experience.json";
import { Container } from "./Container";

type TimelineItem = {
    id: string;
    title: string;
    date: string;
    institution: string;
    description?: string;
};

const EducationCarousel = ({ items }: { items: TimelineItem[] }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const [translateX, setTranslateX] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const CARD_WIDTH = 360;
    const GAP = 32;
    const TOTAL_WIDTH = CARD_WIDTH + GAP;
    const VIEWPORT_CENTER = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const AUTO_SCROLL_SPEED = 0.5; // pixels per frame

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const animate = useCallback(() => {
        if (isHovered || isMobile) {
            if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
            return;
        }

        setTranslateX((prev) => {
            const next = prev - AUTO_SCROLL_SPEED;
            // Loop back when we've scrolled past all items
            if (Math.abs(next) > TOTAL_WIDTH * items.length) {
                return 0;
            }
            return next;
        });

        animationRef.current = requestAnimationFrame(animate);
    }, [isHovered, items.length, isMobile]);

    useEffect(() => {
        if (!isMobile) {
            animationRef.current = requestAnimationFrame(animate);
        }
        return () => {
            if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
        };
    }, [animate, isMobile]);

    if (isMobile) {
        return (
            <div style={{ display: 'grid', gap: 'var(--spacing-16)' }}>
                {items.map((item) => (
                    <div key={item.id} className="card" style={{ padding: 'var(--spacing-20)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-12)' }}>
                            <h3 className="card-title" style={{ fontSize: '1rem' }}>{item.title}</h3>
                            <span style={{ flexShrink: 0, padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--zapier-black)' }}>
                                {item.date}
                            </span>
                        </div>
                        <div className="body-semibold" style={{ marginBottom: 'var(--spacing-8)' }}>{item.institution}</div>
                        {item.description && <p className="body-text">{item.description}</p>}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div style={{ position: 'relative', marginBottom: 'var(--spacing-48)' }}>
            <div
                ref={carouselRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                suppressHydrationWarning
                style={{
                    overflow: 'hidden',
                    position: 'relative',
                    height: '360px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                {/* Rail line */}
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', backgroundColor: 'var(--sand)', zIndex: 0, transform: 'translateY(-50%)' }} />

                {/* Carousel track */}
                <div
                    suppressHydrationWarning
                    style={{
                        display: 'flex',
                        gap: `${GAP}px`,
                        transform: `translateX(calc(50vw - ${CARD_WIDTH / 2}px + ${translateX}px))`,
                        transition: isHovered ? 'transform 0.1s linear' : 'none',
                        willChange: 'transform',
                        zIndex: 1
                    }}
                >
                    {items.map((item, idx) => {
                        const itemCenterX = idx * TOTAL_WIDTH + translateX + CARD_WIDTH / 2;
                        const distanceFromCenter = Math.abs(itemCenterX - VIEWPORT_CENTER);
                        const isCenter = distanceFromCenter < CARD_WIDTH / 2;
                        const scale = Math.max(0.7, 1 - distanceFromCenter / (VIEWPORT_CENTER * 0.8));
                        const opacity = Math.max(0.5, 1 - distanceFromCenter / (VIEWPORT_CENTER * 1.2));

                        return (
                            <div
                                key={item.id}
                                suppressHydrationWarning
                                style={{
                                    width: `${CARD_WIDTH}px`,
                                    flexShrink: 0,
                                    transform: `scale(${scale})`,
                                    opacity,
                                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                                    transformOrigin: 'center',
                                    zIndex: isCenter ? 10 : 1
                                }}
                            >
                                <div
                                    className="card"
                                    suppressHydrationWarning
                                    style={{
                                        padding: 'var(--spacing-24)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        border: isCenter ? '2px solid var(--zapier-orange)' : '1px solid var(--sand)',
                                        backgroundColor: '#fffefb',
                                        boxShadow: isCenter ? '0 12px 32px rgba(255, 79, 0, 0.12)' : '0 4px 12px rgba(0,0,0,0.03)',
                                        transition: 'border 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                >
                                    {/* Date badge */}
                                    <span style={{ display: 'inline-block', alignSelf: 'flex-start', marginBottom: 'var(--spacing-12)', padding: 'var(--spacing-4) var(--spacing-12)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--zapier-orange)', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--zapier-orange)' }}>
                                        {item.date}
                                    </span>

                                    <h3 className="card-title" suppressHydrationWarning style={{ fontSize: '1.15rem', marginBottom: isCenter ? 'var(--spacing-12)' : 0, flex: 1 }}>{item.title}</h3>

                                    {isCenter && (
                                        <>
                                            <div className="body-semibold" style={{ marginBottom: 'var(--spacing-12)', color: 'var(--dark-charcoal)' }}>{item.institution}</div>
                                            {item.description && <p className="body-text" style={{ margin: 0, color: 'var(--dark-charcoal)', lineHeight: 1.6 }}>{item.description}</p>}

                                            <div style={{ marginTop: 'var(--spacing-16)', paddingTop: 'var(--spacing-16)', borderTop: '1px solid var(--sand)' }}>
                                                <button style={{ background: 'var(--zapier-orange)', color: 'white', border: 'none', padding: 'var(--spacing-8) var(--spacing-12)', borderRadius: 'var(--radius-standard)', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                    Learn More
                                                    <span>→</span>
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    {/* Center dot indicator */}
                                    {isCenter && (
                                        <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', backgroundColor: 'var(--zapier-orange)', borderRadius: '50%', border: '3px solid #fffefb', zIndex: 20 }} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Center focus marker (optional subtle indicator) */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '2px', height: '200px', backgroundColor: 'rgba(255, 79, 0, 0.1)', zIndex: 0, pointerEvents: 'none' }} />
            </div>

            {/* Pause indicator on hover */}
            {isHovered && (
                <div style={{ position: 'absolute', bottom: 'var(--spacing-16)', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', color: 'white', padding: 'var(--spacing-8) var(--spacing-16)', borderRadius: 'var(--radius-content)', fontSize: '0.88rem', textAlign: 'center' }}>
                    ⏸ Paused
                </div>
            )}
        </div>
    );
};

export function TimelineSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Transform data to carousel format
    const educationItems: TimelineItem[] = education.map((edu, idx) => ({
        id: `edu-${idx}`,
        title: edu.degree,
        date: edu.year,
        institution: edu.institution,
        description: edu.grade && edu.grade !== '—' ? `Grade: ${edu.grade}` : undefined
    }));

    const experienceItems: TimelineItem[] = experience.map((exp, idx) => ({
        id: `exp-${idx}`,
        title: exp.role,
        date: exp.period,
        institution: exp.institution,
        description: exp.description || `${exp.location}`
    }));

    return (
        <section id="timeline" className="section bg-off-white">
            <Container>
                <div style={{ marginBottom: 'var(--spacing-48)' }}>
                    <span className="caption-upper">Academic & Career Journey</span>
                    <h2 className="section-heading" style={{ marginBottom: 'var(--spacing-8)' }}>Timeline</h2>
                    <p className="body-large" style={{ color: 'var(--dark-charcoal)', maxWidth: '600px' }}>A timeline of my academic qualifications and professional journey.</p>
                </div>

                {/* Education Carousel */}
                <div style={{ marginBottom: 'var(--spacing-64)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-32)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: 'var(--light-sand)', borderRadius: '50%', color: 'var(--zapier-orange)', fontWeight: 700 }}>
                            🎓
                        </span>
                        <h3 className="section-heading" style={{ marginBottom: 0 }}>EDUCATION</h3>
                    </div>
                    <EducationCarousel items={educationItems} />
                </div>

                {/* Career Carousel */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-32)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: 'var(--light-sand)', borderRadius: '50%', color: 'var(--zapier-orange)', fontWeight: 700 }}>
                            💼
                        </span>
                        <h3 className="section-heading" style={{ marginBottom: 0 }}>CAREER</h3>
                    </div>
                    <EducationCarousel items={experienceItems} />
                </div>

                {/* Info message */}
                <div style={{ marginTop: 'var(--spacing-48)', padding: 'var(--spacing-16) var(--spacing-24)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-content)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)' }}>
                    <span style={{ color: 'var(--zapier-orange)', fontSize: '1.2rem' }}>ℹ️</span>
                    <span className="body-text">Hover over the carousel to pause auto-scrolling and explore the timeline at your own pace.</span>
                </div>
            </Container>
        </section>
    );
}
