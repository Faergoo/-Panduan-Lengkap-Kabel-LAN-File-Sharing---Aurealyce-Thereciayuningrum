import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { User, Network } from "lucide-react";
import { profile as p } from "../data/moduleData";

const fotos = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const foto = Object.values(fotos)[0];

const qr = Array.from({length:49},(_,i)=>(i*7+(i>>2)*3)%5<2);
const txt = "Teknik Informatika dan Multimedia • POLITEKNIK NEGERI SRIWIJAYA • 2026   ".repeat(8);

export default function HangingIDCard() {
  const [back,setBack]=useState(false); const moved=useRef(false);
  const x=useMotionValue(0), y=useMotionValue(0);
  const rot=useTransform(x,v=>v*0.08);
  const d=useTransform([x,y],([a,b])=>`M150 -20 C150 70, ${150+a*.7} ${110+b*.4}, ${150+a} ${205+b}`);
  const flip=()=>setBack(b=>!b);
  const release=(_,info)=>{
    const s={type:"spring",stiffness:70,damping:4.5,mass:1.2};
    animate(x,0,s);animate(y,0,s);
    if(Math.abs(info.offset.x)>90) flip();
    setTimeout(()=>{moved.current=false},0);
  };
  return (
    <div className="lanyard-stage">
      <svg className="lanyard-svg" viewBox="0 0 300 220" aria-hidden="true">
        <defs><linearGradient id="rb" x1="0" x2="1"><stop offset="0" stopColor="#be185d"/><stop offset=".5" stopColor="#f472b6"/><stop offset="1" stopColor="#be185d"/></linearGradient></defs>
        <motion.path d={d} stroke="rgba(131,24,67,.25)" strokeWidth="34" fill="none" transform="translate(4 6)"/>
        <motion.path id="lp" d={d} stroke="url(#rb)" strokeWidth="32" fill="none"/>
        <motion.path d={d} stroke="rgba(255,255,255,.35)" strokeWidth="32" strokeDasharray="1 3" fill="none"/>
        <text fontSize="9" fontWeight="700" letterSpacing="1.5" fill="#fff" dy="3"><textPath href="#lp">{txt}</textPath></text>
      </svg>
      <motion.div className="idgroup" style={{x,y,rotate:rot}} drag dragConstraints={{left:-80,right:80,top:-10,bottom:50}} dragElastic={.25} dragMomentum={false}
        onDragStart={()=>{moved.current=true}} onDragEnd={release}>
        <svg className="clip" viewBox="0 0 120 60" aria-hidden="true">
          <defs><linearGradient id="mt" x1="0" x2="1"><stop offset="0" stopColor="#9ca3af"/><stop offset=".5" stopColor="#f3f4f6"/><stop offset="1" stopColor="#6b7280"/></linearGradient></defs>
          <rect x="38" y="0" width="44" height="30" rx="8" fill="url(#mt)"/><rect x="48" y="8" width="24" height="14" rx="5" fill="#374151"/>
          <circle cx="60" cy="42" r="13" fill="none" stroke="url(#mt)" strokeWidth="5"/><rect x="50" y="26" width="20" height="10" rx="3" fill="url(#mt)"/>
        </svg>
        <div className="holder">
          <div className="holder-slot"/>
          <div className="scene" role="button" tabIndex={0} aria-pressed={back} aria-label="ID Card penyusun. Tekan Enter untuk membalik kartu"
            onClick={()=>!moved.current&&flip()} onKeyDown={e=>(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),flip())}>
            <motion.div className="flip" animate={{rotateY:back?180:0}} transition={{type:"spring",stiffness:90,damping:14}}>
              <div className="face front">
                <div className="holo"/>
                <div className="c-head"><Network size={14}/> MODUL JARINGAN</div>
                <div className="photo">
                  {foto ? <img src={foto} alt="Foto penyusun" draggable="false"/> : <User size={56}/>}
                </div>
                <h3>{p.name}</h3><span className="chip">{p.status}</span>
                <dl><dt>Mata Kuliah</dt><dd>{p.major}</dd><dt>Institusi</dt><dd>{p.school}</dd><dt>Dosen Pengampu</dt><dd>{p.cls}</dd></dl>
                <div className="c-foot"><b>{p.id}</b>
                  <svg viewBox="0 0 7 7" className="qr" aria-hidden="true">{qr.map((o,i)=>o&&<rect key={i} x={i%7} y={(i/7)|0} width="1" height="1"/>)}</svg></div>
              </div>
              <div className="face rear">
                <div className="holo"/>
                <h4>MODUL PRAKTIKUM</h4><p className="sub">Mata Pelajaran: Jaringan Komputer</p>
                <ul>{["Kabel LAN","P2P","IP Address","Ping Test","File Sharing"].map(t=><li key={t}>{t}</li>)}</ul>
                <p className="mini">Disusun oleh Aurealyce T, {p.cls}, {p.school}.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <p className="hint">Tarik, geser, atau klik kartu untuk membalik</p>
    </div>);
}