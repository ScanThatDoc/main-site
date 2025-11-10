import Head from "next/head";

const PageHead = ({ title }) => {
  const baseImageUrl = "https://r2.rapidscan.ai/rapidscan/main-site-image";
  
  return (
    <>
      <Head>
        <title>{`RapidScan.AI - AI-Powered OCR & Document Processing Solution`}</title>
        <meta name="description" content="Transform your document processing with RapidScan.AI's intelligent OCR technology. Our AI-powered solution offers advanced document scanning, data extraction, and invoice processing automation. Perfect for businesses seeking efficient document management and AP automation." />
        <meta name="keywords" content="OCR software, document scanning software, OCR scanning app, image to text OCR, AI-powered OCR invoice processing, invoice scanning software, intelligent document processing, document automation, document AI, data extraction, data automation, data capture solutions, PDF data extraction, AI document extraction tool, invoice processing automation, automated invoice processing software, accounts payable automation, purchase order processing software, invoice OCR software, receipt scanning app for business, AI document processing software, no-code document capture platform" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="RapidScan.AI - AI-Powered OCR & Document Processing Solution" />
        <meta property="og:description" content="Transform your document processing with RapidScan.AI's intelligent OCR technology. Our AI-powered solution offers advanced document scanning, data extraction, and invoice processing automation." />
        <meta property="og:image" content={`${baseImageUrl}/logo-1.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RapidScan.AI - AI-Powered OCR & Document Processing Solution" />
        <meta name="twitter:description" content="Transform your document processing with RapidScan.AI's intelligent OCR technology. Our AI-powered solution offers advanced document scanning, data extraction, and invoice processing automation." />
        <meta name="twitter:image" content={`${baseImageUrl}/logo-1.png`} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="600" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="RapidScan.AI" />
        <meta name="author" content="RapidScan.AI" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RapidScan.AI" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${baseImageUrl}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${baseImageUrl}/favicon-16x16.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${baseImageUrl}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`${baseImageUrl}/android-chrome-192x192.png`} />
        <link rel="icon" type="image/png" sizes="512x512" href={`${baseImageUrl}/android-chrome-512x512.png`} />
        <meta name="msapplication-TileImage" content={`${baseImageUrl}/mstile-150x150.png`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
};

export default PageHead;
