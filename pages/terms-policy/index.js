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
import termsData from "../../data/terms-policy.json";

const TermsPolicyPage = () => {
  const { meta, breadcrumb } = termsData;
  const baseImageUrl = "https://r2.rapidscan.ai/rapidscan/main-site-image";
  
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`${baseImageUrl}/logo-dark.png`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`${baseImageUrl}/logo-dark.png`} />
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
              title={breadcrumb.title}
              text={breadcrumb.text}
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
