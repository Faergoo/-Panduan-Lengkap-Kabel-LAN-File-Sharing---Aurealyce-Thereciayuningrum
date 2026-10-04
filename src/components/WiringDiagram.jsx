import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { wiring } from "../data/moduleData";

const modes = {
  straight:  { label: "Kabel Straight",  ends: ["T568B", "T568B"] },
  crossover: { label: "Kabel Crossover", ends: ["T568B", "T568A"] }
};
const paint = (c, striped) =>
  striped ? `repeating-linear-gradient(45deg,#fff 0 5px,${c} 5px 10px)` : c;

function End({ title, std }) {
  const pins = wiring[std];
  return (
    <div className="end">
      <span className="end-label">{title}</span>
      <div className="card wcard">
        <div className="wcard-head">
          <h3>Standar {std}</h3>
          <span className="badge">Pin Standard {std.slice(-1)}</span>
        </div>
        <div className="wpanel" role="img" aria-label={`Susunan kabel ${std}`}>
          {pins.map(([n, c, s], i) => (
            <div className="wcol" key={i}>
              <span className="w" style={{ background: paint(c, s) }} />
              <small>{i + 1}</small>
            </div>
          ))}
        </div>
        <ul className="legend">
          {pins.map(([n, c, s], i) => (
            <li key={i}>
              <span className="dot-w" style={{ background: paint(c, s) }} />
              <span className="pn">{i + 1}.</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WiringDiagram() {
  const [mode, setMode] = useState("straight");
  const m = modes[mode];
  return (
    <Section kicker="Standar Susunan" title="Diagram T568A / T568B">
      <div className="wtop">
        <div className="tabs" role="tablist" aria-label="Jenis kabel">
          {Object.entries(modes).map(([id, v]) => (
            <button key={id} role="tab" aria-selected={mode === id}
              className={mode === id ? "on" : ""} onClick={() => setMode(id)}>
              {v.label}
            </button>
          ))}
        </div>
        <p className="wsum">
          Ujung 1 = <b>{m.ends[0]}</b> · Ujung 2 = <b>{m.ends[1]}</b>
        </p>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={mode} className="ends"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25 }}>
          <End title="Ujung 1" std={m.ends[0]} />
          <End title="Ujung 2" std={m.ends[1]} />
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}