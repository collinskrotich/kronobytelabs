import React from 'react'
import styles from './Contact.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" 
          alt="contact" 
          fill={true}
          className={styles.img} />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="text" placeholder='Name' className={styles.input} />
          <textarea 
          placeholder='Message' 
          rows={10}
          cols={30}
          className={styles.textarea} />
          <Button url="#" text="Send Message" />
        </form>
      </div>
    </div>
  )
}

export default Contact