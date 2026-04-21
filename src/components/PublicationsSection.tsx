import React from "react";
import publications from "@/data/publications.json";
import { Container } from "./Container";

export function PublicationsSection() {
    return (
        <section id="publications" className="section">
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-40)' }}>
                    <div>
                        <span className="caption-upper">Academic Output</span>
                        <h2 className="section-heading" style={{ marginBottom: 0 }}>Selected Publications</h2>
                    </div>
                    <p className="body-text" style={{ maxWidth: '400px', margin: 0 }}>
                        A selection of recent research papers published in SCIE and Scopus indexed journals.
                    </p>
                </div>

                <div className="grid-2">
                    {publications.map((pub, index) => (
                        <div key={index} className="card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-16)' }}>
                                <span style={{ padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-tight)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--dark-charcoal)' }}>
                                    {pub.year}
                                </span>
                            </div>

                            <h3 className="card-title" style={{ marginBottom: 'var(--spacing-12)' }}>
                                {pub.title}
                            </h3>

                            <p className="body-text" style={{ marginBottom: 'var(--spacing-24)', flexGrow: 1 }}>
                                {pub.authors.join(", ")}
                            </p>

                            <div style={{ borderTop: '1px solid var(--sand)', paddingTop: 'var(--spacing-16)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="caption" style={{ fontStyle: 'italic', color: 'var(--zapier-black)' }}>{pub.journal}</span>
                                
                                <div style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'center' }}>
                                    <span style={{ padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--cream-white)', border: '1px solid var(--mid-warm)', borderRadius: 'var(--radius-tight)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--zapier-black)' }}>
                                        {pub.metrics}
                                    </span>
                                    {pub.doi && (
                                        <a href={pub.doi} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--zapier-orange)', textDecoration: 'none', fontWeight: 500, fontSize: '0.88rem' }}>
                                            DOI ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
