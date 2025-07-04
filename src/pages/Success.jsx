import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">Order Successful!</h2>
          <p>Your Order has been Successfully Placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
