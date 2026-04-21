import React from "react";
import patents from "@/data/patents.json";
import books from "@/data/books.json";
import { Container } from "./Container";

export function PatentsAndBooksSection() {
    return (
        <section id="patents-books" className="section bg-off-white">
            <Container>
                <div className="grid-2" style={{ gap: 'var(--spacing-48)' }}>
                    {/* Patents */}
                    <div>
                        <div style={{ marginBottom: 'var(--spacing-32)' }}>
                            <span className="caption-upper">Intellectual Property</span>
                            <h2 className="section-heading" style={{ marginBottom: 0 }}>Patents</h2>
                        </div>
                        <div className="flex-col-gap-16">
                            {patents.map((patent, index) => (
                                <div key={index} className="card" style={{ padding: 'var(--spacing-20)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-16)' }}>
                                        <h3 className="card-title" style={{ fontSize: '1.13rem', margin: 0 }}>
                                            {patent.title}
                                        </h3>
                                        <span style={{ flexShrink: 0, padding: 'var(--spacing-4) var(--spacing-8)', border: '1px solid var(--sand)', backgroundColor: patent.status === "Granted" ? 'var(--light-sand)' : 'transparent', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--zapier-black)' }}>
                                            {patent.status}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontFamily: 'monospace', fontSize: '0.88rem', color: 'var(--warm-gray)' }}>
                                            App: {patent.applicationNo}
                                        </span>
                                        <span className="caption">{patent.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Books */}
                    <div>
                        <div style={{ marginBottom: 'var(--spacing-32)' }}>
                            <span className="caption-upper">Publications</span>
                            <h2 className="section-heading" style={{ marginBottom: 0 }}>Books</h2>
                        </div>
                        <div className="flex-col-gap-16">
                            {books.map((book, index) => (
                                <div key={index} className="card" style={{ padding: 'var(--spacing-20)', borderLeft: '4px solid var(--dark-charcoal)' }}>
                                    <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-8)' }}>
                                        {book.title}
                                    </h3>
                                    <p className="body-text" style={{ marginBottom: 'var(--spacing-16)' }}>
                                        {book.publisher}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontFamily: 'monospace', fontSize: '0.88rem', color: 'var(--warm-gray)' }}>
                                            ISBN: {book.isbn}
                                        </span>
                                        <span style={{ fontWeight: 600, color: 'var(--zapier-black)' }}>
                                            {book.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
