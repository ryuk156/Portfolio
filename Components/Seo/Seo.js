import Head from "next/head";

const Seo = () => {
  const siteName = "https://yash1560.me"
  const pageTitle = "Hello I a developer"
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Yash Patel | UI Engineer</title>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
     
     <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
    </Head>
  );
};

export default Seo