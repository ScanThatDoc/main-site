import React from "react";
import Context from "@/context/Context";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import TermsPolicy from "@/components/TermsPolicy/TermsPolicy";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Head from 'next/head';

const TermsPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - RapidScan AI Document Scanning</title>
        <meta name="description" content="Review RapidScan AI's terms of service to understand our document scanning service agreements, user responsibilities, and usage policies." />
        <meta name="keywords" content="RapidScan AI terms of service, usage policy, service agreement, document scanning terms, user guidelines, legal terms" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms of Service - RapidScan AI Document Scanning" />
        <meta property="og:description" content="Review RapidScan AI's terms of service and usage policies" />
        <meta property="og:image" content="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/logo-dark.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RapidScan AI Terms of Service" />
        <meta name="twitter:description" content="Review RapidScan AI's terms of service and usage policies" />
        <meta name="twitter:image" content="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/logo-dark.png" />
      </Head>

      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderTop />
            <Header
              headerTransparent="header-transparent"
              headerSticky="header-sticky"
              btnClass="rainbow-gradient-btn"
            />
            <PopupMobileMenu />
            <Breadcrumb
              title="Terms and Policy"
              text="Terms and Policy"
            />

            <TermsPolicy />
            <Footer />
            <Copyright />
          </div>
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
