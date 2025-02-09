// on importe pas React , Next le fait pour nous
// children ça sera tout ce qu'il y a au milieu de notre composant Layout
// page ça sera le nom dynamique de la page

//== import
// Head component : identique que le Head en Html , et on pourra par exemple mettre en dynamique le nom de notre page
// on va y mettre nos métas de l'application
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import styles from './layout.module.scss';


export default function Layout({ children, page }) {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>{page}</title>
        {/* donc pour bien comprendre quand je serais sur la page "à propos" le titre de l'onglet sera "à propos" grace à la props "page" */}
        <meta name="description" content="ICA Web Formation vous forme sur toute la partie instrumentation , Atex ou encore régulation , et tout ça en ligne"/>
        {/* c'est ici qu'on mettra nos balise meta pour le SEO / référencement naturel */}
      </Head>
      {/* là aussi une balise header comme en html , donc qui représente le header de notre page */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.container__wrapper}>
            <img className={styles.logo} src="/ica-logo.png" alt="ica-logo" />
            <h1 className={styles.container__title}>ICA WebFormation</h1>
          </div>
          <div className={styles.container__keyWord}>
        <p>Instrumentation<br/>
          Contrôle-commande<br/>
        Directives ATEX</p>
          </div>
        </div>
        <div className={styles.contact}>
          <a href="tel:+33644073309">+33 6 44 07 33 09</a>
          <a href="mailto:p.sigonnez@hotmail.fr" >contact@icawebformation.fr</a>
        </div>
          <h2 className={styles.header__h2}>Formation à distance avec formateur en ligne</h2>
        {/* *** nav *** */}
        <nav>
          <Link href="/">
            <a className={styles.navlink}>
              Accueil
            </a>
          </Link>
          <Link href="/quisommesnous">
            <a className={styles.navlink}>
              Qui sommes nous
            </a>
          </Link>
          <Link href="/formations">
            <a className={styles.navlink}>
              Nos formations
            </a>
          </Link>
          <Link href="/inscription">
            <a className={styles.navlink}>
              Inscription 
            </a>
          </Link>
          <Link href="/references">
            <a className={styles.navlink}>
              Nos références
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.navlink}>
              Contact
            </a>
          </Link>
        </nav>
      </header>
      <main className={styles.mainContainer}> 
      {children}
      </main>
      {/* voir comment fixer le footer en bas sans qu'il dépasse */}
      <footer className={styles.footerContainer}>
          {/* div footer_about */}
          <div className={styles.about}>
          <Link href="/">
            <a className={styles.about__link}>
              Ica - Web Formation
            </a>
          </Link>
            <p className={styles.about__text}>Agrément de formateur d'adultes N° 2019/0311</p>
            <p className={styles.about__text}>SIRET 878 135 896 00016</p>
            <p className={styles.about__text}>Déclaration d'activité 93840418984 </p>
            <a href="tel:+33644073309" className={styles.about__text}></a>
            <a href="mailto:p.sigonnez@hotmail.fr" className={styles.about__text}>p.sigonnez@hotmail.fr</a>
          </div>
          {/* div footer_map */}
          <ul className={styles.map}>
            <li>
            <Link href="/plandusite">
            <a className={styles.map__link}>
              Plan du site
            </a>
          </Link>
            </li>
            <li>
            <Link href="/Mentionslegales">
            <a className={styles.map__link}>
              Mentions légales
            </a>
          </Link>
            </li>
            <li>
            <Link href="/apropos">
            <a className={styles.map__link}>
              Qui sommes nous
            </a>
          </Link>
            </li>
            <li>
            <Link href="/formations">
            <a className={styles.map__link}>
              Nos formations
            </a>
          </Link>
            </li>
            <li>
            <Link href="/comment">
            <a className={styles.map__link}>
              Comment 
            </a>
          </Link>
            </li>
            <li>
            <Link href="/references">
            <a className={styles.map__link}>
              Nos références
            </a>
          </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={styles.map__link}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          {/* div footer_network */}
          {/* <div className={styles.social}>
            <span>Suivez-nous</span>
            <ul>
            <li>
            <Link href="/contact">
                <a className={styles.social__link}>
                  Linkedin
                </a>
              </Link>
            </li>
            <li>
            <Link href="/contact">
                <a className={styles.social__link}>
                  Facebook
                </a>
              </Link>
            </li>
            </ul>
          </div> */}
      </footer>
    </div>
  );
}
