import { motion } from "framer-motion";
import styles from './MainBanner.module.css';

export default function MainBanner() {
  return (
    <div className={styles.mainBanner}>
      <motion.div initial={{ x: 0 }}
        whileInView={{ opacity: 1 }} animate={{ x: 500 }}>
        ajshdkuahskdfuaksfhkasfdnasd
      </motion.div>
      <motion.div animate={{ x: 200 }} style={{width: "fit-content"}}>
        <div>banner</div>
      </motion.div>
      <motion.div animate={{ x: 100 }}>
        <div>banner</div>
        <div>banner</div>
        <div>banner</div>
        <div>banner</div>
      </motion.div>
    </div>
  )
}