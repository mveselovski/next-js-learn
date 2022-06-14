import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(){

    return(
        <div className={styles.container}>
           <Head>
            <title>Artist to listen</title>
                <meta name="description" content="Artist to listen" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.title}>
                Artists to listen
             </h1>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <iframe  src="https://open.spotify.com/embed/album/4R4kfAauZEiomx62WN48fm?utm_source=generator" 
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
//                            allowFullScreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                        </iframe>
                    </div>
                    <div className={styles.card}>
                        <iframe src="https://open.spotify.com/embed/artist/4Xew6cotzgXZMLHT2UpTMV?utm_source=generator" 
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
//                            allowfullscreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                        </iframe>
                    </div>
                    <div className={styles.card}>
                        <iframe src="https://open.spotify.com/embed/artist/6zpptMjiapn5PB0Y5k3xWN?utm_source=generator" 
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
//                            allowfullscreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">`
                        </iframe>
                    </div>
                    <div className={styles.card}>
                        <iframe src="https://open.spotify.com/embed/artist/6jMXENspOIBHOTQNQDTxsW?utm_source=generator" 
                          width="100%" 
                          height="380" 
                          frameBorder="0" 
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                        </iframe>
                    </div>

                </div>
                <div className={styles.title} className={styles.card}>
                        <iframe src="https://open.spotify.com/embed/album/1mgBi9isDOEAKymmmWUEsL?utm_source=generator" 
                            width="100%" 
                            height="80" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                                
                        </iframe>
                </div>
            </main>
            <footer className={styles.footer}>
                <p1>
                    Created by<span className={styles.logo}>mveselovski</span>
                </p1>
            </footer>
        </div>
    )

}