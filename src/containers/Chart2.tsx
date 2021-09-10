import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/BASE_URL";

export const Chart2 = () => {
  const [fixtures, setFixture] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/fixtures", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + "oB5i2lAnkoCo4dLd8pI1avSLsiee9unDteaSdrgnco",
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFixture(data.response);
      });
  }, []);

  return <div></div>;
};
