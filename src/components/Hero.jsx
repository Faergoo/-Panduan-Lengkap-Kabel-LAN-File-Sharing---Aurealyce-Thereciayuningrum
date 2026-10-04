import { motion } from "framer-motion";
import { BookOpen, PlayCircle, School, Code2, FileText, CalendarDays } from "lucide-react";
import HangingIDCard from "./HangingIDCard";
const go=id=>()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
export default function Hero() {
  const meta=[[School,"Politeknik Negeri Sriwijaya"],[Code2,"Jurusan Teknik Komputer dan Multimedia"],[FileText,"Modul Praktikum"]];
  return (
    <section id="top" className="hero">
      <svg className="hero-net" viewBox="0 0 600 600" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        {[[80,120,300,60],[300,60,520,200],[520,200,380,420],[380,420,120,480],[120,480,80,120],[300,60,380,420]].map((l,i)=>
          <motion.line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.6,delay:i*.2}}/>)}
        {[[80,120],[300,60],[520,200],[380,420],[120,480]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="7" className="node"/>)}
      </svg>
      <div className="wrap hero-grid">
        <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{duration:.7}}>
          <span className="kicker">Modul Praktikum Jaringan Komputer</span>
          <h1>Panduan Lengkap <em>Kabel LAN</em> & File Sharing</h1>
          <p>E-Learning interaktif mengenai pembuatan kabel UTP Ethernet, konfigurasi jaringan Peer-to-Peer, pengujian koneksi jaringan, dan mekanisme file sharing antar perangkat.</p>
          <ul className="meta">{meta.map(([I,t])=><li key={t}><I size={16}/>{t}</li>)}</ul>
          <div className="cta">
            <button className="btn primary" onClick={go("pengertian")}><BookOpen size={18}/>Mulai Belajar</button>
            <button className="btn ghost" onClick={go("media")}><PlayCircle size={18}/>Media & Tutorial</button>
          </div>
        </motion.div>
        <HangingIDCard />
      </div>
    </section>);
}
