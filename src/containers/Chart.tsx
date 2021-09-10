import { useState, useEffect } from "react";
import { getMatches } from "../apis/fixtureAPI";
import { Fixture } from "../components/Fixture";

export const Chart = () => {
  const [fixtures, setFixture] = useState([]);
  const [favIds, setFav] = useState({});

  useEffect(() => {
    getMatches().then((data) => {
      setFixture(data.slice(0, 6));
    });
    const localFavList = localStorage.getItem("favList");
    setFav(JSON.parse(localFavList ? localFavList : "[]"));
  }, []);

  const addToFav = (data: string) => {
    setFav({ [data]: favIds[data] ? null : true });
    // setFav({ [data]: [data] ? null : true });

    localStorage.setItem("favList", JSON.stringify(favIds));
  };

  return (
    <div style={{ backgroundColor: "#EDF2FF", padding: 20 }}>
      {fixtures.length > 0 &&
        fixtures.map((item, index) => (
          <div style={{ flexDirection: "row" }}>
            <Fixture
              data={item}
              key={index}
              favIds={favIds}
              addToFav={addToFav}
            />
          </div>
        ))}
    </div>
  );
};
