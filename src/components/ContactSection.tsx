"use client";

import React, { useState } from "react";
import profile from "@/data/profile.json";
import { Container } from "./Container";
import { Button } from "./Button";

export function ContactSection() {
    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulate sending email
        setFormStatus("success");
        setTimeout(() => setFormStatus("idle"), 5000); // Reset after 5 seconds
    };

    return (
        <section id="contact" className="section">
            <Container>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-48)' }}>
                        <h2 className="hero-sm" style={{ marginBottom: 'var(--spacing-16)' }}>Get In Touch</h2>
                        <p className="body-large">
                            Open to research collaborations, speaking engagements, and academic partnerships.
                        </p>
                    </div>

                    <div className="card" style={{ padding: 'var(--spacing-48)' }}>
                        <div className="grid-2" style={{ gap: 'var(--spacing-64)' }}>
                            {/* Left Column - Contact Info */}
                            <div className="flex-col-gap-32">
                                <div style={{ marginBottom: 'var(--spacing-32)' }}>
                                    <h3 className="sub-heading-md" style={{ marginBottom: 'var(--spacing-8)' }}>Contact Information</h3>
                                    <p className="contact-typing" style={{ maxWidth: '34rem', lineHeight: 1.45, margin: 0 }}>
                                        <span className="contact-typing-line">For academic inquiries or collaborations,</span>
                                        <span className="contact-typing-line">please get in touch via email.</span>
                                    </p>
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-32)' }}>
                                    <div className="caption-upper" style={{ marginBottom: 'var(--spacing-4)' }}>Email</div>
                                    <a href={`mailto:${profile.email}`} style={{ color: 'var(--zapier-black)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--sand)' }}>
                                        {profile.email}
                                    </a>
                                </div>

                                <div className="flex-col-gap-32" style={{ display: 'flex', flexDirection: 'column', marginTop: 0 }}>
                                    <div>
                                        <h3 className="sub-heading-md" style={{ marginBottom: 'var(--spacing-8)' }}>Academic Profiles</h3>
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

                                    <div style={{ marginTop: 'var(--spacing-8)' }}>
                                        <Button href="/documents/DrbharathirajaCV.pdf" variant="primary" style={{ width: '100%', backgroundColor: 'var(--zapier-black)', color: 'var(--cream-white)' }} icon>
                                            Download Curriculum Vitae
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Contact Form */}
                            <div className="flex-col-gap-32">
                                <div>
                                    <h3 className="sub-heading-md" style={{ marginBottom: 'var(--spacing-8)' }}>Send a Message</h3>
                                    <p className="caption">I will get back to you as soon as possible.</p>
                                </div>

                                {formStatus === "success" ? (
                                    <div style={{ padding: 'var(--spacing-24)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-content)', textAlign: 'center' }}>
                                        <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-8)' }}>✅</div>
                                        <h3 className="card-title">Message sent successfully</h3>
                                        <p className="body-text">Thank you for reaching out.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex-col-gap-16">
                                        <div className="form-group">
                                            <label htmlFor="name" className="caption-upper">Full Name *</label>
                                            <input type="text" id="name" required className="form-input" placeholder="Dr. John Doe" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="caption-upper">Email Address *</label>
                                            <input type="email" id="email" required className="form-input" placeholder="john@university.edu" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject" className="caption-upper">Subject</label>
                                            <input type="text" id="subject" className="form-input" placeholder="Research Collaboration" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message" className="caption-upper">Message *</label>
                                            <textarea id="message" required className="form-input" rows={5} placeholder="Your message here..." style={{ resize: 'vertical' }}></textarea>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="btn-primary-orange" 
                                            style={{ width: '100%', padding: 'var(--spacing-16) var(--spacing-24)', fontSize: '1.1rem', marginTop: 'var(--spacing-8)' }}
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        <style jsx>{`
                            .contact-typing {
                                display: flex;
                                flex-direction: column;
                                gap: var(--spacing-4);
                                color: var(--zapier-black);
                                font-weight: 700;
                                font-size: 1.05rem;
                                letter-spacing: -0.2px;
                            }

                            .contact-typing-line {
                                display: block;
                                animation: contactLineReveal 0.8s ease both;
                            }

                            .contact-typing-line:last-child {
                                animation-delay: 0.2s;
                            }

                            @keyframes contactLineReveal {
                                from {
                                    opacity: 0;
                                    transform: translateY(4px);
                                }

                                to {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }

                            @media (max-width: 768px) {
                                .contact-typing {
                                    font-size: 1rem;
                                }
                            }
                        `}</style>
                    </div>
                </div>
            </Container>
        </section>
    );
}
