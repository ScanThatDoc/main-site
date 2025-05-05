import React from "react";
import Context from "@/context/Context";
import Head from 'next/head';

import PageHead from "../Head";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import Contact from "@/components/Contact/Contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact RapidScan AI - Get in Touch With Our Team</title>
        <meta name="description" content="Have questions about RapidScan AI? Contact our team for support, demos, or partnership inquiries. We're here to help you with all your document scanning needs." />
        <meta name="keywords" content="contact RapidScan AI, support, customer service, document scanning help, AI consultation, business inquiries" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact RapidScan AI - Get in Touch With Our Team" />
        <meta property="og:description" content="Contact our team for support, demos, or partnership inquiries" />
        <meta property="og:image" content="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/logo-dark.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact RapidScan AI" />
        <meta name="twitter:description" content="Contact our team for support, demos, or partnership inquiries" />
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
            title="Get Started with an Enquiry"
            text="Contact Us"
          />

          <Contact />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default ContactPage;
