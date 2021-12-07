import Head from 'next/head';
import utilStyles from '../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import {
  BsTwitch,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
} from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Guisantanaa</title>
      </Head>

      <main>
        <section className={utilStyles.headingMd}>
          <Image
            src="/images/profile.jpeg"
            className={utilStyles.borderCircle}
            width={150}
            height={150}
            alt="profile"
          />
        </section>

        <section className={utilStyles.links}>
          <div className={utilStyles.profile}>
            <h2>Guilherme Santana</h2>
            <h2 className={utilStyles.h2}>Front End Developer 🧑‍💻</h2>
            <h2 className={utilStyles.h2}>Gamer 🎮</h2>
          </div>

          <Link href="https://github.com/guisantanaa">
            <a className={utilStyles.a}>
              <AiFillGithub size={20} />
              Github
            </a>
          </Link>

          <Link href="https://www.twitch.tv/guidevgamer">
            <a className={utilStyles.a}>
              <BsTwitch size={20} />
              Twitch
            </a>
          </Link>

          <Link href="https://twitter.com/GuigSantana22">
            <a className={utilStyles.a}>
              <BsTwitter size={20} />
              Twitter
            </a>
          </Link>

          <Link href="https://www.facebook.com/guilherme.santana.758399">
            <a className={utilStyles.a}>
              <BsFacebook size={20} />
              Facebook
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/guilherme-santana-185184170/">
            <a className={utilStyles.a}>
              <BsLinkedin size={20} />
              Linkedin
            </a>
          </Link>

          <Link href="https://www.instagram.com/quilhermee/">
            <a className={utilStyles.a}>
              <BsInstagram size={20} />
              Instagram
            </a>
          </Link>
        </section>
      </main>
    </>
  );
}
