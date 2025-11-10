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
                      window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com', "_blank");
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      fontSize: '15px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4), 0 2px 6px rgba(139, 92, 246, 0.3)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      letterSpacing: '0.3px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #9D6DF9 0%, #8C4DF0 100%)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.5), 0 4px 10px rgba(139, 92, 246, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.4), 0 2px 6px rgba(139, 92, 246, 0.3)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }}>
                      <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1 21 21 20.1 21 19V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {headerData.buttons.bookDemo}
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
