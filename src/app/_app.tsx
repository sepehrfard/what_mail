import '../globals.css';
import { useEffect, useState } from 'react';
import Layout from './layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      // I'll do something with the URL before the page transitions
      return true;
    });
  }, [router]);

  return (
    <Layout>
      <Component {...pageProps} imageData={imageData} setImageData={setImageData} />
    </Layout>
  );
}

export default MyApp;
