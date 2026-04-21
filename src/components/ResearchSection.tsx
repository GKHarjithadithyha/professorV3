import React from "react";
import { getMarkdownContent } from "@/lib/markdown";
import { Container } from "./Container";

export async function ResearchSection() {
    const { contentHtml, title } = await getMarkdownContent("research");

    return (
        <section id="research" className="section bg-off-white">
            <Container>
                <div style={{ marginBottom: 'var(--spacing-64)' }}>
                    <span className="caption-upper">Focus Areas</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>{title}</h2>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card" style={{ padding: 'var(--spacing-40)', marginBottom: 'var(--spacing-40)' }}>
                        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </div>

                    <div className="card" style={{ padding: 'var(--spacing-32)', marginBottom: 'var(--spacing-24)', borderLeft: '4px solid var(--zapier-orange)' }}>
                        <h3 className="card-title">PhD Research Topic</h3>
                        <p className="body-large" style={{ fontStyle: 'italic', margin: 0 }}>
                            "Web Service Design for an Efficient Data Sharing on Cloud with Wireless Sensor Network using Push Technology Architecture"
                        </p>
                    </div>

                    <div className="grid-2">
                        <div className="card">
                            <h3 className="card-title">PG / PhD Supervisor Recognition</h3>
                            <ul style={{ paddingLeft: 'var(--spacing-20)', color: 'var(--dark-charcoal)', lineHeight: 1.6, marginTop: 'var(--spacing-12)' }}>
                                <li>School of Engineering, Dayanandha Sagar University</li>
                                <li style={{ marginTop: 'var(--spacing-8)' }}>SRMIST Ramapuram Campus (Number of PhD Scholars Registered: 02)</li>
                                <li style={{ marginTop: 'var(--spacing-8)' }}>Chitkara University Institute of Engineering and Technology</li>
                                <li style={{ marginTop: 'var(--spacing-8)' }}>PG Supervisor at BITS Pilani, Rajasthan Campus, India</li>
                            </ul>
                        </div>
                        
                        <div className="card">
                            <h3 className="card-title">PhD Thesis Examiner</h3>
                            <div className="flex-col-gap-16" style={{ marginTop: 'var(--spacing-16)' }}>
                                <div style={{ borderBottom: '1px solid var(--sand)', paddingBottom: 'var(--spacing-12)' }}>
                                    <div className="body-semibold">June 2022</div>
                                    <div className="body-text mt-8">Evaluated PhD thesis of Narahari Narasimhaiah, Bharathiar University, Coimbatore</div>
                                </div>
                                <div>
                                    <div className="body-semibold">January 2025</div>
                                    <div className="body-text mt-8">Evaluated thesis of Ravindhar N. V., Saveetha University</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
