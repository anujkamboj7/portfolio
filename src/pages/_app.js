import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id='my-script'
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=G-07P2MPTH17`}
      />

      <Script id='google-analyitics-script' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

        gtag('config', 'G-07P2MPTH17')
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
