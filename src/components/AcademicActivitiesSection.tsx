import React from "react";
import activities from "@/data/activities.json";
import { Container } from "./Container";

export function AcademicActivitiesSection() {
    return (
        <section id="activities" className="section bg-off-white">
            <Container>
                <div style={{ marginBottom: 'var(--spacing-40)' }}>
                    <span className="caption-upper">Academic Involvement</span>
                    <h2 className="section-heading" style={{ marginBottom: 0 }}>Professional Engagements</h2>
                </div>

                <div className="grid-2" style={{ gap: 'var(--spacing-32)' }}>
                    {/* Memberships */}
                    <div className="card" style={{ padding: 'var(--spacing-32)' }}>
                        <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-24)' }}>Professional Memberships</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {activities.memberships.map((membership, i) => (
                                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 'var(--spacing-16)', marginBottom: 'var(--spacing-16)', borderBottom: '1px solid var(--sand)' }}>
                                    <div>
                                        <div className="body-semibold">{membership.organization}</div>
                                        <div className="caption">{membership.type}</div>
                                    </div>
                                    <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--warm-gray)', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--light-sand)', borderRadius: 'var(--radius-tight)' }}>
                                        ID: {membership.id}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div className="card" style={{ padding: 'var(--spacing-32)' }}>
                        <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-24)' }}>Online Certifications</h3>
                        <ul className="flex-col-gap-16" style={{ listStyle: 'none', padding: 0 }}>
                            {activities.certifications.map((cert, i) => {
                                const [name, provider] = cert.split(" — ");
                                return (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--zapier-orange)', borderRadius: '50%', marginTop: '8px', marginRight: 'var(--spacing-12)', flexShrink: 0 }}></div>
                                        <div>
                                            <div className="body-semibold">{name}</div>
                                            <div className="caption">{provider}</div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Reviewer Roles */}
                    <div className="card" style={{ padding: 'var(--spacing-32)' }}>
                        <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-24)' }}>Active Reviewer</h3>
                        <div className="flex-row-gap-12">
                            {activities.reviewerRoles.map((role, i) => (
                                <span key={i} style={{ padding: 'var(--spacing-8) var(--spacing-16)', border: '1px solid var(--sand)', backgroundColor: 'var(--cream-white)', borderRadius: 'var(--radius-tight)', fontSize: '0.88rem', fontWeight: 500, color: 'var(--zapier-black)' }}>
                                    {role}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Resource Person */}
                    <div className="card" style={{ padding: 'var(--spacing-32)' }}>
                        <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-24)' }}>Resource Person</h3>
                        <ul className="flex-col-gap-16" style={{ listStyle: 'none', padding: 0 }}>
                            {activities.resourcePerson.map((event, i) => {
                                const parts = event.split(' — ');
                                const role = parts[0] ? parts[0].trim() : "Resource Person";
                                const rest = parts.length > 1 ? parts.slice(1).join(' — ').trim() : event;

                                return (
                                    <li key={i} style={{ padding: 'var(--spacing-16)', backgroundColor: 'var(--light-sand)', border: '1px solid var(--sand)', borderRadius: 'var(--radius-content)' }}>
                                        <div className="caption-upper" style={{ marginBottom: 'var(--spacing-4)' }}>{role}</div>
                                        <div className="body-text">{rest}</div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div style={{ marginTop: 'var(--spacing-24)', textAlign: 'center' }}>
                            <span className="caption" style={{ fontStyle: 'italic' }}>+ Organized and Participated in 41 Workshops/FDPs</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
