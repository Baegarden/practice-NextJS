import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Assignment</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
