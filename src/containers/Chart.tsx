import { useState, useEffect } from "react";
import { getMatches } from "../apis/fixtureAPI";
import { Fixture } from "../components/Fixture";

export const Chart = () => {
  const [fixtures, setFixture] = useState([]);

  useEffect(() => {
    getMatches().then((data) => {
      setFixture(data.slice(0, 6));
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#EDF2FF", padding: 20 }}>
      {fixtures.length > 0 &&
        fixtures.map((item, index) => (
          <div style={{ flexDirection: "row" }}>
            <Fixture data={item} key={index} />
          </div>
        ))}
    </div>
  );
};
