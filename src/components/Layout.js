import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import '../styles/index.css'
import * as styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div >
      <Header/>

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  )
}
