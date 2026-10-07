import { useEffect, useRef, useState } from 'react'
const C = '#3FE0FF'
const MSG = { surprised: 'Whoa! You poked me 😮', love: 'Aww, thanks! 💛', wink: 'Hire Raman. He builds cool stuff 😉', dizzy: 'Dizzy... stop poking! 😵', sleepy: 'zzz...' }
const st = { stroke: C, strokeWidth: 9, strokeLinecap: 'round', fill: 'none', filter: 'url(#glow)' }
const fill = { fill: C, filter: 'url(#glow)' }
const heart = 'M0 14 C-26 -6 -14 -26 0 -12 C14 -26 26 -6 0 14Z'
const Eyes = (f) => [-50, 50].map((x, i) => <g key={x} transform={`translate(${x} -12)`}>{f(i)}</g>)

export function Face({ m }) {
  return (
    <g transform="translate(260 228)">
      {m === 'normal' && <><g className="blink">{Eyes(() => <rect x="-9" y="-20" width="18" height="40" rx="9" {...fill} />)}</g><path d="M-26 30 Q0 52 26 30" {...st} /></>}
      {m === 'happy' && <>{Eyes(() => <path d="M-22 10 Q0 -20 22 10" {...st} />)}<path d="M-30 28 Q0 62 30 28" {...st} /></>}
      {m === 'surprised' && <>{Eyes(() => <circle r="15" {...st} />)}<ellipse cy="40" rx="11" ry="14" {...st} /></>}
      {m === 'love' && <>{Eyes(() => <path d={heart} fill="#FF5C8A" filter="url(#glow)" className="beat" />)}<path d="M-28 28 Q0 58 28 28" {...st} /></>}
      {m === 'wink' && <>{Eyes((i) => i ? <path d="M-20 8 Q0 -18 20 8" {...st} /> : <rect x="-9" y="-20" width="18" height="40" rx="9" {...fill} />)}<path d="M-26 30 Q0 54 26 30" {...st} /></>}
      {m === 'dizzy' && <>{Eyes(() => <path className="spin" d="M0 0 a3 3 0 1 1 3 3 a7 7 0 1 1 -7 -7 a11 11 0 1 1 11 11 a15 15 0 1 1 -15 -15" {...st} strokeWidth="5" />)}<path d="M-28 40 q7 -12 14 0 t28 0" {...st} strokeWidth="7" /></>}
      {m === 'sleepy' && <>{Eyes(() => <path d="M-18 4 H18" {...st} />)}<path d="M-9 36 H9" {...st} strokeWidth="7" /><text x="78" y="-34" fill={C} fontSize="26" fontWeight="700" className="zz">z</text></>}
    </g>
  )
}
const Arm = () => (<><rect x="-15" y="-4" width="30" height="62" rx="15" fill="url(#og)" /><circle cy="62" r="15" fill="url(#nv)" /><rect x="-13" y="60" width="26" height="52" rx="13" fill="url(#nv)" /><rect x="-14" y="88" width="28" height="10" rx="5" fill="url(#og)" /><circle cy="118" r="17" fill="url(#nv)" />{[-14, -3.5, 7].map(x => <rect key={x} x={x} y="126" width="7" height="20" rx="3.5" fill="url(#og)" />)}</>)
const Ear = ({ x }) => (<g transform={`translate(${x} 232)`}><circle r="38" fill="url(#nv)" /><circle r="29" fill="none" stroke={C} strokeWidth="5" filter="url(#glow)" /><circle r="19" fill="#1B1F6B" />{[-8, 0, 8].map(y => <rect key={y} x="-11" y={y - 1.5} width="22" height="3" rx="1.5" fill="#8EA0FF" />)}</g>)
const Leg = ({ x, y }) => (<g transform={`translate(${x} ${y})`}><rect x="-15" width="30" height="36" rx="15" fill="url(#og)" /><rect x="-22" y="30" width="44" height="40" rx="18" fill="url(#nv)" /><rect x="-22" y="58" width="44" height="14" rx="7" fill="#262A4F" /><rect x="-10" y="40" width="20" height="4" rx="2" fill={C} /></g>)

export default function Robot() {
  const [mood, setMood] = useState('normal'), [say, setSay] = useState("Hi! I'm RV-Bot. Poke me 👆"), [hover, setHover] = useState(false), [n, setN] = useState(0)
  const head = useRef(), face = useRef(), root = useRef(), timer = useRef(), idle = useRef(), clicks = useRef([])
  const react = (m, txt, ms = 2400) => { setMood(m); setSay(txt); clearTimeout(timer.current); timer.current = setTimeout(() => { setMood('normal'); setSay('') }, ms) }
  useEffect(() => {
    const arm = () => { clearTimeout(idle.current); idle.current = setTimeout(() => { setMood('sleepy'); setSay('zzz...') }, 15000) }
    const move = (e) => {
      const r = root.current.getBoundingClientRect(), cl = (v) => Math.max(-1, Math.min(1, v * 2.4))
      const dx = cl((e.clientX - r.left - r.width / 2) / innerWidth), dy = cl((e.clientY - r.top - r.height / 2) / innerHeight)
      head.current.style.transform = `rotate(${dx * 7}deg) translate(${dx * 8}px,${dy * 5}px)`
      face.current.style.transform = `translate(${dx * 16}px,${dy * 9}px)`
      setMood(m => m === 'sleepy' ? 'normal' : m); setSay(s => s === 'zzz...' ? '' : s); arm()
    }
    const t = setTimeout(() => setSay(s => s.startsWith('Hi!') ? '' : s), 5000)
    arm(); addEventListener('pointermove', move)
    return () => { removeEventListener('pointermove', move); clearTimeout(idle.current); clearTimeout(timer.current); clearTimeout(t) }
  }, [])
  const poke = () => {
    const now = Date.now(); clicks.current = [...clicks.current.filter(x => now - x < 2500), now]
    const k = clicks.current.length >= 4 ? 'dizzy' : ['surprised', 'love', 'wink'][n % 3]
    setN(n + 1); react(k, MSG[k], k === 'dizzy' ? 3000 : 2400)
  }
  const m = mood !== 'normal' ? mood : hover ? 'happy' : 'normal'
  return (
    <div className="robot-wrap" ref={root} role="button" tabIndex={0} aria-label="Interactive robot, click to poke"
      onClick={poke} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && poke()}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {say && <div className="bubble" key={say}>{say}</div>}
      <svg viewBox="0 0 520 580" className={`bot m-${m}`}>
        <defs>
          <linearGradient id="og" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFA05A" /><stop offset=".5" stopColor="#FF6A1A" /><stop offset="1" stopColor="#D9480F" /></linearGradient>
          <linearGradient id="nv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5560E0" /><stop offset="1" stopColor="#1E2380" /></linearGradient>
          <linearGradient id="sv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F7F9FC" /><stop offset="1" stopColor="#98A2B3" /></linearGradient>
          <pattern id="sl" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1.4" fill="#000" opacity=".35" /></pattern>
          <clipPath id="scr"><rect x="135" y="147" width="250" height="162" rx="58" /></clipPath>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <ellipse className="shadow" cx="260" cy="556" rx="110" ry="14" fill="#7C2D12" opacity=".16" />
        <g className="float"><g key={'p' + n} className="pop">
          <Leg x="236" y="468" /><Leg x="286" y="462" />
          <g transform="translate(208 400) rotate(28)"><Arm /></g>
          <g className="arm-r"><g transform="translate(312 400) rotate(-28)"><Arm /></g></g>
          <rect x="205" y="372" width="110" height="110" rx="50" fill="url(#og)" />
          <circle cx="260" cy="428" r="24" fill="url(#nv)" /><circle cx="260" cy="428" r="11" {...fill} className="pulse" />
          <ellipse cx="236" cy="396" rx="18" ry="8" fill="#fff" opacity=".35" />
          <g ref={head} className="headwrap"><g transform="rotate(-5 260 360)">
            <line className="ant" x1="328" y1="104" x2="392" y2="36" stroke="#C9D0DC" strokeWidth="3" /><circle cx="392" cy="34" r="6" fill="url(#nv)" /><ellipse cx="328" cy="104" rx="14" ry="8" fill="url(#nv)" />
            <ellipse cx="260" cy="366" rx="48" ry="14" fill="url(#nv)" />
            <path d="M100 232 C100 132 170 90 260 90 C350 90 420 132 420 240 C420 322 370 362 260 362 C150 362 100 322 100 232Z" fill="url(#og)" />
            <ellipse cx="190" cy="128" rx="72" ry="22" transform="rotate(-18 190 128)" fill="#fff" opacity=".28" />
            <Ear x="104" /><Ear x="416" />
            <rect x="128" y="140" width="264" height="176" rx="64" fill="url(#sv)" /><rect x="135" y="147" width="250" height="162" rx="58" fill="#050812" />
            <g clipPath="url(#scr)"><g ref={face} className="face"><Face m={m} /></g><rect x="135" y="147" width="250" height="162" fill="url(#sl)" /></g>
            <rect x="135" y="147" width="250" height="162" rx="58" fill="none" stroke="#2B3BFF" strokeOpacity=".55" strokeWidth="3" />
          </g></g>
          {m === 'love' && [0, 1, 2].map(i => <path key={i} className="fh" style={{ animationDelay: i * .35 + 's' }} transform={`translate(${200 + i * 60} 80) scale(.8)`} d={heart} fill="#FF5C8A" />)}
        </g></g>
      </svg>
    </div>
  )
}
