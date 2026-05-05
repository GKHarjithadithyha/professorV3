"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "@/data/profile.json";
import education from "@/data/education.json";
import experience from "@/data/experience.json";
import publications from "@/data/publications.json";
import books from "@/data/books.json";
import patents from "@/data/patents.json";
import { MobileBottomNav } from "./MobileBottomNav";
import { Bell, Mail, Menu, Building2, User, Phone, X, GraduationCap, BriefcaseBusiness, BookOpen, ArrowRight, PhoneCall, ChevronRight } from "lucide-react";

type MobileSection = "experience" | "education" | "journal" | "contact" | null;
type JournalFilter = "all" | "publication" | "book" | "project";

type Props = {
    aboutHtml: string;
    researchHtml: string;
    researchTitle: string;
};

export function MobileAppShell({ aboutHtml, researchHtml, researchTitle }: Props) {
    const [activeSection, setActiveSection] = useState<MobileSection>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [journalFilter, setJournalFilter] = useState<JournalFilter>("all");

    useEffect(() => {
        document.body.style.overflow = activeSection ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeSection]);

    const expertiseList = profile.skills.specializations;

    const journalItems = useMemo(() => {
        const items = [
            ...publications.map((p) => ({
                title: p.title,
                type: "publication" as const,
                description: `${p.journal} (${p.year})`,
                year: p.year,
                metadata: p.metrics || "",
            })),
            ...books.map((b) => ({
                title: b.title,
                type: "book" as const,
                description: `${b.publisher}`,
                year: b.year,
                metadata: b.isbn || "",
            })),
            ...patents.map((p) => ({
                title: p.title,
                type: "project" as const,
                description: `${p.status} • ${p.date}`,
                year: p.date,
                metadata: p.applicationNo || "",
            })),
        ];

        return journalFilter === "all"
            ? items
            : items.filter((item) => item.type === journalFilter);
    }, [journalFilter]);

    const sectionConfig = {
        experience: { title: "Experience", icon: BriefcaseBusiness },
        education: { title: "Education", icon: GraduationCap },
        journal: { title: "Journal", icon: BookOpen },
        contact: { title: "Contact", icon: Mail },
    } as const;

    const closeAll = () => {
        setActiveSection(null);
        setMenuOpen(false);
    };

    return (
        <div className="mobile-app-shell">
            {/* Top Header */}
            <header className="mobile-top-header">
                <div className="mobile-top-header__left">
                    <div className="mobile-top-avatar">
                        <Image src="/images/profile.jpg" alt={profile.name} fill style={{ objectFit: "cover" }} priority />
                    </div>
                    <div className="mobile-top-header__text">
                        <div className="mobile-top-header__name">{profile.name}</div>
                        <div className="mobile-top-header__role">{profile.designation}</div>
                    </div>
                </div>
                <div className="mobile-top-header__icons">
                    <button type="button" className="mobile-top-icon-btn" aria-label="Notifications">
                        <Bell size={20} strokeWidth={2} />
                        <span className="mobile-icon-dot"></span>
                    </button>
                    <button type="button" className="mobile-top-icon-btn" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu size={20} strokeWidth={2} />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="mobile-main">
                {/* Hero Section */}
                <section className="mobile-hero">
                    <div className="mobile-hero__left">
                        <div className="mobile-hero__greeting">Hi, I'm</div>
                        <h1 className="mobile-hero__title">{profile.name}</h1>
                        <div className="mobile-hero__designation">{profile.designation}</div>
                        <div className="mobile-hero__institution">
                            <Building2 size={14} />
                            {profile.institution}
                        </div>
                        <p className="mobile-hero__bio">
                            I specialize in Database Systems, Data Management, and Software Engineering with a passion for teaching, research and mentoring students.
                        </p>
                    </div>
                    <div className="mobile-hero__right">
                        <div className="mobile-hero__image">
                            <Image src="/images/profile.jpg" alt={profile.name} fill style={{ objectFit: "cover" }} priority />
                        </div>
                    </div>
                </section>

                {/* About Me Section */}
                <section className="mobile-section-card">
                    <div className="mobile-section-header">
                        <User size={20} className="mobile-section-icon" />
                        <h2 className="mobile-section-title">About Me</h2>
                    </div>
                    <div className="mobile-section-body" dangerouslySetInnerHTML={{ __html: aboutHtml }} />
                </section>

                {/* Expertise Section */}
                <section className="mobile-section-card">
                    <div className="mobile-section-header">
                        <BriefcaseBusiness size={20} className="mobile-section-icon" />
                        <h2 className="mobile-section-title">Expertise</h2>
                    </div>
                    <div className="mobile-expertise-tags">
                        {expertiseList.map((skill, index) => (
                            <span key={index} className="mobile-expertise-tag">{skill}</span>
                        ))}
                    </div>
                </section>

                {/* Info Grid Section */}
                <section className="mobile-section-card">
                    <div className="mobile-stats-grid">
                        <div className="mobile-stat-box">
                            <div className="mobile-stat-box__number">{profile.stats.scopus_publications}</div>
                            <div className="mobile-stat-box__label">Scopus Publications</div>
                        </div>
                        <div className="mobile-stat-box">
                            <div className="mobile-stat-box__number">{profile.stats.google_scholar_h_index}</div>
                            <div className="mobile-stat-box__label">Scholar H-Index</div>
                        </div>
                        <div className="mobile-stat-box">
                            <div className="mobile-stat-box__number">{profile.stats.scopus_h_index}</div>
                            <div className="mobile-stat-box__label">Scopus H-Index</div>
                        </div>
                        <div className="mobile-stat-box">
                            <div className="mobile-stat-box__number">{patents.length}</div>
                            <div className="mobile-stat-box__label">Patents</div>
                        </div>
                    </div>
                </section>
            </main>

            <MobileBottomNav
                activeSection={activeSection}
                onSelect={(section) => {
                    if (section === "home") {
                        closeAll();
                        return;
                    }
                    setActiveSection(section);
                }}
            />

            {/* Overlay Sections */}
            {activeSection && (
                <div className="mobile-overlay" role="dialog" aria-modal="true" aria-label={sectionConfig[activeSection].title}>
                    <div className="mobile-overlay__panel">
                        <div className="mobile-overlay__header">
                            <h2 className="mobile-section-title">{sectionConfig[activeSection].title}</h2>
                            <button type="button" className="mobile-close-btn" onClick={() => setActiveSection(null)} aria-label="Close section">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="mobile-overlay__content">
                            {activeSection === "experience" && (
                                <div className="mobile-stack">
                                    {experience.map((job, index) => (
                                        <article key={index} className="mobile-item-card">
                                            <div className="mobile-item-card__top">
                                                <div>
                                                    <div className="mobile-item-title">{job.role}</div>
                                                    <div className="mobile-item-subtitle">{job.institution}</div>
                                                </div>
                                                <span className="mobile-badge">{job.period}</span>
                                            </div>
                                            <div className="mobile-body">{job.location}</div>
                                            <p className="mobile-body" style={{ marginTop: 8 }}>{job.description}</p>
                                        </article>
                                    ))}
                                </div>
                            )}

                            {activeSection === "education" && (
                                <div className="mobile-stack">
                                    {education.map((edu, index) => (
                                        <article key={index} className="mobile-item-card">
                                            <div className="mobile-item-card__top">
                                                <div>
                                                    <div className="mobile-item-title">{edu.degree}</div>
                                                    <div className="mobile-item-subtitle">{edu.institution}</div>
                                                </div>
                                                <span className="mobile-badge">{edu.year}</span>
                                            </div>
                                            {edu.grade !== "—" && (
                                                <div className="mobile-body">Grade: {edu.grade}</div>
                                            )}
                                        </article>
                                    ))}
                                </div>
                            )}

                            {activeSection === "journal" && (
                                <div className="mobile-stack">
                                    {/* Filter Tabs */}
                                    <div className="mobile-journal-filters">
                                        {(["all", "publication", "book", "project"] as const).map((filter) => (
                                            <button
                                                key={filter}
                                                type="button"
                                                className={`mobile-filter-pill${journalFilter === filter ? " is-active" : ""}`}
                                                onClick={() => setJournalFilter(filter)}
                                            >
                                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Journal Cards */}
                                    {journalItems.length > 0 ? (
                                        journalItems.map((item, index) => (
                                            <article key={index} className="mobile-journal-card">
                                                <div className="mobile-journal-card__header">
                                                    <div className="mobile-journal-card__title">{item.title}</div>
                                                    <span className="mobile-journal-card__type">{item.type === "publication" ? "Publication" : item.type === "journal" ? "Journal" : item.type === "book" ? "Book" : "Project"}</span>
                                                </div>
                                                <div className="mobile-journal-card__description">{item.description}</div>
                                                {item.metadata && (
                                                    <div className="mobile-journal-card__metadata">{item.metadata}</div>
                                                )}
                                            </article>
                                        ))
                                    ) : (
                                        <div className="mobile-empty-state">No items found</div>
                                    )}
                                </div>
                            )}

                            {activeSection === "contact" && (
                                <div className="mobile-stack">
                                    <a className="mobile-action-btn" href={`mailto:${profile.email}`}>
                                        <Mail size={16} /> Email
                                    </a>
                                    <a className="mobile-action-btn" href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
                                        <PhoneCall size={16} /> Call
                                    </a>

                                    <form className="mobile-contact-form" onSubmit={(e) => e.preventDefault()}>
                                        <label className="mobile-field">
                                            <span>Name</span>
                                            <input className="mobile-input" type="text" placeholder="Your name" />
                                        </label>
                                        <label className="mobile-field">
                                            <span>Email</span>
                                            <input className="mobile-input" type="email" placeholder="you@example.com" />
                                        </label>
                                        <label className="mobile-field">
                                            <span>Message</span>
                                            <textarea className="mobile-input" rows={4} placeholder="Write your message" />
                                        </label>
                                        <button type="submit" className="mobile-submit-btn">Send Message</button>
                                    </form>

                                    <Link href={profile.social.google_scholar} className="mobile-link-card" target="_blank" rel="noopener noreferrer">
                                        Google Scholar <ArrowRight size={14} />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}