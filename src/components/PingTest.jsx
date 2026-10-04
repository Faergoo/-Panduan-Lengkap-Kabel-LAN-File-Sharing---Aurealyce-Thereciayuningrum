import { useState, useRef } from "react";import { Play, CheckCircle2 } from "lucide-react";
import Section from "./Section";import { pingLines } from "../data/moduleData";
export default function PingTest() {
  const [ls,setLs]=useState([]),[run,setRun]=useState(false),[ok,setOk]=useState(false),tm=useRef();
  const start=()=>{if(run)return;setLs([]);setOk(false);setRun(true);let i=0;
    tm.current=setInterval(()=>{const l=pingLines[i];setLs(a=>[...a,l]);i++;if(i>=pingLines.length){clearInterval(tm.current);setRun(false);setOk(true)}},650)};
  return (<Section id="ping" kicker="Materi 05" title="Ping Test">
    <div className="term"><div className="term-bar"><i/><i/><i/><span>Command Prompt</span></div>
      <pre aria-live="polite">{`C:\\> ping 192.168.1.2\n`}{ls.join("\n")}{run&&<span className="cur-blink">_</span>}</pre></div>
    <div className="cta"><button className="btn primary" onClick={start} disabled={run}><Play size={18}/>{run?"Menjalankan...":"Jalankan Ping"}</button>
      <span className={`status ${ok?"ok":""}`}><i className="dot"/>{ok&&<CheckCircle2 size={16}/>}{ok?"Connection Successful":"Menunggu pengujian"}</span></div>
  </Section>);
}
