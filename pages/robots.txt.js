export async function getServerSideProps({ res }) {
    const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL.replace(/\/$/, '');
    
    res.setHeader('Content-Type', 'text/plain');
    res.write(`# RapidScan AI Robots.txt
User-agent: *
Allow: /
Allow: /utilize
Allow: /about-us
Allow: /contact-us
Allow: /privacy-policy
Allow: /terms-policy
Disallow: /_next/

Sitemap: ${baseUrl}/sitemap.xml`);
    res.end();
  
    return { props: {} };
  }
  
  export default function Robots() {
    return null;
  }
  