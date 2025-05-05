import React from "react";
import Context from "@/context/Context";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Head from 'next/head';

const TermsPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - RapidScan AI Document Scanning</title>
        <meta name="description" content="Read RapidScan AI's privacy policy to understand how we protect your data and maintain security while providing advanced document scanning services." />
        <meta name="keywords" content="RapidScan AI privacy policy, data protection, document security, privacy terms, data handling, security measures" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy - RapidScan AI Document Scanning" />
        <meta property="og:description" content="Learn how RapidScan AI protects your data and maintains security" />
        <meta property="og:image" content="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/logo-dark.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RapidScan AI Privacy Policy" />
        <meta name="twitter:description" content="Learn how RapidScan AI protects your data and maintains security" />
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
              title="Privacy Policy"
              text="Privacy Policy"
            />

            <PrivacyPolicy />
            <Footer />
            <Copyright />
          </div>
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
