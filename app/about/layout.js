import Footer from '../components/Footer/footer'
import styles from '../components/About/about.module.css'

export default function AboutPageLayout({ children }) {
  return (
      <>
          {children}
       <div className={styles.iconsContainer}>
            <Footer />
       </div>   
      </>
   
  )
}