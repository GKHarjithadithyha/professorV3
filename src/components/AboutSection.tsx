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

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-32)' }}>
                        {/* Left Column - Skills */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                            <div className="card">
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

                        {/* Right Column - Biogrpahy */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                            <div className="card" style={{ padding: 'var(--spacing-32)' }}>
                                <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                                {/* Add temporary inline style for prose until I append to globals.css */}
                                <style dangerouslySetInnerHTML={{__html:`
                                  .prose p { margin-bottom: var(--spacing-16); line-height: 1.5; color: var(--dark-charcoal); }
                                  .prose h1, .prose h2, .prose h3 { color: var(--zapier-black); font-weight: 600; margin-bottom: var(--spacing-12); margin-top: var(--spacing-24); }
                                  .prose a { color: var(--zapier-orange); text-decoration: none; }
                                  .prose a:hover { text-decoration: underline; }
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
                    </div>
                </div>
            </Container>
        </section>
    );
}
