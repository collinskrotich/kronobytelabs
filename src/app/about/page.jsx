import React from 'react'
import styles from './About.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="/webdev2.jpg" 
        alt="aboutimage" 
        fill={true}
        className={styles.img}/>

      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award winning digital experiences
        </h2>
      </div>

      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
         Aliquid exercitationem voluptatibus enim? Velit et itaque quod nisi, omnis natus praesentium, 
         doloremque amet repellendus, expedita earum blanditiis perspiciatis rerum culpa iusto!
          </p>
      </div>
      <div className={styles.item}>
      <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
         Aliquid exercitationem voluptatibus enim? Velit et itaque quod nisi, omnis natus praesentium, 
         doloremque amet repellendus, expedita earum blanditiis perspiciatis rerum culpa iusto!
          <br /> <br />
          - Creative Illustrations
          <br/>
          <br /> - Dynamic Websites
          <br />
          <br /> - Fast and Handy
          <br /> 
          <br />- Mobile Apps
          </p>
          <Button url="/contact" text="Contact"/>
          </div>
    </div>
    </div>
  )
}

export default About;