import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/Context";
import logoLight from "../../public/images/logo/logo-1.png";
import logoDark from "../../public/images/logo/logo-2.png";
import Nav from "./Nav";

const PopupMobileMenu = () => {
  const { activeMobileMenu, setActiveMobileMenu, isLightTheme } =
    useAppContext();

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setActiveMobileMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMobileMenu]);

  return (
    <>
      <div className={`popup-mobile-menu ${activeMobileMenu ? "" : "active"}`}>
        <div
          className="bg"
          onClick={() => setActiveMobileMenu(!activeMobileMenu)}
        ></div>
        <div className="inner-popup">
          <div className="header-top">
            <div className="logo">
              <Link href="/" className="d-flex align-items-center">
                <Image
                  className="logo-light"
                  src={isLightTheme ? logoLight : logoDark}
                  height={30}
                  alt="Corporate Logo"
                />
                <span className="fs-1 ms-2 fw-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  RapidScan.AI
                </span>
              </Link>
            </div>
            <div className="close-menu">
              <button
                className="close-button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fa-sharp fa-regular fa-x"></i>
              </button>
            </div>
          </div>
          <div className="content">
            <Nav />

            <div className="rbt-sm-separator"></div>
            <div className="rbt-default-sidebar-wrapper">
              {/* <SmallNav /> */}
            </div>
          </div>
          <div className="header-btn d-block d-md-none">
            {/* <Link
              className="btn-default"
              target="_blank"
              href="/text-generator"
            > */}
            <Link
              className="btn-default"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=60108366750&text=Hi%2C%20Please%20connect%20me%20to%20RapidScanAI"
              onClick={(e) => {
                e.preventDefault();
                // Show popup with bullet points
                const popup = document.createElement('div');
                popup.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: white;
                        padding: 20px;
                        border-radius: 4px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        z-index: 1000;
                        width: 100%;
                        text-align: center;
                        font-size: 18px;
                        font-weight: 600;
                        color: #000;
                      `;
                popup.innerHTML = `
                        <span >
                        Redirecting you to WhatsApp...
                        <ul>
                          <li>Say something to get started</li>
                          <li>Follow the instructions received on whatsapp</li>
                        </ul>
                        </span>
                      `;
                document.body.appendChild(popup);
                setActiveMobileMenu(!activeMobileMenu);

                setTimeout(() => {
                  document.body.removeChild(popup);
                  window.open("https://api.whatsapp.com/send?phone=60108366750&text=Hi%2C%20Please%20connect%20me%20to%20RapidScanAI", "_blank");
                }, 4000);
              }}
            >
              Try with WhatsApp Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupMobileMenu;
