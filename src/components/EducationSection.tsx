import React from "react";
import education from "@/data/education.json";
import { Container } from "./Container";

export function EducationSection() {
    return (
        <section id="education" className="section bg-off-white">
            <Container>
                <div style={{ marginBottom: 'var(--spacing-40)' }}>
                    <span className="caption-upper">Academic Journey</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>Education</h2>
                </div>

                <div className="grid-2">
                    {education.map((edu, index) => (
                        <div key={index} className="card" style={{ padding: 'var(--spacing-32)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-16)' }}>
                                <div>
                                    <h3 className="card-title">{edu.degree}</h3>
                                    <div className="body-semibold">{edu.institution}</div>
                                </div>
                                <span style={{ padding: 'var(--spacing-4) var(--spacing-12)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-pill)', fontSize: '0.88rem', color: 'var(--zapier-black)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                                    {edu.year}
                                </span>
                            </div>
                            
                            {edu.grade !== "—" && (
                                <div className="caption" style={{ marginTop: 'var(--spacing-8)' }}>
                                    Grade: <span style={{ color: 'var(--zapier-black)', fontWeight: 600 }}>{edu.grade}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
