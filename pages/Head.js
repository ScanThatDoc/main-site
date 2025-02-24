import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`${title} || Scan The Doc - Invoice Workflow Automation `}</title>
        <meta name="description" content="Streamline your invoice processing with Scan The Doc's advanced OCR technology. Automate data extraction, reduce manual entry errors, and accelerate your accounts payable workflow. Try our AI-powered invoice automation solution today." />
        <meta name="keywords" content="invoice automation, OCR invoice processing, AI-powered data extraction, AP workflow optimization, smart document scanning, automated invoice management" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Scan The Doc - Invoice Workflow Automation" />
        <meta property="og:description" content="Automate invoice processing with AI-powered OCR technology. Streamline AP workflows and eliminate manual data entry." />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://yourdomain.com/your-image.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scan The Doc - Invoice Workflow Automation" />
        <meta name="twitter:description" content="Automate invoice processing with AI-powered OCR technology. Streamline AP workflows and eliminate manual data entry." />
        {/* <meta name="twitter:image" content="https://yourdomain.com/your-image.jpg" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default PageHead;
