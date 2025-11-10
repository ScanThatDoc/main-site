import { Router } from "next/router";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Head from 'next/head';

import "bootstrap/scss/bootstrap.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/feature.css";
import "../public/css/plugins/fontawesome-all.min.css";
import "../public/css/plugins/animation.css";
import "../node_modules/sal.js/dist/sal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
// ========= Plugins CSS END =========

import "../public/scss/style.scss";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleStart = (url) => url !== Router.asPath && setLoading(true);
    const scrollToHash = (hash, attempt = 0) => {
      if (typeof window === "undefined") return;

      const target = document.getElementById(hash);
      if (target) {
        const header = document.querySelector("header.rainbow-header");
        const headerHeight = header ? header.offsetHeight : 0;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (attempt < 5) {
        setTimeout(() => scrollToHash(hash, attempt + 1), 100);
      }
    };

    const handleComplete = (url) => {
      setLoading(false);

      if (typeof window !== "undefined" && url?.includes("#")) {
        const hash = url.split("#")[1];
        if (hash) {
          scrollToHash(hash);
        }
      }
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>RapidScan AI - Document Scanning & Analysis</title>
        <meta name="description" content="RapidScan AI - Advanced document scanning and analysis platform powered by artificial intelligence. Transform your document management with intelligent scanning solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="document scanning, AI scanning, document analysis, OCR, intelligent document processing" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RapidScan AI - Document Scanning & Analysis" />
        <meta property="og:description" content="Advanced document scanning and analysis platform powered by artificial intelligence." />
        <meta property="og:site_name" content="RapidScan AI" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RapidScan AI" />
        <meta name="twitter:description" content="Advanced document scanning and analysis platform powered by artificial intelligence." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </>
  );
}
