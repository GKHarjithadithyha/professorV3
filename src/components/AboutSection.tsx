import React from "react";
import { getMarkdownContent } from "@/lib/markdown";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";
import profile from "@/data/profile.json";

export async function AboutSection() {
    const { contentHtml, title } = await getMarkdownContent("about");

    return (
        <section id="about" className="section">
            <Container>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--spacing-32)' }}>
                    {/* Header */}
                    <div style={{ marginBottom: 'var(--spacing-16)' }}>
                        <h2 className="section-heading">{title}</h2>
                    </div>

                    <div className="about-container" style={{ display: 'grid', gap: '40px', alignItems: 'start' }}>
                        {/* Left Column - Intro (Primary Focus) */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                                                        <div>
                                                            <div className="card" style={{ padding: 'var(--spacing-24)', marginBottom: 0 }}>
                                                                <div className="prose about-prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                                                            </div>

                                                                <style dangerouslySetInnerHTML={{__html:`
                                                                    .about-container { grid-template-columns: 1fr; }
                                                                    @media (min-width: 768px) { .about-container { grid-template-columns: 1.2fr 0.8fr; } }
                                                                    .about-prose p { margin-bottom: var(--spacing-16); line-height: 1.7; color: var(--dark-charcoal); max-width: 700px; }
                                                                    .about-prose h1, .about-prose h2, .about-prose h3 { color: var(--zapier-black); font-weight: 600; margin-bottom: var(--spacing-12); margin-top: var(--spacing-24); }
                                                                    .about-prose a { color: var(--zapier-orange); text-decoration: none; }
                                                                    .about-prose a:hover { text-decoration: underline; }
                                                                `}} />
                                                        </div>

                            <div className="grid-2">
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--zapier-black)' }}>{profile.stats.scopus_publications}</div>
                                    <div className="micro">Scopus Pubs</div>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--zapier-black)' }}>{profile.stats.google_scholar_h_index}</div>
                                    <div className="micro">Scholar h-index</div>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--zapier-black)' }}>{profile.stats.scopus_h_index}</div>
                                    <div className="micro">Scopus h-index</div>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--zapier-black)' }}>11</div>
                                    <div className="micro">Patents</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Skills Box (Supporting Content) */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                            <div className="card" style={{ backgroundColor: '#fffefb', border: '1px solid #c5c0b1', borderRadius: 'var(--radius-content)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                                <h3 className="card-title">Core Competencies</h3>
                                <div className="flex-row-gap-12" style={{ marginBottom: 'var(--spacing-24)' }}>
                                    {profile.skills.specializations.map((item, index) => (
                                        <span key={index} style={{ padding: 'var(--spacing-4) var(--spacing-12)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-pill)', fontSize: '0.88rem', fontWeight: 500 }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="card-title">Technical Skills</h3>
                                <div className="flex-row-gap-12">
                                    {profile.skills.technical.map((item, index) => (
                                        <span key={index} style={{ padding: 'var(--spacing-4) var(--spacing-12)', backgroundColor: 'var(--cream-white)', border: '1px solid var(--dark-charcoal)', borderRadius: 'var(--radius-pill)', fontSize: '0.88rem', fontWeight: 500, color: 'var(--zapier-black)' }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
