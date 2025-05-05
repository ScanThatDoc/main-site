export async function getServerSideProps({ res }) {
    const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL.replace(/\/$/, '');
    const currentDate = new Date().toISOString();

    const urlsWithPriority = [
      {
        url: `${baseUrl}`,
        priority: '1.0',
        changefreq: 'daily',
        lastmod: currentDate
      },
      {
        url: `${baseUrl}/utilize`,
        priority: '0.9',
        changefreq: 'weekly',
        lastmod: currentDate
      },
      {
        url: `${baseUrl}/about-us`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: currentDate
      },
      {
        url: `${baseUrl}/contact-us`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: currentDate
      },
      {
        url: `${baseUrl}/privacy-policy`,
        priority: '0.4',
        changefreq: 'yearly',
        lastmod: currentDate
      },
      {
        url: `${baseUrl}/terms-policy`,
        priority: '0.4',
        changefreq: 'yearly',
        lastmod: currentDate
      },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsWithPriority
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
    res.write(sitemap);
    res.end();

    return { props: {} };
}

export default function Sitemap() {
    return null;
}