import React from 'react'
import styles from './Blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={"/hero.png"} 
            alt="hero"
            width={400}
            height = {250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        </Link>

        <Link href="/blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={"/hero.png"} 
            alt="hero"
            width={400}
            height = {250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        </Link>
      </div>
  )
}

export default Blog