import React from 'react'
import styles from './header.module.css'
import Link from 'next/link';

export default function Header() {
  return (
  <header className={styles.header}>
    <Link href="/">from the summer</Link>
    <div className={styles.navbar}>
      <Link href="/photography">
            <a>photography</a>
        </Link>
        <Link href="/illustration">
            <a>illustration</a>
        </Link>
        <Link href="/music">
            <a>music</a>
        </Link>
        <Link href="/about">
            <a>about</a>
        </Link>
    </div>
  </header>
  )
}
