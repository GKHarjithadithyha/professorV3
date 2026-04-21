import React from "react";
import awards from "@/data/awards.json";
import { Container } from "./Container";

export function AwardsSection() {
    return (
        <section id="awards" className="section">
            <Container>
                <div style={{ marginBottom: 'var(--spacing-40)' }}>
                    <span className="caption-upper">Recognition</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>Awards & Achievements</h2>
                </div>

                <div className="grid-3">
                    {awards.map((award, index) => (
                        <div key={index} className="card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-16)' }}>
                                <span style={{ padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-tight)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--dark-charcoal)' }}>
                                    {award.date}
                                </span>
                            </div>
                            <h3 className="card-title" style={{ flexGrow: 1, fontSize: '1.25rem' }}>
                                {award.title}
                            </h3>
                            <div style={{ marginTop: 'var(--spacing-24)', paddingTop: 'var(--spacing-16)', borderTop: '1px solid var(--sand)' }}>
                                <span className="caption-upper" style={{ fontSize: '0.75rem' }}>
                                    {award.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
