import { useState } from "react";import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";import { cats, cableKinds } from "../data/moduleData";
export default function CableTypes() {
  const [k,setK]=useState("straight"),c=cableKinds[k];
  return (<Section kicker="Jenis Kabel" title="Kategori & Tipe Kabel">
    <div className="grid">{cats.map(([n,s,f,u])=>(<article className="card hov" key={n}><h3>{n}</h3><p><b>Speed:</b> {s}</p><p><b>Frekuensi:</b> {f}</p><p><b>Penggunaan:</b> {u}</p></article>))}</div>
    <div className="tabs" role="tablist">{Object.entries(cableKinds).map(([id,v])=>
      <button key={id} role="tab" aria-selected={k===id} className={k===id?"on":""} onClick={()=>setK(id)}>{v.title}</button>)}</div>
    <AnimatePresence mode="wait"><motion.div key={k} className="card panel" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-14}} transition={{duration:.25}}>
      <h3>{c.title}</h3><p><b>Fungsi:</b> {c.fn}</p><p><b>Penggunaan:</b> {c.use}</p><p><b>Perangkat:</b> {c.devices}</p><p><b>Susunan kabel:</b> {c.wiring}</p></motion.div></AnimatePresence>
  </Section>);
}
