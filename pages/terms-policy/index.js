import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import TermsPolicy from "@/components/TermsPolicy/TermsPolicy";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";

const TermsPolicyPage = () => {
  return (
    <>
      <PageHead title="Terms and Policy" />

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
