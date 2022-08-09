import Head from 'next/head';
import Image from 'next/image'
import Layout from '../components/layout.js';
import styles from '../components/gallery.module.css';

export default function Music() {
    return (
        <Layout>
            <Head>
                <title>music</title>
            </Head>
            <div className={styles.list}>
            <div>
                <h3>postcards from the summer</h3>
                <p>2021/10/12</p>
                <p>the song that captures the atmosphere of this project</p>
                <audio controls src="/music/2021-10-12 postcards from the summer.wav">
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
            <div>
                <h3>orchid ave</h3>
                <p>2022/07/10</p>
                <p>inspired by a trip in southern california</p>
                <audio controls src="/music/2022-07-10 orchid ave.wav">
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
            <div>
                <h3>breezy</h3>
                <p>2022/07/31</p>
                <p>the sound</p>
                <audio controls src="/music/2022-07-31 breezy.wav">
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
            </div>
        </Layout>
    )
}