"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {motion} from 'framer-motion'
import Footer from './components/Footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <motion.div initial={{ y: "100%" }} animate={{ y: "calc(65vw - 100%)"}} transition={{duration:2}} className={styles.iconsContainer}>
         <Footer />
         <div className={styles.vl} />
        </motion.div>
        <motion.div
          className={styles.center}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image src='/picnisha.png' alt="my pic" width={260} height={260} priority />
          <motion.h2
             initial={{ x: "100%" }}
             animate={{ x: "calc(30vw - 100%)" }}
            transition={{duration: 3}}
          >
            Nisha
          </motion.h2>
          <motion.p>I am a frontend developer</motion.p>
        </motion.div>
    </main>
  )
}
