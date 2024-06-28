import Booting from "@/components/booting/Booting";
import HomeMain from "@/components/home/Home";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={`${styles.cutive}`}>
      <Booting >
        <HomeMain />
      </Booting>
    </main>
  );
}
