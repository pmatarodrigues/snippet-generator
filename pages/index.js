import Head from 'next/head'
import { useState } from 'react'

// Components
import Section from '../common/components/elements/Section/Section'
import Navbar from '../common/components/navbar/Navbar'
import CodeContext from '../context/state'

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  const [code, setCode] = useState("dsaodijasoidjasofjaofiaj")
  const [title, setTitle] = useState("")
  const [trigger, setTrigger] = useState("")

  return (
    <CodeContext.Provider value={{ code, setCode, title, setTitle, trigger, setTrigger }}>
      <div className={styles.container}>
        <Head>
          <title>Snippet Generator</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Section position={"original"} />
          <Section position={"result"} />
        </main>


      </div>
    </CodeContext.Provider>
  )
}
