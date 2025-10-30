import React from "react";
import Context from "@/context/Context";
import PageHead from "../Head";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Utilize from "@/components/Utilize/Utilize";
import BackToTop from "../backToTop";
import utilizePageData from "../../data/utilize-page.json";

const UtilizePage = () => {
  const { meta, breadcrumb } = utilizePageData;
  
  return (
    <>
      <PageHead title={meta.title} />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title={breadcrumb.title} text={breadcrumb.text} />

          <Utilize />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default UtilizePage;
