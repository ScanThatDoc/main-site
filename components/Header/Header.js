import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import logo from "../../public/images/logo/logo-2.png";
import logoDark from "../../public/images/logo/logo-1.png";
import Nav from "./Nav";
import DarkSwitch from "./dark-switch";
import headerData from "../../data/header.json";

const Header = ({ headerTransparent, headerSticky, btnClass }) => {
  const { activeMobileMenu, setActiveMobileMenu, isLightTheme, toggleTheme } =
    useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header
        className={`rainbow-header header-default ${headerTransparent} ${headerSticky} ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-2 col-md-6 col-6">
              <div className="logo">
                <Link href="/">
                  {isLightTheme ? (
                    <div className="d-flex align-items-center">
                      <Image
                        className="logo-light"
                        src={logoDark}
                        height={35}
                        priority={true}
                        alt="Logo"
                      />
                      <span className="fs-1 ms-2 fw-semibold " style={{ fontFamily: "'Poppins', sans-serif"  , color: '#805af5'}}>
                        {headerData.logo.text}
                      </span>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center">
                      <Image
                        className="logo-light"
                        src={logo}
                        height={35}
                        priority={true}
                        alt="ChatBot Logo"
                      />
                      <span className="fs-1 ms-2 fw-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {headerData.logo.text}
                      </span>
                    </div>
                  )}
                </Link>
              </div>
            </div>

            <div className="col-lg-8 d-none d-lg-block">
              <nav className="mainmenu-nav d-none d-lg-flex justify-content-center">
                <Nav />
              </nav>
            </div>

            <div className="col-lg-2 col-md-6 col-6 position-static">
              <div className="header-right">
                <div className="header-btn">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(process.env.NEXT_PUBLIC_WEBSITE_URL, "_blank");
                    }}
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#3c4043',
                      border: '1px solid #dadce0',
                      padding: '10px 10px',
                      borderRadius: '30px',
                      fontWeight: '500',
                      fontSize: '15px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      width: '240px',
                      textDecoration: 'none',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      justifyContent: 'center'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8eaed';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = '#9aa0a6';
                      e.currentTarget.style.color = '#202124';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                      e.currentTarget.style.borderColor = '#dadce0';
                      e.currentTarget.style.color = '#3c4043';
                    }}
                  >
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                    {headerData.buttons.joinWithGoogle}
                  </button>
                </div>

                <div className="mobile-menu-bar ml--5 d-flex justify-content-end d-lg-none">
                  <div className="hamberger">
                    <button
                      className="hamberger-button"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <i className="fa-sharp fa-regular fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
