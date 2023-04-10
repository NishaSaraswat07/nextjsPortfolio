import Footer from '../components/Footer/footer'
import styles from '../components/Projects/project.module.css'

export default function ProjectPageLayout({ children }) {
  return (
      <>
          {children}
       <div className={styles.iconsContainer}>
            <Footer />
       </div>   
      </>
   
  )
}