import { motion } from "framer-motion";import { Laptop, Folder, FileText } from "lucide-react";
import Section from "./Section";import { shareSteps } from "../data/moduleData";
export default function FileSharing() {
  return (<Section id="sharing" kicker="Materi 06" title="Sharing File Antar Laptop">
    <div className="diagram">
      <div className="dev"><Laptop size={44}/><Folder size={22}/><b>Laptop A</b></div>
      <div className="link"><i/><motion.span className="file" animate={{left:["0%","85%"],opacity:[0,1,1,0]}} transition={{duration:2.2,repeat:Infinity}}><FileText size={20}/></motion.span><small>Transfer file</small></div>
      <div className="dev"><Laptop size={44}/><Folder size={22}/><b>Laptop B</b></div></div>
    <ol className="steps">{shareSteps.map((t,i)=><li key={i} className="card hov"><span className="num">{i+1}</span>{t}</li>)}</ol>
  </Section>);
}
