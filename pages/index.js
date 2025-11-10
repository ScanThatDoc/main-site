import BackToTop from "./backToTop";
import HomePage from "./home";
import Head from 'next/head';

export default function Home() {
  const baseImageUrl = "https://r2.rapidscan.ai/rapidscan/main-site-image";

  return (
    <>
      <Head>
        <title>RapidScan AI - Smart Document Scanning & Analysis Platform</title>
        <meta name="title" content="RapidScan AI - Smart Document Scanning & Analysis Platform" />
        <meta name="description" content="Transform your document management with RapidScan AI. Our advanced AI-powered platform makes document scanning, analysis, and data extraction faster, smarter, and more efficient. Experience the future of document processing." />
        <meta name="keywords" content="RapidScan AI, document scanning, OCR technology, AI document analysis, automated data extraction, intelligent document processing, document management system" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rapidscan.ai/" />
        <meta property="og:title" content="RapidScan AI - Smart Document Scanning & Analysis Platform" />
        <meta property="og:description" content="Transform your document management with RapidScan AI. Experience intelligent document scanning and analysis powered by AI." />
        <meta property="og:image" content={`${baseImageUrl}/logo-1.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rapidscan.ai/" />
        <meta name="twitter:title" content="RapidScan AI - Smart Document Scanning" />
        <meta name="twitter:description" content="Transform your document management with RapidScan AI. Experience intelligent document scanning and analysis powered by AI." />
        <meta name="twitter:image" content={`${baseImageUrl}/logo-1.png`} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="RapidScan AI" />
        <link rel="canonical" href="https://rapidscan.ai/" />
      </Head>
      <HomePage />
      <BackToTop />
    </>
  );
}
