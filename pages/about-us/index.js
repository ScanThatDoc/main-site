import React from "react";
import Context from "@/context/Context";
import PageHead from "../Head";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import About from "@/components/About/about";
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About RapidScan AI - Our Story & Mission</title>
        <meta name="description" content="Learn about RapidScan AI's journey, our mission to revolutionize document scanning, and our commitment to innovation in AI-powered document analysis." />
        <meta name="keywords" content="about RapidScan AI, company mission, document scanning innovation, AI technology, company history, document analysis team" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About RapidScan AI - Our Story & Mission" />
        <meta property="og:description" content="Learn about RapidScan AI's journey and mission in AI-powered document scanning" />
        <meta property="og:image" content="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/logo-dark.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About RapidScan AI" />
        <meta name="twitter:description" content="Learn about RapidScan AI's journey and mission in AI-powered document scanning" />
        <meta name="twitter:image" content="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/logo-dark.png" />
      </Head>

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb
            title="About RapidScan.AI"
            text="About Us"
          />
          <About />
          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default AboutPage;
