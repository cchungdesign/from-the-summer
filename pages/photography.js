import Head from 'next/head';
import Image from 'next/image'
import Layout from '../components/layout.js';
import styles from '../components/gallery.module.css';

import DSCF3301 from '../public/photography/DSCF3301.jpeg'
import DSCF2334 from '../public/photography/DSCF2334.jpeg'
import DSCF2340 from '../public/photography/DSCF2340.jpeg'
import DSCF5705 from '../public/photography/DSCF5705.jpeg'
import DSCF5710 from '../public/photography/DSCF5710.jpeg'
import DSCF5717 from '../public/photography/DSCF5717.jpeg'

export default function Photography() {
    return (
        <Layout>
            <Head>
                <title>photography</title>
            </Head>
            <div className={styles.gallery}>
                <Image src={DSCF3301} />
                <Image src={DSCF2334} />
                <Image src={DSCF2340} />
                <Image src={DSCF5705} />
                <Image src={DSCF5710} />
                <Image src={DSCF5717} />
            </div>
        </Layout>
    )
}