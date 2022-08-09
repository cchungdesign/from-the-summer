import Head from 'next/head';
import Image from 'next/image'
import Layout from '../components/layout.js';
import styles from '../components/gallery.module.css';

export default function Photography() {
    return (
        <Layout>
            <Head>
                <title>photography</title>
            </Head>
            <div className={styles.gallery}>
                <Image src="/../public/photography/DSCF3301.jpeg" width="4000" height="6000" />
                <Image src="/../public/photography/DSCF2334.jpeg" width="4000" height="6000" />
                <Image src="/../public/photography/DSCF2340.jpeg" width="5839" height="3893" />
                <Image src="/../public/photography/DSCF5705.jpeg" width="4000" height="6000" />
                <Image src="/../public/photography/DSCF5710.jpeg" width="4000" height="6000" />
                <Image src="/../public/photography/DSCF5717.jpeg" width="4000" height="6000" />
            </div>
        </Layout>
    )
}