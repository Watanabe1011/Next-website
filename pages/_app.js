import { NextSeo } from 'next-seo';
import Context from "../context/context"

import Sidebar from "../components/Sidebar";

import About from "../components/About";
import Expertise from "../components/Expertise";
import Consult from "../components/Consult";
import Resume from "../components/Resume";
import TextBook from "../components/Textbook";
import Publications from "../components/Publicians";
import Contact from "../components/Contact";
import siteMetadata from '../utils/siteMetaData';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/responsive.scss';
import "highlight.js/styles/atom-one-dark.css";



// export const metadata = {
//   metadataBase: new URL(siteMetadata.siteUrl),
//   title: {
//     template: `%s | ${siteMetadata.title}`,
//     default: siteMetadata.title,
//   },
//   description: siteMetadata.description,
//   openGraph: {
//     title: siteMetadata.title,
//     description: siteMetadata.description,
//     url: siteMetadata.siteUrl,
//     siteName: siteMetadata.title,
//     images: [siteMetadata.socialBanner],
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   }
// };


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Context>
        <main>
          {/* <div className="d-flex flex-column">
            <div className="d-flex justify-content-end px-5">
              <Header />
            </div> */}
           <NextSeo
            title = {siteMetadata.title}
            description = {siteMetadata.description}
            openGraph={{
              url: siteMetadata.siteUrl,
              title: siteMetadata.title,
              description: siteMetadata.description,
              images: [siteMetadata.socialBanner],
              siteName: siteMetadata.title,
              locale: "en_US",
              type: "website",
            }}
            robotsProps={{
              nosnippet: true,
              notranslate: true,
              noimageindex: true,
              noarchive: true,
              maxSnippet: -1,
              maxImagePreview: 'large',
              maxVideoPreview: -1,
            }}
            />
            <Sidebar />
            <div className="main-content" id="main-wrapper">
                <nav className="navbar">
                  <ul className="navbar-list">
                    <li className="navbar-item">
                      <button aria-label='nav-about' className="navbar-link active" data-nav-link>
                        About
                      </button>
                    </li>

                    <li className="navbar-item">
                      <button aria-label='nav-resume' className="navbar-link" data-nav-link>
                        Resume
                      </button>
                    </li>

                    <li className="navbar-item">
                      <button aria-label='nav-textbook' className="navbar-link" data-nav-link>
                        TextBook
                      </button>
                    </li>

                    <li className="navbar-item">
                      <button aria-label='nav-pub' className="navbar-link" data-nav-link>
                        Publications
                      </button>
                    </li>

                    <li className="navbar-item">
                      <button aria-label='nav-blog' className="navbar-link" data-nav-link>
                        Blog
                      </button>
                    </li>

                    <li className="navbar-item">
                      <button aria-label='nav-contact' className="navbar-link" data-nav-link>
                        Contact
                      </button>
                    </li>
                  </ul>
                </nav>

                <article className="about active" data-page="about">
                  <About />
                  <section className="service">
                    <Expertise />
                  </section>
                  <section className="consult">
                    <Consult />
                  </section>
                </article>

                <article className="resume" data-page="resume">
                  <Resume />
                </article>

                <article className="textbook" data-page="textbook">
                  <TextBook />
                </article>

                <article className="publicians" data-page="publications">
                  <Publications />
                </article>

                <article className="blog" data-page="blog">
                  <Component {...pageProps} />
                </article>

                <article className="contact" data-page="contact">
                  <Contact />
                </article>
              </div>
          {/* </div> */}
        </main>
      </Context>
    </>


  );
}

export default MyApp;
