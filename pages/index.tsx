import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Table from '../components/table'
import { useContext, useState } from 'react'
import AppContext from "../context/AppContext"

interface Store {
  id: string
  commerce: string,
  cuit: string,
  concepts: string[],
  balance: string,
  active: string,
  lastSell: string
}
const Home: NextPage = () => {

  const [filter, setFilter] = useState("");
  const [active, setActive] = useState("not");
  const { state, setStore, setParams, cleanParams, setPage } = useContext(AppContext)
  const buildParams = () => {
    cleanParams()
    setParams(filter, active)
  }
  const clean = () => {
    cleanParams()
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Koibanx test
        </h1>
        <div className="columns mt-5 is-centered">
          <div className="column is-8 ">
            <div className="field is-grouped">
              <div className="control is-expanded">
                <input className="input" type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Buscar id/cuit/commercio" />
              </div>
              <div className="control">
                <div className="select">
                  <select value={active} onChange={e => setActive(e.target.value)}>
                    <option value="not">Activo</option>
                    <option value="true">Si</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
              <div className="control">
                <button className='button is-info' onClick={buildParams}>Buscar</button>
              </div>
              <div className="control">
                <button className='button is-info' onClick={clean}>Limpiar</button>
              </div>
            </div>
          </div>
        </div>
        <Table stores={state.stores} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with love by Arturo Guerrero
        </a>
      </footer>
    </div>
  )
}

export default Home
