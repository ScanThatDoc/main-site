import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Context from "@/context/Context";
import { useAppContext } from "@/context/Context";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import solutionsData from "../../data/solutions.json";
import pageContent from "../../data/solutionsPageContent.json";

const { buttons = {}, sections = {} } = pageContent;

const replaceTemplate = (template = "", solution) => {
  if (!template) return "";
  const title = solution?.hero?.title ?? "";
  return template
    .replace(/{{solutionTitle}}/g, title)
    .replace(/{{solutionTitleLower}}/g, title.toLowerCase());
};

const buttonPresets = {
  primary: {
    style: {
      background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
      color: "#ffffff",
      border: "none",
      padding: "14px 32px",
      borderRadius: "12px",
      fontWeight: "600",
      fontSize: "16px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 4px 12px rgba(139, 92, 246, 0.4)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textAlign: "center",
    },
    hover: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(139, 92, 246, 0.5)",
    },
    reset: {
      transform: "translateY(0)",
      boxShadow: "0 4px 12px rgba(139, 92, 246, 0.4)",
    },
  },
  secondary: {
    style: {
      backgroundColor: "#111827",
      color: "#ffffff",
      border: "none",
      padding: "14px 32px",
      borderRadius: "12px",
      fontWeight: "600",
      fontSize: "16px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 4px 10px rgba(17, 24, 39, 0.25)",
      transition: "all 0.2s ease",
      cursor: "pointer",
      textAlign: "center",
    },
    hover: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 16px rgba(17, 24, 39, 0.3)",
    },
    reset: {
      transform: "translateY(0)",
      boxShadow: "0 4px 10px rgba(17, 24, 39, 0.25)",
    },
  },
};

const buttonIcons = {
  bookDemo: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1 21 21 20.1 21 19V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tryNow: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7V12L15 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const envValueMap = {
  NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL,
  NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
};

const SolutionPageContent = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { isLightTheme } = useAppContext();

  // Find the solution data based on slug
  const solution = solutionsData.solutions.find((s) => s.slug === slug);
  const heroButtonOrder = sections?.hero?.buttonOrder ?? [];
  const heroButtons = heroButtonOrder
    .map((key) => ({ key, ...buttons[key] }))
    .filter((button) => button.label);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);

  if (!solution) {
    return (
      <div className="container py-5">
        <h1>Solution not found</h1>
        <Link href="/" className="btn-default mt-3">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center" style={{ paddingTop: "50px", marginBottom: "70px" }}>
                <span className="theme-gradient fw-semibold text-uppercase letter-spacing-1">
                  {solution.hero.badge}
                </span>
                <h1 className="title" style={{ marginTop: "30px" }}>{solution.hero.title}</h1>
                <p
                  className="description"
                  style={{ fontSize: "1.50rem", lineHeight: "1.8", marginTop: "20px" }}
                >
                  {solution.hero.description}
                </p>
                
                <div className="button-group d-flex flex-column flex-md-row justify-content-center gap-3" style={{ marginTop: "40px" }}>
                  {heroButtons.map(({ key, label, env, fallbackUrl, variant }) => {
                    const preset = buttonPresets[variant] ?? buttonPresets.primary;
                    return (
                      <button
                        key={key}
                        onClick={(e) => {
                          e.preventDefault();
                          const targetUrl =
                            (env && envValueMap[env]) || fallbackUrl;
                          if (targetUrl) {
                            window.open(targetUrl, "_blank");
                          }
                        }}
                        style={preset.style}
                        onMouseOver={(e) => {
                          Object.entries(preset.hover).forEach(([cssProp, value]) => {
                            e.currentTarget.style[cssProp] = value;
                          });
                        }}
                        onMouseOut={(e) => {
                          Object.entries(preset.reset).forEach(([cssProp, value]) => {
                            e.currentTarget.style[cssProp] = value;
                          });
                        }}
                      >
                        {buttonIcons[key] ?? null}
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="rainbow-service-area rainbow-section-gap" style={{ background: isLightTheme ? '#f8f9fa' : 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--60">
                <h2 className="title">{sections?.keyFeatures?.title}</h2>
                <p className="description mt--20">
                  {replaceTemplate(sections?.keyFeatures?.descriptionTemplate, solution)}
                </p>
              </div>
            </div>
          </div>
          <div className="row row--30">
            {solution.keyFeatures.map((feature, index) => (
              <div className="col-lg-4 col-md-6 col-12 mt--30" key={index}>
                <div
                  className="rainbow-box-card h-100"
                  style={{
                    padding: '32px',
                    borderRadius: '16px',
                    background: isLightTheme ? '#ffffff' : 'rgba(255,255,255,0.04)',
                    border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <span style={{ fontSize: '28px' }}>{feature.icon}</span>
                  </div>
                  <h4 className="title mb--15">{feature.title}</h4>
                  <p className="description" style={{ opacity: 0.8 }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--60">
                <h2 className="title">
                  {replaceTemplate(sections?.howItWorks?.titleTemplate, solution)}
                </h2>
                <p className="description mt--20">
                  {sections?.howItWorks?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="row row--30">
            {solution.howItWorks.map((step, index) => (
              <div className="col-lg-4 col-md-6 col-12 mt--30" key={index}>
                <div className="text-center">
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#ffffff',
                    }}
                  >
                    {index + 1}
                  </div>
                  <h4 className="title mb--15">{step.title}</h4>
                  <p className="description" style={{ opacity: 0.8 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-World Use Cases Section */}
      <div className="rainbow-service-area rainbow-section-gap" style={{ background: isLightTheme ? '#f8f9fa' : 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--60">
                <h2 className="title">{sections?.useCases?.title}</h2>
                <p className="description mt--20">
                  {sections?.useCases?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="row row--30">
            {solution.useCases.map((useCase, index) => (
              <div className="col-lg-6 col-12 mt--30" key={index}>
                <div
                  style={{
                    padding: '32px',
                    borderRadius: '16px',
                    background: isLightTheme ? '#ffffff' : 'rgba(255,255,255,0.04)',
                    border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)',
                    height: '100%',
                  }}
                >
                  <h4 className="title mb--15">{useCase.title}</h4>
                  <p className="description" style={{ opacity: 0.8 }}>
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proven Results Section */}
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--60">
                <h2 className="title">{sections?.results?.title}</h2>
                <p className="description mt--20">
                  {sections?.results?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="row row--30">
            {solution.results.map((result, index) => (
              <div className="col-lg-3 col-md-6 col-12 mt--30" key={index}>
                <div className="text-center">
                  <div
                    style={{
                      fontSize: '48px',
                      fontWeight: '800',
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '12px',
                    }}
                  >
                    {result.stat}
                  </div>
                  <h5 className="title mb--10">{result.title}</h5>
                  <p className="description" style={{ opacity: 0.8, fontSize: '14px' }}>
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="rainbow-service-area rainbow-section-gap" style={{ background: isLightTheme ? '#f8f9fa' : 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--60">
                <h2 className="title">{sections?.challenges?.title}</h2>
                <p className="description mt--20">
                  {replaceTemplate(sections?.challenges?.descriptionTemplate, solution)}
                </p>
              </div>
            </div>
          </div>
          <div className="row row--30">
            {solution.challenges.map((challenge, index) => (
              <div className="col-lg-6 col-12 mt--30" key={index}>
                <div
                  style={{
                    padding: '32px',
                    borderRadius: '16px',
                    background: isLightTheme ? '#ffffff' : 'rgba(255,255,255,0.04)',
                    border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        color: '#ef4444',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {sections?.challenges?.labels?.challenge}
                    </span>
                  </div>
                  <h5 className="title mb--15">{challenge.challenge}</h5>
                  
                  <div style={{ marginTop: '20px', marginBottom: '12px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: 'rgba(34, 197, 94, 0.1)',
                        color: '#22c55e',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {sections?.challenges?.labels?.solution}
                    </span>
                  </div>
                  <p className="description" style={{ opacity: 0.8 }}>
                    {challenge.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--60">
                <h2 className="title">{sections?.faq?.title}</h2>
                <p className="description mt--20">
                  {replaceTemplate(sections?.faq?.descriptionTemplate, solution)}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {solution.faq.map((item, idx) => (
                <details
                  key={idx}
                  className="mb-3"
                  style={{
                    background: isLightTheme ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                    border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '18px',
                      outline: 'none',
                      listStyle: 'none',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: isLightTheme ? '#111827' : '#F3F4F6',
                    }}
                    onClick={(e) => {
                      const el = e.currentTarget.querySelector('[data-chevron]');
                      if (el) {
                        const open = e.currentTarget.parentElement?.hasAttribute('open');
                        requestAnimationFrame(() => {
                          el.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)';
                        });
                      }
                    }}
                  >
                    <span>{item.question}</span>
                    <span
                      data-chevron
                      style={{
                        transition: 'transform 0.2s ease',
                        display: 'inline-block',
                        color: isLightTheme ? '#111827' : '#F3F4F6',
                      }}
                    >
                      ⌄
                    </span>
                  </summary>
                  <div
                    className="mt-0"
                    style={{
                      opacity: isLightTheme ? 0.9 : 0.85,
                      padding: '0 24px 20px',
                      color: isLightTheme ? '#374151' : '#E5E7EB',
                    }}
                  >
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rainbow-service-area rainbow-section-gap" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="title text-white mb--20">
                {replaceTemplate(sections?.cta?.titleTemplate, solution)}
              </h2>
              <p className="description text-white mb--40" style={{ opacity: 0.95 }}>
                {sections?.cta?.description}
              </p>
              <div className="button-group d-flex flex-column flex-md-row justify-content-center gap-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const ctaButtonKey = sections?.cta?.primaryButton;
                    const buttonConfig = buttons[ctaButtonKey] ?? {};
                    const targetUrl =
                      (buttonConfig.env && envValueMap[buttonConfig.env]) ||
                      buttonConfig.fallbackUrl;
                    if (targetUrl) {
                      window.open(targetUrl, "_blank");
                    }
                  }}
                  style={{
                    background: '#ffffff',
                    color: '#7C3AED',
                    border: 'none',
                    padding: '14px 32px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    fontSize: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                >
                  {buttons[sections?.cta?.primaryButton]?.label}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SolutionPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find the solution data based on slug for meta tags
  const solution = solutionsData.solutions.find((s) => s.slug === slug);

  return (
    <>
      <Head>
        <title>{solution?.meta.title || "RapidScan Solutions"}</title>
        <meta name="description" content={solution?.meta.description || "Document automation solutions by RapidScan"} />
        <meta property="og:title" content={solution?.meta.title || "RapidScan Solutions"} />
        <meta property="og:description" content={solution?.meta.description || "Document automation solutions by RapidScan"} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
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

          <SolutionPageContent />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default SolutionPage;

