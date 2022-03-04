import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEventHandler, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [input, setInput] = useState('');
  function handleSubmit(){
      
    
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Performance with React - Conciliation </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <label>Search</label>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button>Buscar</button>
        </form>
    </div>
  )
}

export default Home
