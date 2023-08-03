import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
         <h1 className={styles.title}>Welcome to Cronlogix</h1>
         <p className={styles.desc}>We are a team of developers who are passionate about
          helping people building software that improves the lives of people.
          </p>
          <Button url="/portfolio" text="See our Portfolio"/>
      </div>

      <div className={styles.item}>
         <Image src="/hero.png" alt="profile" width={500} height={500} className={styles.img}/>
       </div>
    </div>
    )
}
