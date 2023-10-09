import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Home = () => {
  const context = useContext(myContext);

  return (
    <>
      <Layout>
        <h2>Home</h2>
      </Layout>
    </>
  );
};

export default Home;
