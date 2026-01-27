"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./page.module.css";

const translations = {
  pt: {
    menu: { about: "Sobre", experience: "Experiência", projects: "Projetos", contact: "Contato" },
    hero: { title: "Joel um Desenvolvedor Full Stack" },
    about: {
      title: "Sobre mim",
      text: "Olá, Seja bem-vindo ao meu portfólio. Tenho pouco mais de um ano de experiência trabalhando com APIs REST, banco de dados SQL e Kubernetes. Sou proativo, comunicativo e estou sempre disposto a aprender novas tecnologias. Programar é minha paixão, e é onde me sinto realizado."
    },
    skills: {
      title: "Conhecimentos Técnicos",
      categories: [
        { name: "Linguagens e Frameworks", items: ["Java", "Spring Boot", "Angular", "React", "Next.js", "TypeScript"] },
        { name: "Arquitetura", items: ["POO", "APIs REST", "Microsserviços"] },
        { name: "Frontend", items: ["Angular", "HTML5", "CSS3", "Consumo de APIs"] },
        { name: "Containers e Orquestração", items: ["Docker", "Kubernetes (K8s)"] },
        { name: "DevOps e Cloud", items: ["CI/CD", "Cloud Computing", "Containers"] },
        { name: "Banco de Dados", items: ["SQL", "Modelagem de Dados", "Integração Backend"] },
        { name: "Protocolos", items: ["HTTP/HTTPS", "JSON"] },
        { name: "Metodologias", items: ["SCRUM", "Metodologias Ágeis"] },
        { name: "Ferramentas", items: ["Git", "GitHub"] }
      ]
    },
    experience: {
      title: "Experiência Profissional",
      basis: {
        role: "Estagiário Desenvolvedor Full-Stack",
        company: "Basis Tecnologia da Informação",
        period: "1 ano",
        desc: "Atuei no desenvolvimento de aplicações web utilizando Java (Spring Boot) e Angular. Participei ativamente da conteinerização e orquestração de aplicações com Docker e Kubernetes, contribuindo para ambientes mais escaláveis e confiáveis. Apliquei boas práticas de arquitetura, APIs REST, versionamento (Git) e metodologias ágeis (Scrum)."
      }
    },
    education: {
      title: "Formação Acadêmica",
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário do Planalto Central Apparecido dos Santos",
      period: "2023 - 2025"
    },
    projects: { title: "Projetos" },
    metalyse: {
      desc: "MetaLyse é uma solução Full-Stack completa para extração, análise e histórico de metadados de arquivos digitais. O sistema permite que usuários façam upload de documentos (PDF) e imagens (JPG), extraindo informações técnicas profundas (como dados de GPS, Câmera, Autor, Software de Edição) que muitas vezes ficam ocultas."
    },
    contact: {
      title: "Contato",
      label: "Entre em contato",
      btn: "Enviar Email",
      whatsapp: "WhatsApp"
    },
    footer: {
      copy: "© 2026 Joel Wollace • Desenvolvedor Full Stack",
      views: "Visualizações"
    }
  },
  en: {
    menu: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    hero: { title: "Joel Full Stack Developer" },
    about: {
      title: "About Me",
      text: "Hello, Welcome to my portfolio. I have just over a year of experience working with REST APIs, SQL databases, and Kubernetes. I am proactive, communicative, and always willing to learn new technologies. Coding is my passion, and it's where I feel accomplished."
    },
    skills: {
      title: "Technical Skills",
      categories: [
        { name: "Languages & Frameworks", items: ["Java", "Spring Boot", "Angular", "React", "Next.js", "TypeScript"] },
        { name: "Architecture", items: ["OOP", "REST APIs", "Microservices"] },
        { name: "Frontend", items: ["Angular", "HTML5", "CSS3", "API Consumption"] },
        { name: "Containers & Orchestration", items: ["Docker", "Kubernetes (K8s)"] },
        { name: "DevOps & Cloud", items: ["CI/CD", "Cloud Computing", "Containers"] },
        { name: "Databases", items: ["SQL", "Data Modeling", "Backend Integration"] },
        { name: "Protocols", items: ["HTTP/HTTPS", "JSON"] },
        { name: "Methodologies", items: ["SCRUM", "Agile Methodologies"] },
        { name: "Tools", items: ["Git", "GitHub"] }
      ]
    },
    experience: {
      title: "Professional Experience",
      basis: {
        role: "Full-Stack Developer Intern",
        company: "Basis Information Technology",
        period: "1 year",
        desc: "Worked on web application development using Java (Spring Boot) and Angular. Actively participated in containerization and orchestration with Docker and Kubernetes, contributing to more scalable and reliable environments. Applied architecture best practices, REST APIs, versioning (Git), and agile methodologies (Scrum)."
      }
    },
    education: {
      title: "Education",
      course: "Systems Analysis and Development",
      institution: "Apparecido dos Santos University Center of the Central Plateau",
      period: "2023 - 2025"
    },
    projects: { title: "Projects" },
    metalyse: {
      desc: "MetaLyse is a complete Full-Stack solution for extraction, analysis, and history of digital file metadata. The system allows users to upload documents (PDF) and images (JPG), extracting deep technical information (such as GPS data, Camera, Author, Editing Software) that often remains hidden."
    },
    contact: {
      title: "Contact",
      label: "Get in touch",
      btn: "Send Email",
      whatsapp: "WhatsApp"
    },
    footer: {
      copy: "© 2026 Joel Wollace • Full Stack Developer",
      views: "Total Views"
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [views, setViews] = useState<number>(0);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = translations[language];

  const skills = [
    "Java", "Spring Boot", "Angular", "TypeScript",
    "Docker", "Kubernetes", "SQL", "Git", "Scrum", "CI/CD"
  ];

  useEffect(() => {
    AOS.init({ once: false, mirror: true, duration: 800, easing: "ease-in-out" });

    const fetchViews = async () => {
      try {
        const res = await fetch("https://api.counterapi.dev/v1/joel-wollace-portfolio/views/up");
        if (!res.ok) throw new Error("API não respondeu corretamente");
        const data = await res.json();
        setViews(data.count);
      } catch (err) {
        console.error("Erro ao carregar contador:", err);
        setViews(0);
      }
    };

    fetchViews();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <h1 className={styles.logo}></h1>
          <div className={styles.navRight}>
            <nav className={styles.navLinks}>
              <a href="#sobre">{t.menu.about}</a>
              <a href="#experiencia">{t.menu.experience}</a>
              <a href="#projetos">{t.menu.projects}</a>
              <a href="#contato">{t.menu.contact}</a>
            </nav>
            <button onClick={toggleLanguage} className={styles.langButton}>
              {language === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlow}></div>
          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">{t.hero.title}</h2>
        </section>

        <section id="sobre" className={styles.section} data-aos="fade-up">
          <div className={styles.sectionHeader}>
            <div className={styles.line}></div>
            <h3>{t.about.title}</h3>
          </div>
          <div className={styles.aboutCard}>
            <p className={styles.aboutText}>{t.about.text}</p>

            <div style={{ marginTop: '2.5rem' }}>
              <h4 style={{
                color: 'var(--primary)',
                marginBottom: '1.5rem',
                fontSize: '1.2rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '0.5rem'
              }}>
                {t.skills.title}
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                {t.skills.categories.map((category, index) => (
                  <div key={index}>
                    <h5 style={{
                      color: 'var(--text-secondary)',
                      marginBottom: '0.8rem',
                      fontSize: '0.95rem',
                      fontWeight: 'bold'
                    }}>
                      {category.name}
                    </h5>
                    <div className={styles.skillContainer}>
                      {category.items.map((tech) => (
                        <span key={tech} className={styles.skillChip}>{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className={styles.section} data-aos="fade-up">
          <div className={styles.sectionHeader}>
            <div className={styles.line}></div>
            <h3>{t.experience.title}</h3>
          </div>
          <div className={styles.projectsGrid}>
            <article className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className={styles.projectTechList}>{t.experience.basis.period}</span>
              </div>
              <h4 className={styles.projectTitle}>{t.experience.basis.role}</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                {t.experience.basis.company}
              </p>
              <p className={styles.projectDescription}>{t.experience.basis.desc}</p>
            </article>

            <article className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <span className={styles.projectTechList}>{t.education.period}</span>
              </div>
              <h4 className={styles.projectTitle}>{t.education.title}</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                {t.education.institution}
              </p>
              <p className={styles.projectDescription}>{t.education.course}</p>
            </article>
          </div>
        </section>

        <section id="projetos" className={styles.section} data-aos="zoom-in">
          <div className={styles.sectionHeader}>
            <div className={styles.line}></div>
            <h3>{t.projects.title}</h3>
          </div>

          <div className={styles.projectsGrid}>
            <article className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/harthur123/MetaLyse" target="_blank" aria-label="GitHub Repo">
                    <svg className={styles.iconLink} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
              <h4 className={styles.projectTitle}>MetaLyse</h4>
              <p className={styles.projectDescription}>{t.metalyse.desc}</p>
              <div className={styles.projectTechList}>
                <span>Angular</span>
                <span>Python (Flask)</span>
                <span>SQLite</span>
                <span>Security</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contato" className={styles.section} data-aos="fade-right">
          <h3 className={styles.contactTitle}>{t.contact.title}</h3>
          <div className={styles.contactCard}>
            <div>
              <p className={styles.contactLabel}>{t.contact.label}</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cjoelsantoscontato@gmail.com&su=Contato%20via%20Portfólio"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactButton}
              >
                {t.contact.btn}
              </a>

              <a href="https://wa.me/5561982349902" target="_blank" className={styles.contactButton} style={{ display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t.contact.whatsapp}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.socialContainer}>
          <a href="https://github.com/joelwolly" target="_blank" className={styles.socialLink}>
            <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/joel-wollace/" target="_blank" className={styles.socialLink}>
            <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className={styles.footerInfo}>
          <p className={styles.copy}>{t.footer.copy}</p>
          <div className={styles.viewCounter}>
            <span className={styles.viewLabel}>{t.footer.views}:</span>
            <span className={styles.viewNumber}>{views.toLocaleString()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
