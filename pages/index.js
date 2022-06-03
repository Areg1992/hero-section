import Head from 'next/head';
import HeroSection from '../components/HeroSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sator</title>
                <meta name="description" content="Sator"/>
                <link rel="icon" href="/favicon.ico"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter&family=K2D:wght@600;700&display=swap"
                      rel="stylesheet"/>
            </Head>

            <HeroSection/>
        </>
    )
}
