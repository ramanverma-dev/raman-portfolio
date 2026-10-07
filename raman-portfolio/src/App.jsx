import { useEffect, useRef, useState } from 'react'
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaAws, FaBootstrap, FaEnvelope, FaLinkedin, FaGraduationCap, FaAward, FaCut, FaRibbon, FaRocket, FaArrowRight, FaArrowUp, FaMapMarkerAlt, FaCode, FaLayerGroup, FaLightbulb, FaServer, FaDatabase, FaBars, FaTimes, FaSun, FaMoon, FaPaperPlane } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiSpring, SiSpringboot, SiNodedotjs, SiPostgresql, SiMysql, SiMongodb, SiCplusplus, SiIntellijidea, SiGmail } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import Robot from './Robot.jsx'

// ---- EDIT YOUR DETAILS HERE ----
const P = { name: 'Raman Verma', email: 'imramanverma2007@gmail.com', github: 'https://github.com/ramanverma-dev', linkedin: 'https://linkedin.com/in/ramanverma-dev', resume: '/Raman_Verma_Resume.pdf' }
const NAV = [['Home', 'home'], ['About', 'about'], ['Projects', 'projects'], ['Skills', 'skills'], ['Experience', 'experience'], ['Contact', 'contact']]
const I = { Java: [FaJava, '#E76F00'], Python: [FaPython, '#3776AB'], JavaScript: [SiJavascript, '#E8C500'], 'C++': [SiCplusplus, '#00599C'], React: [FaReact, '#0EA5C6'], 'Next.js': [SiNextdotjs, 'var(--ink)'], Tailwind: [SiTailwindcss, '#06B6D4'], Bootstrap: [FaBootstrap, '#7952B3'], Spring: [SiSpring, '#6DB33F'], 'Spring Boot': [SiSpringboot, '#6DB33F'], 'Node.js': [SiNodedotjs, '#339933'], PostgreSQL: [SiPostgresql, '#336791'], MySQL: [SiMysql, '#4479A1'], MongoDB: [SiMongodb, '#47A248'], AWS: [FaAws, '#FF9900'], Git: [FaGitAlt, '#F05032'], GitHub: [FaGithub, 'var(--ink)'], 'VS Code': [VscVscode, '#007ACC'], 'IntelliJ IDEA': [SiIntellijidea, 'var(--ink)'], HTML: [FaHtml5, '#E34F26'], CSS: [FaCss3Alt, '#1572B6'] }
const Ic = ({ k, s = 22 }) => { const [C, c] = I[k]; return <C size={s} color={c} /> }
const ORBIT = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Next.js', 'Tailwind', 'Bootstrap', 'Spring Boot', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'VS Code']
const BOX1 = [['Languages', FaCode, ['Java', 'Python', 'JavaScript', 'C++'], 'Language'], ['Frontend', FaLayerGroup, ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind', 'Bootstrap'], 'Frontend'], ['Backend', FaServer, ['Spring', 'Spring Boot', 'Node.js'], 'Backend']]
const BOX2 = [['Databases', FaDatabase, ['MySQL', 'PostgreSQL', 'MongoDB'], 'Database'], ['Cloud, DevOps & Tools', FaRocket, ['AWS', 'Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'], 'Tools']]
const CAT = Object.fromEntries([...BOX1, ...BOX2].flatMap(([, , ks, c]) => ks.map(k => [k, c])))
const PROJECTS = [
  { t: 'Salon Booking System', d: 'A full-stack salon booking platform with user authentication, booking management and admin panel.', tags: ['Java', 'MySQL', 'HTML', 'CSS'], icon: FaCut, link: P.github },
  { t: 'Breast Cancer Prediction', d: 'A machine learning model to predict breast cancer using clinical data.', tags: ['Python', 'Flask', 'ML'], icon: FaRibbon, link: P.github },
  { t: 'Your Next Project', d: 'A new idea, a real product. Coming soon...', tags: ['React', 'Node.js', 'PostgreSQL'], icon: FaRocket, link: P.github }]
const EXP = [
  { r: 'Java Full Stack Development', o: 'EduSkills Academy', date: 'Aug 2026 – Sep 2026 (2 months)', tags: ['Java', 'MySQL', 'HTML', 'CSS'], b: ['Completed an 8-week Java Full Stack Internship, gaining practical exposure to Core Java, Advanced Java, Spring Framework, Spring Boot, Hibernate, MySQL, HTML, CSS, JavaScript, Bootstrap and Git.', 'Successfully completed the internship requirements and earned the official Java Full Stack Internship Completion Certificate.'] },
  { r: 'Gen AI Virtual Internship', o: 'AICTE – EduSkills', tags: ['AWS', 'GenAI'], b: ['Gained foundational exposure to AWS Generative AI concepts and applications.', 'Explored Gen AI use cases and AWS technologies through structured learning modules and practical activities.'] },
  { r: 'Machine Learning & Data Science Intern', o: 'AICTE – EduSkills', tags: ['Python', 'ML', 'Data Science'], b: ['Completed an 8-week AICTE-EduSkills ML & Data Science Virtual Internship.', 'Completed structured learning modules, assessments and assigned activities.'] },
  { r: 'AI-ML Virtual Internship', o: 'AICTE – EduSkills', tags: ['Python', 'ML'], b: ['Completed a 10-week AICTE-EduSkills AI-ML Virtual Internship.', 'Gained foundational Machine Learning and AI concepts.'] }]
const CERTS = ['MongoDB AI Learning Program', 'AWS Academy Graduate – Machine Learning Foundations', 'Applied Marketing in Higher Education and Upskilling', 'AWS Academy Generative AI Foundations – Certificate & Badge', 'AWS Academy Graduate – Machine Learning for NLP – Training Badge']
const Tag = ({ k }) => <span className="tag">{I[k] && <Ic k={k} s={13} />}{k}</span>
const Sec = ({ id, n, label, title, sub, action, children }) => (
  <section id={id} className="panel sec"><div className="rail"><b>{n}</b><i /></div>
    <div className="sbody"><div className="shead rv"><div><small>{label}</small>{title && <h2>{title}</h2>}{sub && <p className="mut">{sub}</p>}</div>{action && <a className="btn ghost sm" href={action[1]}>{action[0]} <FaArrowRight /></a>}</div>{children}</div></section>)

const Socials = ({ big }) => (
  <div className={'socials' + (big ? ' big' : '')}>
    {[[SiGmail, 'Email (Gmail)', `https://mail.google.com/mail/?view=cm&fs=1&to=${P.email}`], [FaGithub, 'GitHub', P.github], [FaLinkedin, 'LinkedIn', P.linkedin]].map(([C, l, h]) =>
      <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} title={l}><C size={big ? 24 : 20} /></a>)}
  </div>)

// Sends the message to P.email through FormSubmit (no backend needed).
function ContactForm() {
  const [st, setSt] = useState('idle'), [err, setErr] = useState('')
  const submit = async (e) => {
    e.preventDefault(); const f = e.target, d = Object.fromEntries(new FormData(f))
    if (d._honey) return
    setSt('sending')
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${P.email}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: d.name, email: d.email, message: d.message, _subject: `Portfolio message from ${d.name}`, _replyto: d.email, _template: 'table', _captcha: 'false' }) })
      const j = await r.json()
      if (!r.ok || String(j.success) === 'false') { setErr(j.message || ''); throw new Error() }
      f.reset(); setSt('ok')
    } catch { setSt('err') }
  }
  return (
    <form className="card cform" onSubmit={submit}>
      <h4>Send me a message</h4>
      <div className="row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label></div>
      <label>Message<textarea name="message" rows="5" required placeholder="Tell me about the role or project..." /></label>
      <input className="hp" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn" disabled={st === 'sending'}>{st === 'sending' ? 'Sending...' : <>Send Message <FaPaperPlane /></>}</button>
      {st === 'ok' && <p className="note ok">Message sent. Thanks, I'll get back to you soon.</p>}
      {st === 'err' && <p className="note err">Couldn't send{err ? ` (${err})` : ''}. Please email me directly at <a href={`mailto:${P.email}`}><u>{P.email}</u></a>.</p>}
    </form>)
}

// Rotating ring is JS-driven so the centre badge can show whichever tech is at the top.
function Orbit() {
  const box = useRef(), ring = useRef(), [top, setTop] = useState(0)
  useEffect(() => {
    const N = ORBIT.length, step = 360 / N, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let th = 0, last = performance.now(), cur = 0, raf
    const tick = (now) => {
      const dt = Math.min(now - last, 64); last = now
      if (!reduce) th = (th + dt * 0.009) % 360 // 9deg/s = one turn per 40s
      ring.current.style.transform = `rotate(${th}deg)`; box.current.style.setProperty('--th', th + 'deg')
      const t = (N - Math.round(th / step) % N) % N
      if (t !== cur) { cur = t; setTop(t) }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf)
  }, [])
  const k = ORBIT[top]
  return (<div className="orbit-box" ref={box}>
    <div className="orbit" ref={ring}>{ORBIT.map((x, i) => <div key={x} className="oi" style={{ '--a': `${(360 / ORBIT.length) * i}deg` }}><span className={'oc' + (i === top ? ' top' : '')} title={x}><Ic k={x} s={24} /></span></div>)}</div>
    <div className="core" key={k}><Ic k={k} s={46} /><b>{k}</b><small>{CAT[k]}</small></div></div>)
}

export default function App() {
  const [active, setActive] = useState('home'), [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('theme') === 'dark' } catch { return false } })
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {} }, [dark])
  useEffect(() => {
    const rv = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: .12 })
    document.querySelectorAll('.rv').forEach(el => rv.observe(el))
    const sp = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach(([, id]) => { const el = document.getElementById(id); el && sp.observe(el) })
    return () => { rv.disconnect(); sp.disconnect() }
  }, [])
  return (<>
    <div className="bg"><i /><i /><i /></div>
    <header className="nav"><a className="brand" href="#home"><img src="/logo.png" alt="Logo" />{P.name}</a>
      <nav className={open ? 'open' : ''}>{NAV.map(([l, id]) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>{l}</a>)}</nav>
      <button className="theme" onClick={() => setDark(d => !d)} aria-label="Toggle dark/light theme" title={dark ? 'Light mode' : 'Dark mode'}>{dark ? <FaSun /> : <FaMoon />}</button>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <FaTimes /> : <FaBars />}</button></header>

    <main>
      <section id="home" className="panel hero"><div className="hero-l">
        <span className="pill">✦ Java Full Stack Developer</span>
        <h1>Raman <em>Verma</em></h1><h3>Backend that works.<br />Software that lasts.</h3>
        <p className="mut">I'm a Java Full Stack Developer, focused on building scalable web applications and solving real-world problems with clean code and modern technologies.</p>
        <div className="cta"><a className="btn" href="#contact">Let's Connect <FaArrowRight /></a><a className="btn ghost" href={P.resume} download>Download Resume <FaArrowRight style={{ transform: 'rotate(-45deg)' }} /></a></div><Socials /></div>
        <div className="stage"><div className="ring r1" /><div className="ring r2" /><span className="sp s1">✦</span><span className="sp s2">✦</span><Robot /></div></section>

      <Sec id="about" n="01" label="About Me" title="Turning Ideas into Scalable Solutions">
        <div className="two"><div className="rv"><p>I'm Raman Verma, a B.Tech AI/ML student building applications in Java and Python. Open to software engineering roles.</p>
          <p className="mut">I love solving problems, writing clean code and building projects that make an impact. I'm constantly learning and exploring new technologies to grow as a developer and create better solutions.</p>
          <div className="chips"><span className="tag big"><FaMapMarkerAlt /> Meerut, UP</span><span className="tag big"><FaGraduationCap /> B.Tech (AI/ML)</span></div></div>
          <div className="card rv"><div className="quote"><FaCode size={22} /><div>Clean code<br />= Good design<br />= Great products.</div></div>
            {[[FaLayerGroup, 'Strong Foundations in DSA & OOP'], [FaCode, 'Build Real Projects & Learn by Doing'], [FaLightbulb, 'Problem Solver & Quick Learner'], [FaServer, 'Interested in Backend Development']].map(([C, t]) => <div className="li" key={t}><span className="ico"><C /></span>{t}</div>)}</div></div></Sec>

      <Sec id="skills" n="02" label="Skills & Technologies" title="My Tech Stack" sub="Technologies I work with to build modern, scalable and user-centric applications.">
        <div className="sk rv"><Orbit />
          {[BOX1, BOX2].map((g, i) => <div className="card grp-box" key={i}>{g.map(([t, G, ks]) => <div className="grp" key={t}><h4><G /> {t}</h4><div className="icons">{ks.map(k => <div key={k} className="ib"><span><Ic k={k} /></span><small>{k}</small></div>)}</div></div>)}</div>)}</div></Sec>

      <Sec id="projects" n="03" label="Projects" title="Some of my work" sub="Here are a few projects I've built to practice and improve my skills in full stack development." action={['View All Projects', P.github]}>
        <div className="grid3">{PROJECTS.map(({ t, d, tags, icon: C, link }, i) => <article className="card pc rv" key={t} style={{ transitionDelay: i * 90 + 'ms' }}>
          <div className="pv"><C size={46} /><i style={{ width: '60%' }} /><i style={{ width: '38%' }} /><i style={{ width: '48%' }} /></div>
          <h4>{t}</h4><p className="mut">{d}</p><div className="chips">{tags.map(k => <Tag key={k} k={k} />)}</div><a className="more" href={link} target="_blank" rel="noreferrer">View Project <FaArrowRight /></a></article>)}</div></Sec>

      <Sec id="experience" n="04" label="Experience" title="Where I've trained." sub="Real projects. Practical learning. Hands-on experience." action={['View All', P.linkedin]}>
        <div className="tl">{EXP.map((e, i) => <div className="card xp rv" key={e.r}><div><h4>{e.r} <small>| {e.o}</small></h4><ul>{e.b.map(x => <li key={x}>{x}</li>)}</ul></div>
          <div className="xr">{e.date && <span className="date">{e.date}</span>}<div className="chips">{e.tags.map(k => <Tag key={k} k={k} />)}</div></div></div>)}</div></Sec>

      <Sec id="education" n="05" label="Education & Certifications">
        <div className="two eq"><div className="card ed rv"><span className="ico big"><FaGraduationCap /></span><div><h4>Education</h4><b>Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</b><p className="mut">B.Tech – Artificial Intelligence and Machine Learning</p><p className="mut">Sep 2023 – Apr 2027</p><span className="tag">AKTU</span></div></div>
          <div className="card ed rv"><span className="ico big"><FaAward /></span><div><h4>Certifications</h4><ul>{CERTS.map(c => <li key={c}>{c}</li>)}</ul></div></div></div></Sec>

      <Sec id="contact" n="06" label="Contact" title="Let's build something meaningful." sub="Open to software engineering opportunities and real-world development work.">
        <div className="cgrid rv"><ContactForm /><div className="card side"><h4>Connect with me</h4><p className="mut">Prefer a direct line? Reach out on any of these.</p><Socials big /></div></div></Sec>
    </main>
    <footer className="foot">© {new Date().getFullYear()} {P.name} · Built with <span style={{ color: 'var(--cy)' }}>♥</span> using modern web technologies<a className="up" href="#home" aria-label="Back to top"><FaArrowUp /></a></footer>
  </>)
}
