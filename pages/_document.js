import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ overscrollBehaviorY: "none" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
