import { motion } from "framer-motion";import { Laptop } from "lucide-react";
import Section from "./Section";import { laptopSteps } from "../data/moduleData";
export default function LaptopConnection() {
  return (<Section id="koneksi" kicker="Materi 04" title="Cara Menghubungkan 2 Laptop">
    <div className="diagram" role="img" aria-label="Laptop A terhubung kabel LAN ke Laptop B">
      <div className="dev"><Laptop size={48}/><b>Laptop A</b></div>
      <div className="link"><i/><motion.i className="pulse" animate={{left:["0%","100%"]}} transition={{duration:1.8,repeat:Infinity,ease:"linear"}}/><small>Kabel LAN</small></div>
      <div className="dev"><Laptop size={48}/><b>Laptop B</b></div></div>
    <ol className="steps">{laptopSteps.map((t,i)=><li key={i} className="card hov"><span className="num">{i+1}</span>{t}</li>)}</ol>
  </Section>);
}
