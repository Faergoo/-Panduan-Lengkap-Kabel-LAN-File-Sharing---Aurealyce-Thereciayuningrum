import { PlayCircle } from "lucide-react";
import Section from "./Section";
import { media } from "../data/moduleData";

function toEmbed(u){
  const m=u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m?`https://www.youtube.com/embed/${m[1]}`:u;
}

export default function MediaSection() {
  return (
    <Section id="media" kicker="Materi 07" title="Media Interaktif">
      <div className="grid media-grid">
        {media.videos.map((v,i)=>(
          <article className="card hov" key={i}>
            <PlayCircle size={34} className="ic"/>
            <h3>{v.title}</h3>
            {v.url
              ? <iframe className="vid" src={toEmbed(v.url)} title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen/>
              : <div className="vid ph"><PlayCircle size={40}/></div>}
          </article>
        ))}
      </div>
    </Section>
  );
}