import React from "react";
import profile from "@/data/profile.json";
import { Container } from "./Container";
import { Button } from "./Button";

export function ContactSection() {
    return (
        <section id="contact" className="section">
            <Container>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-48)' }}>
                        <h2 className="hero-sm" style={{ marginBottom: 'var(--spacing-16)' }}>Get In Touch</h2>
                        <p className="body-large">
                            Open to research collaborations, speaking engagements, and academic partnerships.
                        </p>
                    </div>

                    <div className="card" style={{ padding: 'var(--spacing-48)' }}>
                        <div className="grid-2" style={{ gap: 'var(--spacing-48)' }}>
                            <div className="flex-col-gap-32">
                                <div>
                                    <h3 className="sub-heading-md" style={{ marginBottom: 'var(--spacing-8)' }}>Contact Information</h3>
                                    <p className="caption">Feel free to reach out via email or phone.</p>
                                </div>

                                <div className="flex-col-gap-24">
                                    <div>
                                        <div className="caption-upper" style={{ marginBottom: 'var(--spacing-4)' }}>Email</div>
                                        <a href={`mailto:${profile.email}`} style={{ color: 'var(--zapier-black)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--sand)' }}>
                                            {profile.email}
                                        </a>
                                    </div>

                                    <div>
                                        <div className="caption-upper" style={{ marginBottom: 'var(--spacing-4)' }}>Phone / WhatsApp</div>
                                        <div className="body-semibold">{profile.phone}</div>
                                    </div>

                                    <div>
                                        <div className="caption-upper" style={{ marginBottom: 'var(--spacing-4)' }}>Based in</div>
                                        <div className="body-semibold">{profile.location}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-col-gap-32" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div>
                                    <h3 className="sub-heading-md" style={{ marginBottom: 'var(--spacing-8)' }}>Academic Profiles</h3>
                                    <p className="caption">Connect with my research networks.</p>
                                </div>

                                <div className="flex-col-gap-16">
                                    <a
                                        href={profile.social.google_scholar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-16) var(--spacing-20)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-content)', textDecoration: 'none', color: 'var(--zapier-black)', fontWeight: 500 }}
                                    >
                                        <span>Google Scholar</span>
                                        <span style={{ color: 'var(--zapier-orange)' }}>↗</span>
                                    </a>

                                    <a
                                        href={`https://orcid.org/${profile.social.orcid}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-16) var(--spacing-20)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-content)', textDecoration: 'none', color: 'var(--zapier-black)', fontWeight: 500 }}
                                    >
                                        <span>ORCID</span>
                                        <span style={{ color: 'var(--zapier-orange)' }}>↗</span>
                                    </a>
                                </div>

                                <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-24)' }}>
                                    <Button href="/documents/DrbharathirajaCV.pdf" variant="primary" style={{ width: '100%' }} icon>
                                        Download Full Curriculum Vitae
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
