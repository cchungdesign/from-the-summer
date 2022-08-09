import React from 'react'
import styles from './gallery.module.css'
import Image from 'next/image'

var images =[];

class App extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
}

export default function Gallery(props) {
  return (
    <div className={styles.gallery}>
        <Image className={styles.img} src={props.img} alt={props.imgalt} width="400" height="300"/>
    </div>
  )
}
