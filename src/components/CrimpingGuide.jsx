import { useState } from "react";import { motion } from "framer-motion";import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./Section";import { steps } from "../data/moduleData";
export default function CrimpingGuide() {
  const [s,setS]=useState(0);
  return (<Section id="crimping" kicker="Materi 03" title="Cara Pembuatan Kabel LAN">
    <div className="bar" role="progressbar" aria-valuenow={s+1} aria-valuemin={1} aria-valuemax={steps.length}><motion.i animate={{width:`${((s+1)/steps.length)*100}%`}}/></div>
    <ol className="timeline">{steps.map(([t,d],i)=>(
      <li key={t} className={i<=s?"done":""}><button onClick={()=>setS(i)} aria-label={`Langkah ${i+1}: ${t}`} aria-current={i===s?"step":undefined}>{i+1}</button>
        <div className={`card ${i===s?"cur":""}`}><h3>Langkah {i+1}</h3><b>{t}</b>{i===s&&<motion.p initial={{opacity:0}} animate={{opacity:1}}>{d}</motion.p>}</div></li>))}</ol>
    <div className="cta"><button className="btn ghost" disabled={!s} onClick={()=>setS(s-1)}><ChevronLeft size={18}/>Sebelumnya</button>
      <button className="btn primary" disabled={s===steps.length-1} onClick={()=>setS(s+1)}>Berikutnya<ChevronRight size={18}/></button></div>
  </Section>);
}
