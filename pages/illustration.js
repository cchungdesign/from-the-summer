import Head from 'next/head';
import Image from 'next/image'
import Layout from '../components/layout.js';
import styles from '../components/gallery.module.css';

import by_the_ocean from '../public/illustration/by-the-ocean.jpeg'
import pearl_of_the_sea from '../public/illustration/pearl-of-the-sea.jpeg'
import hermosa_beach from '../public/illustration/hermosa-beach.jpeg'
import santa_cruz_portrait from '../public/illustration/santa cruz portrait.jpg'

export default function Illustration() {
    return (
        <Layout>
            <Head>
                <title>illustration</title>
            </Head>
            <div className={styles.gallery}>
                <Image src={by_the_ocean} alt="by the ocean" />
                <Image src={pearl_of_the_sea} alt="pearl of the sea" />
                <Image src={hermosa_beach} alt="hermosa beach" />
                <Image src={santa_cruz_portrait} alt="santa cruz portrait" />
            </div>
        </Layout>
    )
}