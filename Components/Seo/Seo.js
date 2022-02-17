import Head from "next/head";

const Seo = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Yash Patel | UI Engineer</title>
      <meta
        property="og:title"
        content="Yash Patel | UI Engineer"
        key="title"
      />
      <meta property="og:url" content="https://www.yash1560.me/" key="url" />
      <meta property="og:image" content="/extra/me.png" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:image:alt" content="Yash Profile" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Seo;
