import React from "react";
import Context from "@/context/Context";
import Head from "next/head";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Home from "@/components/Home/Home";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";

const HomePage = () => {
  const baseImageUrl = "https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>RapidScan AI - Intelligent Document Processing & Management</title>
        <meta name="title" content="RapidScan AI - Intelligent Document Processing & Management" />
        <meta name="description" content="Revolutionize your document workflow with RapidScan AI. Our cutting-edge AI technology transforms document processing with advanced OCR, automated data extraction, and intelligent analysis. Perfect for businesses seeking efficient document management solutions." />
        <meta name="keywords" content="document scanning software, AI document processing, OCR technology, automated data extraction, intelligent document management, business automation, document workflow, RapidScan AI" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rapidscan.ai/" />
        <meta property="og:title" content="RapidScan AI - Intelligent Document Processing & Management" />
        <meta property="og:description" content="Revolutionize your document workflow with RapidScan AI. Experience the power of AI-driven document processing and automated data extraction." />
        <meta property="og:image" content={`${baseImageUrl}/logo-1.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rapidscan.ai/" />
        <meta name="twitter:title" content="RapidScan AI - Smart Document Processing" />
        <meta name="twitter:description" content="Revolutionize your document workflow with RapidScan AI. Experience the power of AI-driven document processing." />
        <meta name="twitter:image" content={`${baseImageUrl}/logo-1.png`} />
        
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="RapidScan AI" />
        <meta name="generator" content="Next.js" />
        
        <link rel="canonical" href="https://rapidscan.ai/" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${baseImageUrl}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${baseImageUrl}/favicon-16x16.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${baseImageUrl}/apple-touch-icon.png`} />
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

          <Home />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
