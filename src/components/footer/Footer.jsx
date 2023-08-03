import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 CronLogix. All rights reserved.</div>

        <div className={styles.social}>
        <Image src="/linkedin.png" width={15} height={15}  className={styles.icon} alt="" />
        <Image src="/instagram.png" width={15} height={15}  className={styles.icon}alt="" />
        <Image src="/tiktok.png" width={15} height={15} className={styles.icon} alt="" />
        <Image src="/whatsapp.png" width={15} height={15} className={styles.icon} alt="" />
        <Image src="/youtube.png" width={15} height={15}  className={styles.icon}alt="" />
        <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="" />
        <Image src="/facebook.png" width={15} height={15} className={styles.icon} alt="" />
        </div>
    
    </div>
  )
}

export default Footer