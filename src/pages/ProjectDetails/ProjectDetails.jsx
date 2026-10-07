import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import styles from './ProjectDetails.module.css';

function ImagePlaceholder({ label, className = '' }) {
  return <div className={`${styles.imagePlaceholder} ${className}`} role="img" aria-label={`${label} image placeholder`}>
    <span>Image coming soon</span>
  </div>;
}

function ProjectImage({ src, alt, className = '' }) {
  return src ? <img className={className} src={src} alt={alt} loading="lazy" /> : <ImagePlaceholder className={className} label={alt} />;
}

function CommunityDetails({ project }) {
  const { story, tagline, instagramUrl, featureImage, galleryImages } = project.details;
  return <>
    <header className={styles.communityHeader}>
      <Link to="/projects" className={styles.communityBack}><ArrowLeft /> Back to projects</Link>
      <p className="eyebrow">{project.label}</p>
      <h1>{project.title}</h1>
    </header>
    <section className={styles.communityStory}>
      <div><p>{story}</p></div>
      <ProjectImage src={featureImage} alt="Community feature" className={styles.featurePlaceholder} />
    </section>
    <section className={styles.communityClosing}>
      <p className={styles.tagline}>{tagline}</p>
      <p className={styles.join}>Join the village: See what we’re up to every day and be part of the story over on <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>.</p>
    </section>
    <section className={styles.placeholderGallery} aria-label="Community image placeholders">
      {galleryImages.map((image, index) => <ProjectImage key={`${image}-${index}`} src={image} alt={`Community gallery ${index + 1}`} />)}
    </section>
  </>;
}

function EhsaasDetails({ project }) {
  const { subtitle, introduction, metrics, tagline, instagramUrl, impactReportUrl, featureImage, images, partners } = project.details;
  const partnerLoop = [...partners, ...partners];
  return <>
    <header className={styles.ehsaasHeader}>
      <Link to="/projects" className={styles.communityBack}><ArrowLeft /> Back to projects</Link>
      <p className="eyebrow">{project.label}</p>
      <h1>{project.title}</h1>
      <p>{subtitle}</p>
    </header>
    <section className={styles.ehsaasIntro}>
      <div className={styles.introCopy}>{introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <ProjectImage src={featureImage} alt="Ehsaas feature" className={styles.ehsaasFeature} />
    </section>
    <section className={styles.impact}>
      <p className="eyebrow">What 45 Days Created in 2026</p>
      <h2>Empathy isn’t something you teach in a lecture, it’s something you feel.</h2>
      <p className={styles.impactLead}>In early 2026, we partnered with ground-level heroes—Hunar Sikho NGO, Prerana NGO, and Street Angel Foundation—to see what happens when a city opens its heart.</p>
      <div className={styles.metrics}>{metrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.text}</p></article>)}</div>
    </section>
    <section className={styles.ehsaasClosing}>
      <p className={styles.tagline}>{tagline}</p>
      <p>💬 Join the circle: Connect with us on <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a> to see empathy in action.</p>
      <a className={styles.reportButton} href={impactReportUrl} target="_blank" rel="noreferrer"><FileText /> Read the impact report</a>
    </section>
    <section className={styles.ehsaasGallery} aria-label="Ehsaas photo gallery">
      {images.map((image, index) => <motion.img key={`${image}-${index}`} src={image} alt={`Ehsaas community moment ${index + 1}`} loading="lazy" whileHover={{ scale: 1.03 }} />)}
    </section>
    <section className={styles.partnerSection}>
      <p className="eyebrow">Past partners</p>
      <h2>The kind people who made this possible.</h2>
      <div className={styles.partnerViewport}><div className={styles.partnerTrack}>{partnerLoop.map((partner, index) => <div className={styles.partnerPill} key={`${partner.name}-${index}`} title={partner.name}><img className={styles.partnerLogo} src={partner.logo} alt={`${partner.name} logo`} loading="lazy" /></div>)}</div></div>
    </section>
  </>;
}

function FutureHumanDetails({ project }) {
  const { openingTitle, opening, selTitle, sel, pillars, pillarText, problem, solutions, tagline, instagramUrl, featureImage, galleryImage } = project.details;
  return <>
    <header className={styles.futureHeader}>
      <Link to="/projects" className={styles.communityBack}><ArrowLeft /> Back to projects</Link>
      <p className="eyebrow">{project.label}</p>
      <h1>{project.title}</h1>
      <p>Subject Integrated Life Skills & SEL Program </p>
    </header>
    <section className={styles.futureOpening}>
      <div><p className="eyebrow">The question</p><h2>{openingTitle}</h2>{opening.map((paragraph, index) => <p className={index === 0 ? styles.futureLead : ''} key={paragraph}>{paragraph}</p>)}</div>
      <ProjectImage src={featureImage} alt="Future Human Project feature" className={styles.futureFeature} />
    </section>
    <section className={styles.selSection}>
      <div className={styles.selCopy}><p className="eyebrow">The shift</p><h2>{selTitle}</h2>{sel.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <div className={styles.pillars}><p>{pillarText}</p>{pillars.map((pillar, index) => <article key={pillar}><span>0{index + 1}</span><strong>{pillar}</strong></article>)}</div>
    </section>
    <section className={styles.problemSection}><p className="eyebrow">The problem</p><h2>Why the old model falls short.</h2><p>{problem}</p></section>
    <section className={styles.solutionsSection}><p className="eyebrow">How our curriculum solves it</p><h2>Academic learning becomes a vehicle for character building.</h2><div>{solutions.map((solution, index) => <article key={solution.title}><span>0{index + 1}</span><h3>{solution.title}</h3><p>{solution.text}</p></article>)}</div></section>
    <section className={styles.futureClosing}><ProjectImage src={galleryImage} alt="Future Human Project gallery" /><div><p className={styles.tagline}>{tagline}</p><p>💬 Join us as we redefine classroom learning — follow us on <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>.</p></div></section>
  </>;
}

function PastProjectsDetails({ project }) {
  const { events, partners } = project.details;
  const partnerLoop = [...partners, ...partners];
  return <>
    <header className={styles.pastHeader}>
      <Link to="/projects" className={styles.communityBack}><ArrowLeft /> Back to projects</Link>
      <p className="eyebrow">{project.label}</p>
      <h1>{project.title}</h1>
      <p>Little moments that are building this community.</p>
    </header>
    <section className={styles.eventGrid} aria-label="Past SnackTime events">
      {events.map((event, index) => <motion.article className={styles.eventCard} key={event.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ delay: Math.min(index * .04, .25) }}><img src={event.image} alt={`${event.title} event`} loading="lazy" /><div><span>Past event</span><h2>{event.title}</h2><p>{event.text}</p></div></motion.article>)}
    </section>
    <section className={styles.pastPartnerSection}>
      <p className="eyebrow">Past partners</p>
      <h2>Made possible with our community.</h2>
      <div className={styles.partnerViewport}><div className={styles.partnerTrack}>{partnerLoop.map((partner, index) => <div className={styles.partnerPill} key={`${partner.name}-${index}`} title={partner.name}><img className={styles.partnerLogo} src={partner.logo} alt={`${partner.name} logo`} loading="lazy" /></div>)}</div></div>
    </section>
  </>;
}

function AlbumDetails({ project }) {
  const { images, intro, sections } = project.details;
  const directions = [{ x: '-110vw', y: -30 }, { x: '110vw', y: 20 }, { x: -40, y: '-110vh' }, { x: 30, y: '110vh' }];
  return <>
    <section className={styles.albumHero} aria-label="SnackTime photo album">
      <Link to="/projects" className={styles.albumBack}><ArrowLeft /> Back to projects</Link>
      <div className={styles.albumCollage}>{images.map((image, index) => { const direction = directions[index % directions.length]; return <motion.img key={`${image}-${index}`} className={styles.albumPhoto} src={image} alt={`SnackTime memory ${index + 1}`} initial={{ opacity: 0, x: direction.x, y: direction.y, rotate: (index % 2 ? 1 : -1) * (16 + index % 5) * 2, scale: .55 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 56, damping: 14, delay: .12 + index * .055 }} />; })}</div>
    </section>
    <section className={styles.albumIntro}><p className="eyebrow">A collection of memories</p><h2>{intro}</h2></section>
    <section className={styles.albumSections}>{sections.map((section, index) => <article key={section.title}><span>0{index + 1}</span><h3>{section.title}</h3><p>{section.text}</p></article>)}</section>
  </>;
}

function StandardDetails({ project }) {
  return <>
    <div className={styles.hero}><img src={project.image} alt={`${project.title} hero`} /><div className={styles.tint} /><div className={styles.heroContent}><Link to="/projects" className={styles.back}><ArrowLeft /> All projects</Link><p className="eyebrow">{project.label}</p><h1>{project.title}</h1></div></div>
    <div className={styles.content}><div><p className="eyebrow">The story</p><h2>Making space for a little more wonder.</h2><p className={styles.description}>{project.description} This placeholder copy is ready for your final project story. Share the experience, the people involved, and the small moments that made this day special.</p></div><aside><h3>What we explored</h3>{project.objectives.map((item) => <p key={item}><Check /> {item}</p>)}</aside></div>
    <section className={styles.gallery}><p className="eyebrow">A few moments</p><h2>Gallery</h2><div>{project.gallery.map((image, index) => <motion.img whileHover={{ scale: 1.03 }} key={`${image}-${index}`} src={image} alt={`${project.title} moment ${index + 1}`} loading="lazy" />)}</div></section>
  </>;
}

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  if (!project) return <section className={styles.missing}><h1>That project wandered off.</h1><Link to="/projects">Back to projects</Link></section>;
  return <motion.article className={`${styles.page} ${project.layout === 'community' ? styles.communityPage : ''} ${project.layout === 'futureHuman' ? styles.futureHumanPage : ''} ${project.layout === 'pastProjects' ? styles.pastProjectsPage : ''} ${project.layout === 'album' ? styles.albumPage : ''}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -14 }}>
    {project.layout === 'community' ? <CommunityDetails project={project} /> : project.layout === 'ehsaas' ? <EhsaasDetails project={project} /> : project.layout === 'futureHuman' ? <FutureHumanDetails project={project} /> : project.layout === 'pastProjects' ? <PastProjectsDetails project={project} /> : project.layout === 'album' ? <AlbumDetails project={project} /> : <StandardDetails project={project} />}
  </motion.article>;
}
