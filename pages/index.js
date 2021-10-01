import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Programming Heroes | Home</title>
        <meta name="keywords" content="heroes" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius illum necessitatibus quasi laudantium vitae. Ab sapiente magni, quas itaque, culpa error, consequuntur voluptatum eum est in deserunt deleniti quaerat maiores.</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius illum necessitatibus quasi laudantium vitae. Ab sapiente magni, quas itaque, culpa error, consequuntur voluptatum eum est in deserunt deleniti quaerat maiores.</p>
        <Link href="/heroes"><a className={styles.btn}>See Programming Heroes</a></Link> 
      </div>
    </>
  )
}
