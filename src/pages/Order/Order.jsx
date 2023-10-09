import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Order = () => {
  const context = useContext(myContext);

  return (
    <Layout>
      <h2>Order</h2>
    </Layout>
  );
};

export default Order;
