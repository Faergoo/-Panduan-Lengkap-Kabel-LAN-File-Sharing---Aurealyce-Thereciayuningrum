import { useEffect, useState } from "react";
import { Menu, X, Network } from "lucide-react";
import { nav } from "../data/moduleData";
export default function Navbar() {
  const [open,setOpen]=useState(false),[active,setActive]=useState(""),[sc,setSc]=useState(false);
  useEffect(()=>{
    const f=()=>setSc(window.scrollY>20); f(); window.addEventListener("scroll",f,{passive:true});
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:"-45% 0px -50% 0px"});
    nav.forEach(([id])=>{const el=document.getElementById(id);el&&io.observe(el)});
    return()=>{window.removeEventListener("scroll",f);io.disconnect()};
  },[]);
  const go=id=>e=>{e.preventDefault();setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};
  return (
    <header className={`nav ${sc?"scrolled":""}`}>
      <div className="nav-in">
        <a href="#top" className="brand" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})}}><Network size={22}/> <span>Modul Jaringan</span></a>
        <button className="burger" aria-label="Buka menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
        <nav className={`links ${open?"open":""}`} aria-label="Navigasi utama">
          {nav.map(([id,l])=><a key={id} href={`#${id}`} onClick={go(id)} className={active===id?"on":""} aria-current={active===id?"true":undefined}>{l}</a>)}
        </nav>
      </div>
    </header>);
}
