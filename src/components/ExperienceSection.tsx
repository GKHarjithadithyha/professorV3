import React from "react";
import experience from "@/data/experience.json";
import { Container } from "./Container";

export function ExperienceSection() {
    return (
        <section id="experience" className="section">
            <Container>
                <div style={{ marginBottom: 'var(--spacing-40)' }}>
                    <span className="caption-upper">Career Path</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>Professional Experience</h2>
                </div>

                {/* Grid Layout for Experience Instead of Timeline as per Card System Design */}
                <div className="grid-2">
                    {experience.map((job, index) => (
                        <div key={index} className="card" style={{ padding: 'var(--spacing-32)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-16)' }}>
                                <div>
                                    <h3 className="card-title">{job.role}</h3>
                                    <div className="body-semibold">{job.institution}</div>
                                </div>
                                <span style={{ padding: 'var(--spacing-4) var(--spacing-12)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-pill)', fontSize: '0.88rem', color: 'var(--zapier-black)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                                    {job.period}
                                </span>
                            </div>
                            
                            <div className="caption" style={{ marginBottom: 'var(--spacing-16)' }}>{job.location}</div>
                            
                            <p className="body-text" style={{ margin: 0 }}>
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
