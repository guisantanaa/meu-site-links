import React from 'react';
import Head from 'next/head';
import utilStyles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Guisantanaa</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Image
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          width={200}
          height={170}
          alt="profile"
        />
      </section>

      <div className={utilStyles.links}>
        <div className={utilStyles.profile}>
          <h2>Guilherme Santana</h2>
          <h2 className={utilStyles.h2}>Front End Developer</h2>
        </div>
        <Link href="https://github.com/guisantanaa">
          <a className={utilStyles.a}>Github</a>
        </Link>

        <Link href="https://twitter.com/GuigSantana22">
          <a className={utilStyles.a}>Twitter</a>
        </Link>

        <Link href="https://www.facebook.com/guilherme.santana.758399">
          <a className={utilStyles.a}>Facebook</a>
        </Link>

        <Link href="https://www.linkedin.com/in/guilherme-santana-185184170/">
          <a className={utilStyles.a}>Linkedin</a>
        </Link>

        <Link href="https://www.instagram.com/quilhermee/">
          <a className={utilStyles.a}>Instagram</a>
        </Link>
      </div>
    </>
  );
}
