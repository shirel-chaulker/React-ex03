import React from "react";

export const TestingComponent = (props) => {
  const getLargeOrderFromKitchen = () => {
    // gonna take 3 sec
    let pr = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Getting food from butcher");
        let obj = "Wagga meat japanese";
        resolve(obj);
      }, 1000);
    });
    return pr;
  };
  const handleData = async () => {
    console.log("starting getting order");
    let result = await getLargeOrderFromKitchen();
    console.log(result);
    console.log("done");
  };

  return (
    <div>
      <h1>Testing component</h1>
      <button onClick={() => handleData()}>Load data</button>
    </div>
  );
};
