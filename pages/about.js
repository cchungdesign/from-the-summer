import Head from 'next/head';
import Image from 'next/image'
import Layout from '../components/layout.js';

export default function About() {
    return (
        <Layout>
            <p>a collection of creative works from 2021-2022 exploring summer, slice of life, warmth, and the ephemeral moments of youth.</p>
            <a href="mailto:cchungdesign@gmail.com">cchungdesign@gmail.com</a>
        </Layout>
    )
}