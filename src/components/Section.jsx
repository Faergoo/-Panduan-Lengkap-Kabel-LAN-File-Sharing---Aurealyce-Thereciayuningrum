import { motion } from "framer-motion";
export default function Section({ id, kicker, title, children, className="" }) {
  const hid=`${id||title.replace(/\W+/g,"-")}-h`;
  return (
    <section id={id} className={`sec ${className}`} aria-labelledby={hid}>
      <motion.div className="wrap" initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.6}}>
        {kicker && <span className="kicker">{kicker}</span>}
        <h2 id={hid}>{title}</h2>{children}
      </motion.div>
    </section>);
}
