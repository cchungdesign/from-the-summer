import Head from 'next/head';
import Image from 'next/image'
import Layout from '../components/layout.js';
import styles from '../components/gallery.module.css';

export default function Illustration() {
    return (
        <Layout>
            <Head>
                <title>illustration</title>
            </Head>
            <div className={styles.gallery}>
                <Image src="/illustration/by-the-ocean.jpeg" alt="by the ocean" width="2480" height="3508" />
                <Image src="/illustration/pearl-of-the-sea.jpeg" alt="pearl of the sea" width="2480" height="3508" />
                <Image src="/illustration/hermosa-beach.jpeg" alt="hermosa beach" width="1200" height="1600" />
                <Image src="/illustration/santa cruz portrait.jpg" alt="santa cruz portrait" width="2480" height="3508" />
            </div>
        </Layout>
    )
}