import { motion } from "framer-motion";import { Cable, Plug, Wrench, Scissors, Activity } from "lucide-react";
import Section from "./Section";import { tools } from "../data/moduleData";
const I={Cable,Plug,Wrench,Scissors,Activity};
export default function ToolsMaterials() {
  return (<Section id="alat" kicker="Materi 02" title="Alat & Bahan Crimping Kabel LAN">
    <div className="grid">{tools.map(([ic,n,d],i)=>{const Ic=I[ic];return(
      <motion.article key={n} className="card hov" whileHover={{y:-8,rotate:-.6}}><span className="num">{i+1}</span><Ic size={34} className="ic"/><h3>{n}</h3><p>{d}</p></motion.article>)})}</div>
  </Section>);
}
