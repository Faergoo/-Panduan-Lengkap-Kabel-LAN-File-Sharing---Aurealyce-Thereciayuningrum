import { useState } from "react";import { AnimatePresence, motion } from "framer-motion";import { Copy, CheckCircle2 } from "lucide-react";
import Section from "./Section";import { ips } from "../data/moduleData";
export default function IPConfiguration() {
  const [t,setT]=useState("");
  const cp=async v=>{try{await navigator.clipboard.writeText(v)}catch{}setT(`${v} disalin`);setTimeout(()=>setT(""),1800)};
  return (<Section kicker="Konfigurasi" title="Pengaturan IP Address">
    <div className="scroll"><table className="tbl"><thead><tr><th>Perangkat</th><th>IP Address</th><th>Subnet Mask</th></tr></thead>
      <tbody>{ips.map(([n,ip,sm])=><tr key={n}><td>{n}</td><td><code>{ip}</code><button className="mini-btn" aria-label={`Salin IP ${n}`} onClick={()=>cp(ip)}><Copy size={15}/></button></td><td><code>{sm}</code></td></tr>)}</tbody></table></div>
    <AnimatePresence>{t&&<motion.div className="toast" role="status" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}}><CheckCircle2 size={18}/>{t}</motion.div>}</AnimatePresence>
  </Section>);
}
