import Section from "./Section";import { Router } from "lucide-react";import { intro } from "../data/moduleData";
export default function Introduction() {
  return (<Section id="pengertian" kicker="Materi 01" title="Pengertian Kabel LAN / Ethernet">
    <div className="grid">{intro.map(([t,d],i)=>(
      <article className="card hov" key={t}><span className="num">{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></article>))}
      <article className="card visual" aria-hidden="true"><Router size={64}/></article></div>
  </Section>);
}
